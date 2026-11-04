import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TYPING_SNIPPETS } from '@/data/curriculum';
import { Zap, Target, Crosshair, Clock, RotateCcw, Play, Trophy, Flame } from 'lucide-react';

const MODES = [
  { id: 'normal', label: 'Normal', desc: 'Type at your own pace', icon: '📝' },
  { id: 'time', label: 'Time Attack', desc: '60 seconds sprint', icon: '⏱️' },
  { id: 'survival', label: 'Survival', desc: '3 lives, no mistakes', icon: '❤️' },
  { id: 'boss', label: 'Boss Battle', desc: '10 snippets, no errors', icon: '⚔️' },
];

export default function TypingGame() {
  const [mode, setMode] = useState('normal');
  const [gameState, setGameState] = useState('idle'); // idle, playing, finished
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [errors, setErrors] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [bestWpm, setBestWpm] = useState(0);
  const intervalRef = useRef(null);

  const currentSnippet = TYPING_SNIPPETS[snippetIndex % TYPING_SNIPPETS.length];

  useEffect(() => {
    if (gameState === 'playing') {
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 100);
    }
    return () => clearInterval(intervalRef.current);
  }, [gameState, startTime]);

  const startGame = () => {
    setGameState('playing');
    setTyped('');
    setErrors(0);
    setLives(3);
    setCombo(0);
    setElapsed(0);
    setStartTime(Date.now());
    setSnippetIndex(0);
  };

  const resetGame = () => {
    setGameState('idle');
    setTyped('');
    setErrors(0);
    setCombo(0);
    setElapsed(0);
  };

  const handleKey = (e) => {
    if (gameState !== 'playing') return;
    if (e.key === 'Backspace') {
      setTyped(prev => prev.slice(0, -1));
      return;
    }
    if (e.key.length === 1) {
      const newTyped = typed + e.key;
      const expected = currentSnippet[typed.length];
      if (e.key !== expected) {
        setErrors(prev => prev + 1);
        setCombo(0);
        if (mode === 'survival' || mode === 'boss') {
          setLives(prev => {
            const nl = prev - 1;
            if (nl <= 0) {
              setGameState('finished');
            }
            return nl;
          });
        }
      } else {
        setCombo(prev => prev + 1);
      }
      setTyped(newTyped);
      if (newTyped === currentSnippet) {
        // Snippet complete
        if (mode === 'boss' && snippetIndex < 9) {
          setSnippetIndex(prev => prev + 1);
          setTyped('');
        } else {
          setGameState('finished');
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [typed, gameState, mode, snippetIndex]);

  const minutes = elapsed / 60000;
  const wpm = minutes > 0 ? Math.round((typed.length / 5) / minutes) : 0;
  const accuracy = typed.length > 0 ? Math.round(((typed.length - errors) / typed.length) * 100) : 100;
  const xpEarned = Math.round(wpm * 0.5 + accuracy * 0.3 + combo * 2);
  const coinsEarned = Math.round(wpm * 0.2 + combo * 0.5);

  useEffect(() => {
    if (wpm > bestWpm) setBestWpm(wpm);
  }, [wpm, bestWpm]);

  return (
    <div className="space-y-6" tabIndex={0}>
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Python Typing Game</h1>
        <p className="text-muted-foreground mt-1">Practice typing real Python code and boost your speed</p>
      </div>

      {/* Mode selection */}
      {gameState === 'idle' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODES.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              onClick={() => setMode(m.id)}
              className={`bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border-2 transition-all cursor-pointer ${
                mode === m.id ? 'border-mint shadow-glow-mint' : 'border-border/50'
              }`}
            >
              <div className="text-3xl mb-2">{m.icon}</div>
              <h3 className="font-bold text-sm mb-1">{m.label}</h3>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Game area */}
      {gameState !== 'idle' && (
        <>
          {/* Stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
            {[
              { icon: Zap, label: 'WPM', value: wpm, color: 'mint' },
              { icon: Target, label: 'Accuracy', value: `${accuracy}%`, color: 'lavender' },
              { icon: Clock, label: 'Time', value: `${(elapsed / 1000).toFixed(1)}s`, color: 'amber' },
              { icon: Crosshair, label: 'Combo', value: `x${combo}`, color: 'coral' },
              { icon: Flame, label: 'Errors', value: errors, color: 'coral' },
              { icon: Trophy, label: 'Best WPM', value: bestWpm, color: 'mint' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-card rounded-xl p-3 shadow-soft text-center">
                  <Icon className={`w-4 h-4 mx-auto mb-1 text-${stat.color}`} />
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Lives (survival/boss mode) */}
          {(mode === 'survival' || mode === 'boss') && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Lives:</span>
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className={`text-xl ${i < lives ? '' : 'opacity-20'}`}>❤️</span>
              ))}
              {mode === 'boss' && (
                <span className="ml-4 text-sm text-muted-foreground">Snippet {snippetIndex + 1}/10</span>
              )}
            </div>
          )}

          {/* Code display */}
          <div className="bg-card rounded-2xl shadow-float overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-channel border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-coral/80" />
                  <div className="w-3 h-3 rounded-full bg-amber/80" />
                  <div className="w-3 h-3 rounded-full bg-mint/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">typing_{mode}.py</span>
              </div>
              <button onClick={resetGame} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted hover:bg-muted/70 transition-colors">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>
            <div className="p-6 font-mono text-sm bg-[#1e1e2e] min-h-[280px]">
              <pre className="whitespace-pre-wrap break-all leading-relaxed">
                {currentSnippet.split('').map((char, i) => {
                  let className = 'text-[#6c7086]';
                  if (i < typed.length) {
                    className = typed[i] === char ? 'text-mint' : 'text-coral bg-coral/20';
                  } else if (i === typed.length) {
                    className = 'text-[#cdd6f4] bg-mint/30 animate-pulse';
                  }
                  return <span key={i} className={className}>{char}</span>;
                })}
              </pre>
            </div>
          </div>
        </>
      )}

      {/* Start button */}
      {gameState === 'idle' && (
        <div className="text-center">
          <button
            onClick={startGame}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg gradient-duotone shadow-glow-mint hover:scale-105 transition-transform"
          >
            <Play className="w-5 h-5" /> Start Typing
          </button>
        </div>
      )}

      {/* Results */}
      <AnimatePresence>
        {gameState === 'finished' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl shadow-float p-8 text-center"
          >
            <div className="text-5xl mb-4">{wpm >= 60 ? '🏆' : wpm >= 40 ? '🎉' : '💪'}</div>
            <h2 className="text-2xl font-extrabold mb-2">
              {wpm >= 60 ? 'Excellent!' : wpm >= 40 ? 'Great Job!' : 'Keep Practicing!'}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto my-6">
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <div className="text-3xl font-bold text-mint">{wpm}</div>
                <div className="text-xs text-muted-foreground">WPM</div>
              </div>
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <div className="text-3xl font-bold text-lavender">{accuracy}%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <div className="text-3xl font-bold text-amber">+{xpEarned}</div>
                <div className="text-xs text-muted-foreground">XP Earned</div>
              </div>
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <div className="text-3xl font-bold text-coral">+{coinsEarned}</div>
                <div className="text-xs text-muted-foreground">Coins</div>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <button onClick={startGame} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all">
                <RotateCcw className="w-4 h-4" /> Try Again
              </button>
              <button onClick={resetGame} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-card border border-border/50 hover:bg-muted transition-colors">
                Change Mode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}