// PyVerse Academy — Python Curriculum Data
// 48 Modules, each with topics, notes, examples, quizzes, and exercises

export const ROADMAP_STEPS = [
  "Python Basics", "Intermediate Python", "Advanced Python", "NumPy", "Pandas",
  "SQL", "Flask", "FastAPI", "Projects", "Interview", "Job Ready"
];

export const MODULES = [
  { id: "m1", num: 1, title: "Introduction to Python", icon: "🐍", difficulty: "Beginner", time: "30 min", xp: 20, coins: 5, color: "mint",
    description: "Discover what Python is, why it's the world's most popular programming language, and where it's used.",
    objectives: ["Understand what Python is", "Learn where Python is used", "Set up your learning mindset"],
    prerequisites: ["None — this is the very beginning"],
    realWorldUses: ["Web Development", "Data Science", "AI & Machine Learning", "Automation", "Game Development"],
    careerBenefits: "Python is the #1 most in-demand programming language — knowing it opens doors in every tech field.",
    topics: [
      { id: "m1t1", title: "What is Python?", time: "10 min", xp: 20,
        intro: "Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum in 1991. It emphasizes code readability and simplicity.",
        explanation: "Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
        notes: {
          definition: "Python is a high-level, interpreted, general-purpose programming language.",
          whyWeUse: "Simple syntax, huge community, vast libraries, cross-platform, versatile.",
          syntax: "Python code runs line by line (interpreted), no compilation needed.",
          rules: ["Indentation defines code blocks", "Case-sensitive", "No semicolons needed", "Dynamic typing"],
          importantPoints: ["Interpreted language", "Object-oriented", "Dynamically typed", "Open source", "Cross-platform"],
          realLifeExample: "Think of Python like English — it's easy to read and write, making it perfect for communicating instructions to a computer.",
          codeExample: `print("Hello, World!")`,
          outputExample: "Hello, World!",
          memoryTrick: "Python = Powerful yet Simple — like a snake that glides smoothly through code.",
          interviewTips: "Know who created Python (Guido van Rossum) and when (1991). Mention it's interpreted and dynamically typed.",
          commonMistakes: ["Confusing Python 2 vs Python 3", "Forgetting indentation matters", "Not installing Python before coding"],
          bestPractices: ["Always use Python 3", "Use virtual environments", "Follow PEP 8 style guide"],
          revisionSummary: "Python is a high-level, interpreted, dynamically-typed, object-oriented language known for readability and simplicity.",
          cheatSheet: "High-level | Interpreted | Dynamic typing | OOP support | Cross-platform | Open source | Created 1991 by Guido van Rossum"
        },
        quiz: [
          { q: "Who created Python?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: 0 },
          { q: "In which year was Python released?", options: ["1989", "1991", "1995", "2000"], answer: 1 },
          { q: "Python is a ___-typed language.", options: ["statically", "dynamically", "strongly", "weakly"], answer: 1 },
          { q: "Python is which type of language?", options: ["Compiled", "Interpreted", "Assembly", "Machine"], answer: 1 }
        ],
        exercises: {
          beginner: ["Write a program that prints your name.", "Print 'I love Python!' on the screen."],
          intermediate: ["Print your name, age, and city on separate lines using a single print statement.", "Print a multi-line welcome message."],
          advanced: ["Research and list 5 real-world applications of Python. Print each as a numbered list."]
        },
        miniProject: "Create a program that prints a welcome banner with your name and a motivational quote.",
        companyTask: "Write a script that prints a company welcome message with the employee's name and start date.",
        interviewQuestions: ["Why is Python so popular?", "What are the key features of Python?", "How is Python different from Java?"]
      },
      { id: "m1t2", title: "Why Learn Python?", time: "10 min", xp: 20,
        intro: "Python is used by Google, Netflix, Instagram, Spotify, and NASA. It powers web apps, AI, data science, automation, and more.",
        explanation: "Python's versatility, simplicity, and massive ecosystem make it the go-to language for beginners and experts alike. It's consistently ranked as the most popular programming language.",
        notes: {
          definition: "Python is versatile enough to be used in web development, data science, AI, automation, scientific computing, and more.",
          whyWeUse: "Easy to learn, huge job market, massive community, extensive libraries, high salary potential.",
          syntax: "N/A — conceptual topic",
          rules: [],
          importantPoints: ["#1 on TIOBE Index", "Used by top tech companies", "High salary demand", "Beginner-friendly", "Massive community"],
          realLifeExample: "Instagram's backend is built with Django (Python web framework). Netflix uses Python for its recommendation engine.",
          codeExample: `# Python powers these industries:
# Web: Django, Flask
# Data: Pandas, NumPy
# AI: TensorFlow, PyTorch
# Auto: Selenium, BeautifulSoup`,
          outputExample: "N/A",
          memoryTrick: "Python = Power + Simplicity = Possibilities",
          interviewTips: "Be able to name specific companies and use cases for Python.",
          commonMistakes: ["Thinking Python is only for beginners", "Not knowing real-world applications"],
          bestPractices: ["Learn Python for a specific domain", "Build projects to showcase skills"],
          revisionSummary: "Python is the world's most popular language, used in web, data, AI, automation, and more by top companies.",
          cheatSheet: "Web (Django/Flask) | Data (Pandas/NumPy) | AI (TensorFlow/PyTorch) | Auto (Selenium) | Used by Google, Netflix, NASA"
        },
        quiz: [
          { q: "Which company uses Python for its backend?", options: ["Instagram", "Ford", "Boeing", "McDonald's"], answer: 0 },
          { q: "Python is consistently ranked as the ___ popular language.", options: ["least", "most", "average", "obscure"], answer: 1 },
          { q: "Which is NOT a common Python use case?", options: ["Web Dev", "Data Science", "OS Kernel", "Automation"], answer: 2 }
        ],
        exercises: {
          beginner: ["List 3 reasons why you want to learn Python.", "Name 2 companies that use Python."],
          intermediate: ["Research 3 Python job roles and their average salaries.", "Find 5 Python libraries and their use cases."],
          advanced: ["Write a report comparing Python with another language for a specific domain."]
        },
        miniProject: "Create a 'Why I Learn Python' poster program that prints your top 5 reasons.",
        companyTask: "Write a script that displays a company's tech stack using Python libraries.",
        interviewQuestions: ["Why should we hire a Python developer?", "What makes Python better than other languages for your use case?"]
      }
    ]
  },
  { id: "m2", num: 2, title: "Installation & Setup", icon: "⚙️", difficulty: "Beginner", time: "45 min", xp: 30, coins: 8, color: "mint",
    description: "Install Python, set up your IDE, and write your first program.",
    objectives: ["Install Python 3", "Set up VS Code", "Write and run your first program"],
    prerequisites: ["Module 1: Introduction to Python"],
    realWorldUses: ["Every Python project starts here"],
    careerBenefits: "A proper development environment is the foundation of professional coding.",
    topics: [
      { id: "m2t1", title: "Installing Python", time: "20 min", xp: 30,
        intro: "Download and install Python 3 from python.org. During installation, check 'Add Python to PATH'.",
        explanation: "Python installation adds the Python interpreter, pip package manager, and IDLE editor to your system. The PATH variable lets you run Python from any terminal.",
        notes: {
          definition: "Python installation sets up the interpreter and tools needed to run Python code.",
          whyWeUse: "Without Python installed, you cannot run Python programs on your machine.",
          syntax: `# Check installation:
python --version
# or
python3 --version`,
          rules: ["Always download from python.org", "Check 'Add to PATH' on Windows", "Use Python 3.x, not Python 2"],
          importantPoints: ["Python 3 is the current standard", "pip is the package manager", "IDLE is the built-in editor", "PATH enables terminal access"],
          realLifeExample: "Just like installing a game before playing, you install Python before coding.",
          codeExample: `# Verify Python installation
import sys
print(sys.version)`,
          outputExample: "3.12.0 (main, Oct  2 2023, ...)",
          memoryTrick: "PATH = Python Access Terminal Highway — always check it during install.",
          interviewTips: "Know how to check Python version and what pip is.",
          commonMistakes: ["Not checking 'Add to PATH'", "Installing Python 2 instead of 3", "Not restarting terminal after install"],
          bestPractices: ["Use the latest stable Python 3", "Use virtual environments", "Keep pip updated"],
          revisionSummary: "Install Python 3 from python.org, check 'Add to PATH', verify with python --version.",
          cheatSheet: "Download from python.org | Check 'Add to PATH' | Use Python 3 | Verify: python --version | pip for packages"
        },
        quiz: [
          { q: "Where should you download Python?", options: ["python.org", "github.com", "pypi.org", "any site"], answer: 0 },
          { q: "What should you check during Windows installation?", options: ["Add to PATH", "Install for all users", "Custom install", "All of the above"], answer: 3 },
          { q: "What command checks the Python version?", options: ["python --version", "python -v", "python version", "python -V"], answer: 0 },
          { q: "Which Python version should you use?", options: ["Python 2", "Python 3", "Python 1", "Any version"], answer: 1 }
        ],
        exercises: {
          beginner: ["Install Python and verify the version in terminal.", "Open IDLE and run print('Hello')."],
          intermediate: ["Install a package using pip (e.g., pip install requests).", "Create a virtual environment."],
          advanced: ["Set up Python with VS Code and the Python extension.", "Configure a virtual environment for a project."]
        },
        miniProject: "Create a setup verification script that prints Python version, platform, and installed packages.",
        companyTask: "Write a script that checks if required Python packages are installed and reports missing ones.",
        interviewQuestions: ["How do you check the Python version?", "What is pip and how do you use it?", "What is a virtual environment?"]
      },
      { id: "m2t2", title: "Setting Up VS Code", time: "25 min", xp: 30,
        intro: "VS Code is a free, powerful code editor. Install it, add the Python extension, and configure it for Python development.",
        explanation: "VS Code provides syntax highlighting, auto-completion, debugging, and terminal integration. The Python extension adds IntelliSense, linting, and debugging support.",
        notes: {
          definition: "VS Code is a lightweight but powerful source code editor with excellent Python support.",
          whyWeUse: "Professional-grade features, free, huge extension ecosystem, integrated terminal.",
          syntax: `# In VS Code terminal:
code .  # Opens current folder`,
          rules: ["Install the Python extension", "Select the correct Python interpreter", "Use integrated terminal"],
          importantPoints: ["Python extension is essential", "Select interpreter with Ctrl+Shift+P", "Integrated terminal for running code", "Debugging with F5"],
          realLifeExample: "VS Code is like a Swiss Army knife for coding — one tool, many features.",
          codeExample: `# VS Code features:
# - Syntax highlighting
# - Auto-completion (IntelliSense)
# - Debugging
# - Git integration
# - Integrated terminal`,
          outputExample: "N/A",
          memoryTrick: "VS Code = Very Smart Code editor — install the Python extension first!",
          interviewTips: "Know how to configure a Python development environment in VS Code.",
          commonMistakes: ["Not installing the Python extension", "Not selecting the interpreter", "Using a plain text editor instead"],
          bestPractices: ["Use VS Code with Python extension", "Enable format on save", "Use integrated terminal", "Install useful extensions like Pylance"],
          revisionSummary: "Install VS Code, add Python extension, select interpreter, use integrated terminal.",
          cheatSheet: "VS Code + Python extension | Select interpreter | Ctrl+Shift+P | F5 to debug | Integrated terminal"
        },
        quiz: [
          { q: "What extension is essential for Python in VS Code?", options: ["Python", "Java", "C++", "Ruby"], answer: 0 },
          { q: "How do you select the Python interpreter in VS Code?", options: ["Ctrl+Shift+P > Python: Select Interpreter", "File > Settings", "View > Interpreter", "Edit > Python"], answer: 0 },
          { q: "What key starts debugging in VS Code?", options: ["F5", "F9", "F11", "F1"], answer: 0 }
        ],
        exercises: {
          beginner: ["Install VS Code and the Python extension.", "Create and save a .py file."],
          intermediate: ["Configure format-on-save in VS Code.", "Set up a debug configuration."],
          advanced: ["Create a VS Code workspace with custom settings for a Python project."]
        },
        miniProject: "Set up a complete Python development environment and write a 'Hello World' program.",
        companyTask: "Create a project folder structure with VS Code workspace settings for a team project.",
        interviewQuestions: ["What IDE do you use and why?", "How do you debug Python code in VS Code?"]
      }
    ]
  },
  { id: "m3", num: 3, title: "print() Function", icon: "📤", difficulty: "Beginner", time: "30 min", xp: 20, coins: 5, color: "mint",
    description: "Master the print() function — your first step in Python output.",
    objectives: ["Use print() to display text", "Print multiple values", "Format output with sep and end"],
    prerequisites: ["Module 2: Installation & Setup"],
    realWorldUses: ["Debugging", "User output", "Logging", "Data display"],
    careerBenefits: "print() is the foundation of all output — every Python developer uses it daily.",
    topics: [
      { id: "m3t1", title: "Basic print()", time: "10 min", xp: 20,
        intro: "The print() function outputs text or data to the screen. It's the most commonly used Python function.",
        explanation: "print() is a built-in function that sends output to the standard output device (screen). You can print strings, numbers, variables, and expressions.",
        notes: {
          definition: "print() is a built-in function that outputs data to the console/screen.",
          whyWeUse: "To display information, debug code, show results, and communicate with users.",
          syntax: "print(object(s), sep=separator, end=end, file=file, flush=flush)",
          rules: ["Parentheses are required", "Strings need quotes", "Multiple items separated by commas", "sep default is space, end default is newline"],
          importantPoints: ["Built-in function", "Outputs to stdout", "Can print any data type", "sep and end parameters for formatting"],
          realLifeExample: "Like a megaphone — print() broadcasts your message to the screen.",
          codeExample: `print("Hello, World!")
print("My age is", 25)
print("Python", "is", "awesome")`,
          outputExample: "Hello, World!\nMy age is 25\nPython is awesome",
          memoryTrick: "print() = Put Results In Noticeable Text — it shows stuff on screen.",
          interviewTips: "Know the parameters: sep, end, file, flush. Understand the difference between print and return.",
          commonMistakes: ["Forgetting parentheses", "Not using quotes for strings", "Confusing print with return"],
          bestPractices: ["Use f-strings for formatting", "Use sep and end for custom formatting", "Don't overuse print for debugging in production"],
          revisionSummary: "print() outputs data to the screen. Use sep for separators and end for line endings.",
          cheatSheet: "print(value) | sep=' ' (default) | end='\\n' (default) | print('text') | print(a, b, c) | f-strings: print(f'{var}')"
        },
        quiz: [
          { q: "What does print() output to?", options: ["Screen (stdout)", "File", "Printer", "Network"], answer: 0 },
          { q: "What is the default value of the 'end' parameter?", options: ["' '", "'\\n'", "'\\t'", "''"], answer: 1 },
          { q: "What is the default value of the 'sep' parameter?", options: ["','", "' '", "':'", "''"], answer: 1 },
          { q: "Which is correct?", options: ["print('Hello')", "print Hello", "print:Hello", "print[Hello]"], answer: 0 }
        ],
        exercises: {
          beginner: ["Print 'Hello, Python!' on the screen.", "Print your name and age."],
          intermediate: ["Print three words separated by ' - ' using the sep parameter.", "Print a message without a newline at the end."],
          advanced: ["Print a formatted table using print() with sep and end.", "Print a multi-line ASCII art banner."]
        },
        miniProject: "Create a program that prints a personalized greeting card with borders.",
        companyTask: "Write a script that prints a formatted invoice with company name, date, and items.",
        interviewQuestions: ["What are the parameters of print()?", "How do you print without a newline?", "Difference between print and return?"]
      },
      { id: "m3t2", title: "Formatted Printing", time: "20 min", xp: 20,
        intro: "Learn f-strings, .format(), and % formatting for beautiful output.",
        explanation: "f-strings (introduced in Python 3.6) are the modern, preferred way to format strings. They allow embedding expressions inside string literals using curly braces.",
        notes: {
          definition: "f-strings allow embedding expressions inside string literals using {} braces.",
          whyWeUse: "Clean, readable, fast string formatting.",
          syntax: `f"Hello {name}, you are {age} years old."`,
          rules: ["Use f prefix before string", "Expressions in {} braces", "Can call functions inside {}", "Can use format specifiers: f'{pi:.2f}'"],
          importantPoints: ["f-strings are fastest", "Introduced in Python 3.6", "Can contain expressions", "Support format specifiers"],
          realLifeExample: "Like filling in a form template — f-strings insert values into placeholders.",
          codeExample: `name = "Alice"
age = 25
print(f"Hello, {name}! You are {age} years old.")
print(f"Next year, you will be {age + 1}.")
pi = 3.14159
print(f"Pi is {pi:.2f}")`,
          outputExample: "Hello, Alice! You are 25 years old.\nNext year, you will be 26.\nPi is 3.14",
          memoryTrick: "f-string = 'f' for 'format' — put f before quotes, {} for variables.",
          interviewTips: "Know f-strings, .format(), and % formatting. f-strings are preferred in modern Python.",
          commonMistakes: ["Forgetting the f prefix", "Using wrong variable names in {}", "Not using format specifiers correctly"],
          bestPractices: ["Use f-strings for new code", "Use .format() for compatibility", "Avoid % formatting (old style)"],
          revisionSummary: "f-strings (f'...{var}...') are the modern way to format strings in Python.",
          cheatSheet: "f'{var}' | f'{var:.2f}' | f'{var:>10}' | .format() | % formatting (old) | f-strings preferred"
        },
        quiz: [
          { q: "Which is the modern way to format strings?", options: ["f-strings", "% formatting", ".format()", "concatenation"], answer: 0 },
          { q: "What prefix do f-strings use?", options: ["f", "s", "str", "fmt"], answer: 0 },
          { q: "f'{3.14159:.2f}' gives?", options: ["3.14", "3.15", "3.14159", "3.1"], answer: 0 },
          { q: "In which Python version were f-strings introduced?", options: ["3.6", "3.0", "2.7", "3.10"], answer: 0 }
        ],
        exercises: {
          beginner: ["Use an f-string to print 'My name is ___ and I am ___ years old.'", "Print the result of 5 + 3 using an f-string."],
          intermediate: ["Format pi to 3 decimal places using an f-string.", "Print a table of names and ages using f-strings."],
          advanced: ["Create a formatted receipt using f-strings with alignment.", "Build a progress bar using f-string formatting."]
        },
        miniProject: "Create a program that prints a formatted student report card using f-strings.",
        companyTask: "Write a script that generates a formatted employee salary slip using f-strings.",
        interviewQuestions: ["What are f-strings?", "How do you format a float to 2 decimal places?", "Compare f-strings vs .format()."]
      }
    ]
  },
  { id: "m5", num: 5, title: "Variables", icon: "📦", difficulty: "Beginner", time: "45 min", xp: 30, coins: 8, color: "mint",
    description: "Learn to store and manipulate data using variables — the building blocks of any program.",
    objectives: ["Create and name variables", "Understand dynamic typing", "Reassign and use variables"],
    prerequisites: ["Module 3: print()"],
    realWorldUses: ["Storing user data", "Configuration values", "Game scores", "Calculations"],
    careerBenefits: "Variables are fundamental — every program uses them to store and manage data.",
    topics: [
      { id: "m5t1", title: "Creating Variables", time: "15 min", xp: 30,
        intro: "A variable is a named container that stores a value. In Python, you create a variable by assigning a value to a name.",
        explanation: "Python uses dynamic typing — you don't need to declare the type. The type is determined automatically when you assign a value. Variables can be reassigned to different types.",
        notes: {
          definition: "A variable is a named storage location that holds a value.",
          whyWeUse: "To store, reference, and manipulate data throughout a program.",
          syntax: "variable_name = value",
          rules: ["Must start with letter or underscore", "Can contain letters, digits, underscores", "Case-sensitive", "Cannot use keywords", "No spaces"],
          importantPoints: ["Dynamic typing", "No type declaration needed", "Can reassign to different type", "Case-sensitive", "Use descriptive names"],
          realLifeExample: "A variable is like a labeled box — you put something in it and find it by the label later.",
          codeExample: `name = "Alice"
age = 25
height = 5.6
is_student = True
print(name, age, height, is_student)

# Reassignment
x = 10
x = "Hello"  # Now x is a string`,
          outputExample: "Alice 25 5.6 True",
          memoryTrick: "Variable = Value + Label — a box with a name tag.",
          interviewTips: "Know naming rules, dynamic typing, and the difference from static typing. Mention snake_case convention.",
          commonMistakes: ["Using reserved keywords as names", "Starting with a number", "Using spaces", "Not using descriptive names"],
          bestPractices: ["Use snake_case for variables", "Use descriptive names", "Use constants in UPPER_CASE", "Initialize before use"],
          revisionSummary: "Variables store values. Python uses dynamic typing. Name them with snake_case, no keywords, no spaces.",
          cheatSheet: "name = value | snake_case | No keywords | Case-sensitive | Dynamic typing | Can reassign types"
        },
        quiz: [
          { q: "Which is a valid variable name?", options: ["my_var", "2var", "my-var", "my var"], answer: 0 },
          { q: "Python uses ___ typing.", options: ["static", "dynamic", "strong", "weak"], answer: 1 },
          { q: "Which is NOT a valid variable name?", options: ["_private", "myVar2", "2ndVar", "var_name"], answer: 2 },
          { q: "Variables in Python are ___.", options: ["case-insensitive", "case-sensitive", "always global", "typed at compile time"], answer: 1 }
        ],
        exercises: {
          beginner: ["Create variables for your name, age, and city. Print them.", "Create a variable and reassign it to a different type."],
          intermediate: ["Swap two variables without a third variable.", "Create variables for a product: name, price, quantity, in_stock."],
          advanced: ["Build a variable system for a simple banking app (account, balance, type).", "Create a configuration system using variables."]
        },
        miniProject: "Student Information System — store and display student details using variables.",
        companyTask: "Employee Record — create variables for employee ID, name, department, salary, and display a formatted record.",
        interviewQuestions: ["What are the rules for naming variables?", "What is dynamic typing?", "Can you reassign a variable to a different type?"]
      },
      { id: "m5t2", title: "Variable Naming & Scope", time: "15 min", xp: 30,
        intro: "Learn the conventions for naming variables and understand variable scope (local, global, nonlocal).",
        explanation: "Good variable names make code readable. Scope determines where a variable can be accessed — local (inside function), global (entire program), nonlocal (enclosing function).",
        notes: {
          definition: "Scope determines the visibility/accessibility of a variable in different parts of code.",
          whyWeUse: "Proper scoping prevents bugs and naming conflicts. Good names improve readability.",
          syntax: `global x  # Makes x global inside a function
nonlocal x  # Refers to enclosing function's variable`,
          rules: ["Local: inside functions", "Global: outside functions", "Enclosing: in nested functions", "Use 'global' keyword to modify global inside function"],
          importantPoints: ["LEGB rule: Local, Enclosing, Global, Built-in", "global keyword for global access", "nonlocal for enclosing scope", "Avoid global when possible"],
          realLifeExample: "Scope is like rooms in a house — a variable in the kitchen (local) can't be seen from the bedroom (another function).",
          codeExample: `x = 10  # Global

def my_func():
    y = 5  # Local
    global x
    x = 20  # Modifies global x
    print(x, y)

my_func()
print(x)  # 20`,
          outputExample: "20 5\n20",
          memoryTrick: "LEGB = Look Everywhere for Global Boxes — Local, Enclosing, Global, Built-in.",
          interviewTips: "Know LEGB rule, global vs nonlocal, and why to avoid globals.",
          commonMistakes: ["Using global unnecessarily", "Not understanding LEGB", "Shadowing variables"],
          bestPractices: ["Minimize global variables", "Use descriptive names", "Pass variables as parameters", "Use constants for fixed values"],
          revisionSummary: "Scope: Local (function), Global (program), Enclosing (nested). LEGB rule. Use 'global' keyword to modify globals.",
          cheatSheet: "Local (function) | Global (program) | Enclosing (nested) | LEGB rule | global keyword | nonlocal keyword"
        },
        quiz: [
          { q: "What does LEGB stand for?", options: ["Local, Enclosing, Global, Built-in", "Loop, Else, Global, Block", "Local, External, Global, Base", "List, Element, Global, Block"], answer: 0 },
          { q: "Which keyword modifies a global variable inside a function?", options: ["global", "nonlocal", "static", "public"], answer: 0 },
          { q: "A variable inside a function is ___ scope.", options: ["local", "global", "enclosing", "built-in"], answer: 0 },
          { q: "Which keyword refers to the enclosing function's variable?", options: ["nonlocal", "global", "super", "this"], answer: 0 }
        ],
        exercises: {
          beginner: ["Create a global variable and access it inside a function.", "Create a local variable inside a function and try accessing it outside (observe error)."],
          intermediate: ["Use the global keyword to modify a global variable inside a function.", "Demonstrate the LEGB rule with examples."],
          advanced: ["Create a nested function demonstrating nonlocal scope.", "Build a counter using global and local scope."]
        },
        miniProject: "Create a program with global and local variables that tracks a game score.",
        companyTask: "Build a configuration system with global settings and local overrides for different modules.",
        interviewQuestions: ["Explain the LEGB rule.", "What is the difference between global and nonlocal?", "Why should you avoid global variables?"]
      }
    ]
  },
  { id: "m6", num: 6, title: "Data Types", icon: "🔢", difficulty: "Beginner", time: "60 min", xp: 40, coins: 10, color: "mint",
    description: "Master Python's core data types: int, float, str, bool, list, tuple, dict, set.",
    objectives: ["Understand Python's data types", "Use type() to check types", "Convert between types"],
    prerequisites: ["Module 5: Variables"],
    realWorldUses: ["Data processing", "User input handling", "Database operations", "API responses"],
    careerBenefits: "Understanding data types is essential for writing correct, efficient code.",
    topics: [
      { id: "m6t1", title: "Numeric & Boolean Types", time: "20 min", xp: 40,
        intro: "Python has int (integers), float (decimals), complex (complex numbers), and bool (True/False).",
        explanation: "int is for whole numbers, float for decimals, complex for complex numbers, and bool represents True or False (subclass of int).",
        notes: {
          definition: "Numeric types: int (integers), float (decimals), complex (complex numbers). Boolean: bool (True/False).",
          whyWeUse: "Different data types for different kinds of numbers and logical values.",
          syntax: `x = 10  # int
y = 3.14  # float
z = 2 + 3j  # complex
flag = True  # bool`,
          rules: ["int: whole numbers (unlimited size)", "float: 64-bit decimal", "complex: real + imaginary", "bool: True(1) or False(0)"],
          importantPoints: ["int has unlimited precision", "float is IEEE 754 double", "bool is subclass of int", "True == 1, False == 0"],
          realLifeExample: "int = counting people, float = measuring temperature, bool = yes/no questions.",
          codeExample: `age = 25          # int
pi = 3.14159      # float
z = 2 + 3j        # complex
is_active = True  # bool
print(type(age), type(pi), type(z), type(is_active))
print(True + True)  # 2 (bool is int subclass)`,
          outputExample: "<class 'int'> <class 'float'> <class 'complex'> <class 'bool'>\n2",
          memoryTrick: "int = Integer, float = Floating point, bool = Boolean (True=1, False=0).",
          interviewTips: "Know that bool is a subclass of int, int has unlimited precision, float is 64-bit.",
          commonMistakes: ["Treating bool as non-numeric", "Not understanding float precision issues", "Confusing int and float division"],
          bestPractices: ["Use int for counting", "Use float for measurements", "Use bool for flags", "Be aware of float precision"],
          revisionSummary: "int (whole numbers), float (decimals), complex (a+bj), bool (True/False). bool is subclass of int.",
          cheatSheet: "int (unlimited) | float (64-bit) | complex (a+bj) | bool (True=1/False=0) | type() to check"
        },
        quiz: [
          { q: "What type is 3.14?", options: ["int", "float", "str", "complex"], answer: 1 },
          { q: "bool is a subclass of ___?", options: ["int", "float", "str", "object"], answer: 0 },
          { q: "True + True equals?", options: ["2", "True", "1", "Error"], answer: 0 },
          { q: "What does type(10) return?", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'num'>"], answer: 0 }
        ],
        exercises: {
          beginner: ["Create variables of each numeric type and print their types.", "Perform arithmetic with int and float."],
          intermediate: ["Demonstrate that bool is a subclass of int.", "Show float precision issues with 0.1 + 0.2."],
          advanced: ["Work with complex numbers: addition, multiplication.", "Build a calculator that handles int, float, and complex."]
        },
        miniProject: "Number Type Explorer — a program that takes input and displays its type and properties.",
        companyTask: "Financial Calculator — handle int and float for currency calculations with proper precision awareness.",
        interviewQuestions: ["What are Python's numeric types?", "Is bool a subclass of int?", "What is float precision?"]
      },
      { id: "m6t2", title: "Strings & None", time: "20 min", xp: 40,
        intro: "Strings (str) store text. None represents the absence of a value.",
        explanation: "Strings are sequences of characters enclosed in single, double, or triple quotes. None is Python's null value, representing 'nothing' or 'no value'.",
        notes: {
          definition: "str: sequence of characters. NoneType: represents absence of value (null).",
          whyWeUse: "Strings for text data. None for 'no value' or 'not set' states.",
          syntax: `s1 = 'hello'
s2 = "world"
s3 = '''multi
line'''
nothing = None`,
          rules: ["Strings are immutable", "Triple quotes for multi-line", "None is a singleton", "None is falsy"],
          importantPoints: ["Strings are immutable", "None is the only NoneType instance", "None is falsy", "Use 'is None' not '== None'"],
          realLifeExample: "String = a sentence. None = an empty box that says 'nothing here yet'.",
          codeExample: `name = "Alice"
multi = """Line 1
Line 2"""
result = None
print(type(name))    # <class 'str'>
print(type(result))  # <class 'NoneType'>
print(result is None) # True`,
          outputExample: "<class 'str'>\n<class 'NoneType'>\nTrue",
          memoryTrick: "str = string of characters. None = 'No' 'thing' exists here.",
          interviewTips: "Know strings are immutable, use 'is None' not '== None', None is falsy.",
          commonMistakes: ["Using == None instead of is None", "Trying to modify strings in place", "Not handling None values"],
          bestPractices: ["Use is None for None checks", "Strings are immutable — create new ones", "Initialize with None for optional values"],
          revisionSummary: "str (text, immutable), None (absence of value, singleton). Use 'is None' for checks.",
          cheatSheet: "str (immutable) | '...' or \"...\" or '''...''' | None (null) | is None (not == None) | None is falsy"
        },
        quiz: [
          { q: "Strings in Python are ___?", options: ["mutable", "immutable", "dynamic", "static"], answer: 1 },
          { q: "How should you check for None?", options: ["is None", "== None", "= None", "equals None"], answer: 0 },
          { q: "What is None in Python?", options: ["A keyword", "A singleton object", "A type", "An error"], answer: 1 },
          { q: "None is ___?", options: ["truthy", "falsy", "an integer", "a string"], answer: 1 }
        ],
        exercises: {
          beginner: ["Create strings using single, double, and triple quotes.", "Create a None variable and check it with 'is None'."],
          intermediate: ["Demonstrate string immutability by trying to change a character.", "Use None as a default parameter value."],
          advanced: ["Build a function that returns None for invalid input and handles it.", "Create a string manipulation toolkit."]
        },
        miniProject: "Text Analyzer — analyze a string and report its length, type, and properties.",
        companyTask: "Data Validator — check if fields are None or empty strings and report validation results.",
        interviewQuestions: ["Are strings mutable in Python?", "How do you check for None?", "What is NoneType?"]
      }
    ]
  },
  { id: "m10", num: 10, title: "Strings Deep Dive", icon: "📝", difficulty: "Beginner", time: "90 min", xp: 60, coins: 15, color: "mint",
    description: "Master string methods, slicing, formatting, and manipulation.",
    objectives: ["Use string methods", "Slice and index strings", "Format and manipulate strings"],
    prerequisites: ["Module 6: Data Types"],
    realWorldUses: ["Text processing", "Data cleaning", "User input validation", "Web scraping"],
    careerBenefits: "String manipulation is one of the most common tasks in real-world programming.",
    topics: [
      { id: "m10t1", title: "String Methods", time: "30 min", xp: 60,
        intro: "Python strings have powerful built-in methods: upper(), lower(), strip(), split(), join(), replace(), find(), and more.",
        explanation: "String methods return new strings (since strings are immutable). Common methods handle case conversion, splitting, joining, searching, and replacing.",
        notes: {
          definition: "String methods are built-in functions that operate on string objects.",
          whyWeUse: "To manipulate, search, clean, and transform text data.",
          syntax: "s.upper() | s.lower() | s.strip() | s.split(sep) | sep.join(list) | s.replace(old, new) | s.find(sub)",
          rules: ["Strings are immutable — methods return new strings", "Most methods don't modify in place", "strip() removes whitespace", "split() returns a list"],
          importantPoints: ["upper()/lower() for case", "strip() for whitespace", "split()/join() for splitting/joining", "replace() for substitution", "find()/index() for searching"],
          realLifeExample: "String methods are like text editing tools — uppercase, find & replace, trim spaces.",
          codeExample: `text = "  Hello, World!  "
print(text.strip())           # "Hello, World!"
print(text.upper())           # "  HELLO, WORLD!  "
print("a,b,c".split(","))      # ['a', 'b', 'c']
print("-".join(["a","b","c"])) # "a-b-c"
print("hello".replace("l","L"))# "heLLo"
print("hello".find("ll"))      # 2`,
          outputExample: "Hello, World!\n  HELLO, WORLD!  \n['a', 'b', 'c']\na-b-c\nheLLo\n2",
          memoryTrick: "USLJRF = Upper, Strip, Lower, Join, Replace, Find — the 6 most used string methods.",
          interviewTips: "Know that strings are immutable, methods return new strings, and common methods like split, join, strip, replace.",
          commonMistakes: ["Expecting in-place modification", "Not storing the result of a method", "Confusing find() (returns -1) and index() (raises error)"],
          bestPractices: ["Chain methods: s.strip().lower()", "Store results — strings are immutable", "Use split() and join() for parsing", "Use f-strings for formatting"],
          revisionSummary: "String methods: upper, lower, strip, split, join, replace, find. All return new strings (immutable).",
          cheatSheet: "upper() | lower() | strip() | split(sep) | join(list) | replace(old,new) | find(sub) | startswith() | endswith() | count()"
        },
        quiz: [
          { q: "What does 'hello'.upper() return?", options: ["HELLO", "hello", "Hello", "Error"], answer: 0 },
          { q: "What does '  hi  '.strip() return?", options: ["  hi  ", "hi", " hi ", "  hi"], answer: 1 },
          { q: "What does 'a,b,c'.split(',') return?", options: ["['a','b','c']", "'abc'", "['abc']", "Error"], answer: 0 },
          { q: "Strings are ___, so methods return ___ strings.", options: ["mutable, same", "immutable, new", "static, same", "dynamic, new"], answer: 1 }
        ],
        exercises: {
          beginner: ["Use upper(), lower(), and strip() on a string.", "Split a comma-separated string and print each part."],
          intermediate: ["Replace all spaces in a string with underscores.", "Join a list of words into a sentence."],
          advanced: ["Build a text cleaner that strips, lowercases, and removes punctuation.", "Create a CSV parser using split() and strip()."]
        },
        miniProject: "Text Formatter — a program that cleans and formats user input text with multiple string methods.",
        companyTask: "Data Cleaning Script — clean and standardize customer names and emails using string methods.",
        interviewQuestions: ["What are common string methods?", "Are strings mutable?", "Difference between find() and index()?"]
      },
      { id: "m10t2", title: "String Slicing & Indexing", time: "30 min", xp: 60,
        intro: "Access parts of strings using indexing (single character) and slicing (substrings).",
        explanation: "Strings are zero-indexed. Slicing uses [start:stop:step] syntax. Negative indices count from the end.",
        notes: {
          definition: "Indexing accesses a single character. Slicing extracts a substring using [start:stop:step].",
          whyWeUse: "To extract, reverse, and manipulate parts of strings.",
          syntax: "s[index] | s[start:stop] | s[start:stop:step] | s[-1] | s[::-1] (reverse)",
          rules: ["Zero-indexed", "Negative indices from end", "stop is exclusive", "step can be negative", "s[::-1] reverses a string"],
          importantPoints: ["Index 0 is first character", "Index -1 is last character", "Slicing doesn't modify original", "step=-1 reverses"],
          realLifeExample: "Slicing is like cutting a cake — you take a slice from start to end position.",
          codeExample: `s = "Python"
print(s[0])      # P
print(s[-1])     # n
print(s[0:3])    # Pyt
print(s[::2])    # Pto
print(s[::-1])   # nohtyP
print(s[1:5:2])  # yh`,
          outputExample: "P\nn\nPyt\nPto\nnohtyP\nyh",
          memoryTrick: "[start:stop:step] — Start, Stop (exclusive), Step. [::-1] = reverse!",
          interviewTips: "Know slicing syntax, negative indexing, and how to reverse a string with [::-1].",
          commonMistakes: ["Forgetting stop is exclusive", "Off-by-one errors", "Not understanding negative indices"],
          bestPractices: ["Use clear slice boundaries", "Use negative indices for end access", "s[::-1] for reversing", "Remember stop is exclusive"],
          revisionSummary: "Indexing: s[i]. Slicing: s[start:stop:step]. Negative indices from end. s[::-1] reverses.",
          cheatSheet: "s[0] (first) | s[-1] (last) | s[a:b] (a to b-1) | s[::2] (every 2nd) | s[::-1] (reverse) | stop is exclusive"
        },
        quiz: [
          { q: "What does 'Python'[0] return?", options: ["P", "p", "Python", "Error"], answer: 0 },
          { q: "What does 'Python'[::-1] return?", options: ["Python", "nohtyP", "Pytho", "n"], answer: 1 },
          { q: "What does 'Python'[1:4] return?", options: ["Pyt", "yth", "ytho", "Pyth"], answer: 1 },
          { q: "In 'Python'[0:3], index 3 is ___?", options: ["included", "excluded", "optional", "error"], answer: 1 }
        ],
        exercises: {
          beginner: ["Print the first and last character of a string.", "Slice the first 3 characters of a string."],
          intermediate: ["Reverse a string using slicing.", "Extract every other character from a string."],
          advanced: ["Check if a string is a palindrome using slicing.", "Build a substring extractor with start, end, and step parameters."]
        },
        miniProject: "String Manipulation Toolkit — a program with multiple string slicing operations.",
        companyTask: "Log Parser — extract timestamps and messages from log entries using string slicing.",
        interviewQuestions: ["How do you reverse a string in Python?", "Explain string slicing syntax.", "What does [::-1] do?"]
      }
    ]
  },
  { id: "m11", num: 11, title: "Lists", icon: "📋", difficulty: "Beginner", time: "90 min", xp: 60, coins: 15, color: "mint",
    description: "Master Python lists — the most versatile data structure for storing collections.",
    objectives: ["Create and manipulate lists", "Use list methods", "Slice and iterate lists"],
    prerequisites: ["Module 10: Strings"],
    realWorldUses: ["Data collections", "Shopping carts", "Task lists", "Data processing"],
    careerBenefits: "Lists are the most used data structure — mastering them is essential.",
    topics: [
      { id: "m11t1", title: "Creating & Manipulating Lists", time: "30 min", xp: 60,
        intro: "A list is an ordered, mutable collection of items. Lists can hold any data type, including mixed types.",
        explanation: "Lists are created with square brackets []. They're mutable (can be changed), ordered (maintain insertion order), and allow duplicates.",
        notes: {
          definition: "A list is an ordered, mutable collection that can hold items of any type.",
          whyWeUse: "To store and manipulate collections of related data.",
          syntax: "my_list = [1, 2, 3] | my_list = [] | my_list = list() | my_list = [1, 'hello', True]",
          rules: ["Mutable (changeable)", "Ordered (indexed)", "Allow duplicates", "Can hold mixed types", "Created with [] or list()"],
          importantPoints: ["Mutable", "Ordered", "Allow duplicates", "Mixed types allowed", "Zero-indexed"],
          realLifeExample: "A list is like a shopping list — ordered items you can add to, remove from, and modify.",
          codeExample: `fruits = ["apple", "banana", "cherry"]
print(fruits[0])        # apple
fruits.append("date")  # Add to end
fruits.insert(0, "apricot")  # Insert at index
fruits.remove("banana")  # Remove by value
print(fruits)  # ['apricot', 'apple', 'cherry', 'date']
print(len(fruits))  # 4`,
          outputExample: "apple\n['apricot', 'apple', 'cherry', 'date']\n4",
          memoryTrick: "List = Like Items Stored Together — ordered, mutable, duplicates OK.",
          interviewTips: "Know lists are mutable, ordered, allow duplicates. Know append, insert, remove, pop, extend methods.",
          commonMistakes: ["Confusing append and extend", "Not understanding mutability", "Modifying a list while iterating"],
          bestPractices: ["Use append for single items", "Use extend for merging lists", "Use list comprehensions", "Don't modify while iterating"],
          revisionSummary: "Lists: ordered, mutable, allow duplicates. Methods: append, insert, remove, pop, extend, sort, reverse.",
          cheatSheet: "[] or list() | append() | insert(i,x) | remove(x) | pop() | extend() | sort() | reverse() | len() | Mutable & ordered"
        },
        quiz: [
          { q: "Lists are ___?", options: ["mutable", "immutable", "static", "fixed-size"], answer: 0 },
          { q: "Which method adds to the end of a list?", options: ["append()", "insert()", "add()", "push()"], answer: 0 },
          { q: "Which method removes by value?", options: ["remove()", "delete()", "pop()", "discard()"], answer: 0 },
          { q: "Lists allow ___?", options: ["duplicates", "unique only", "one type", "no changes"], answer: 0 }
        ],
        exercises: {
          beginner: ["Create a list of 5 fruits and print each.", "Add an item to a list and remove one."],
          intermediate: ["Sort a list of numbers in descending order.", "Merge two lists using extend()."],
          advanced: ["Remove duplicates from a list while preserving order.", "Implement a stack using list methods."]
        },
        miniProject: "To-Do List Manager — add, complete, remove, and display tasks using a list.",
        companyTask: "Inventory Manager — track products with add, remove, update, and display functionality.",
        interviewQuestions: ["Are lists mutable?", "Difference between append and extend?", "How do you remove duplicates from a list?"]
      },
      { id: "m11t2", title: "List Slicing & Comprehensions", time: "30 min", xp: 60,
        intro: "Slice lists like strings, and use list comprehensions for concise list creation.",
        explanation: "List slicing works the same as string slicing. List comprehensions provide a concise way to create lists using a single line of code.",
        notes: {
          definition: "List slicing extracts portions. List comprehensions create lists from expressions in one line.",
          whyWeUse: "Slicing for extracting data, comprehensions for concise, readable list creation.",
          syntax: "lst[start:stop:step] | [expression for item in iterable if condition]",
          rules: ["Slicing same as strings", "Comprehension: [expr for item in iterable if cond]", "Can have nested loops", "Can have multiple conditions"],
          importantPoints: ["Slicing returns new list", "Comprehensions are faster than loops", "Can nest comprehensions", "if is optional"],
          realLifeExample: "Slicing = taking a portion of a tray. Comprehension = a recipe that produces a batch of items.",
          codeExample: `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(nums[0:5])      # [1, 2, 3, 4, 5]
print(nums[::2])      # [1, 3, 5, 7, 9]
print(nums[::-1])     # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# List comprehension
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

evens = [x for x in nums if x % 2 == 0]
print(evens)  # [2, 4, 6, 8, 10]`,
          outputExample: "[1, 2, 3, 4, 5]\n[1, 3, 5, 7, 9]\n[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]\n[0, 1, 4, 9, 16]\n[2, 4, 6, 8, 10]",
          memoryTrick: "Comprehension = [what for each if condition] — create lists in one line!",
          interviewTips: "Know list comprehension syntax, when to use them, and that they're faster than loops.",
          commonMistakes: ["Overcomplicating comprehensions", "Forgetting the if is optional", "Not using comprehensions when they'd be clearer"],
          bestPractices: ["Use comprehensions for simple transformations", "Use regular loops for complex logic", "Keep comprehensions readable"],
          revisionSummary: "Slicing: lst[start:stop:step]. Comprehension: [expr for item in iterable if cond].",
          cheatSheet: "lst[a:b] | lst[::2] | lst[::-1] | [x for x in iter] | [x for x in iter if cond] | [x**2 for x in range(n)]"
        },
        quiz: [
          { q: "What does [x**2 for x in range(3)] produce?", options: ["[0,1,4]", "[1,4,9]", "[0,1,2]", "[1,2,3]"], answer: 0 },
          { q: "List comprehensions are ___ than loops.", options: ["slower", "faster", "same speed", "unrelated"], answer: 1 },
          { q: "What does [1,2,3,4][1:3] return?", options: ["[1,2]", "[2,3]", "[2,3,4]", "[1,2,3]"], answer: 1 },
          { q: "The 'if' in a comprehension is ___?", options: ["required", "optional", "forbidden", "always last"], answer: 1 }
        ],
        exercises: {
          beginner: ["Slice the first 3 elements of a list.", "Create a list of squares using a comprehension."],
          intermediate: ["Filter even numbers from a list using a comprehension.", "Create a list of uppercase letters from a string."],
          advanced: ["Create a 2D matrix using nested comprehensions.", "Flatten a nested list using a comprehension."]
        },
        miniProject: "Data Processor — use comprehensions to filter, transform, and analyze a list of numbers.",
        companyTask: "Sales Analyzer — process a list of sales records using comprehensions to find totals and averages.",
        interviewQuestions: ["What is a list comprehension?", "How do you filter a list with a comprehension?", "Are comprehensions faster than loops?"]
      }
    ]
  },
  { id: "m15", num: 15, title: "If Else Statements", icon: "🔀", difficulty: "Beginner", time: "60 min", xp: 40, coins: 10, color: "mint",
    description: "Master conditional statements — the decision-making backbone of programming.",
    objectives: ["Use if, elif, else", "Understand comparison and logical operators", "Nest conditionals"],
    prerequisites: ["Module 11: Lists"],
    realWorldUses: ["User authentication", "Game logic", "Form validation", "Business rules"],
    careerBenefits: "Conditionals are fundamental logic — every program uses them to make decisions.",
    topics: [
      { id: "m15t1", title: "If, Elif, Else", time: "30 min", xp: 40,
        intro: "Conditional statements let your program make decisions. if checks a condition, elif adds more checks, else handles all other cases.",
        explanation: "if/elif/else statements evaluate conditions (True/False) and execute different code blocks. Python uses indentation to define blocks.",
        notes: {
          definition: "if/elif/else are conditional statements that execute code based on whether conditions are True or False.",
          whyWeUse: "To make decisions in code — different actions for different situations.",
          syntax: `if condition:
    code
elif condition:
    code
else:
    code`,
          rules: ["Indentation defines blocks", "if is required", "elif is optional (multiple allowed)", "else is optional (only one)", "Conditions must be boolean"],
          importantPoints: ["Indentation is critical", "Only one block executes", "elif = else if", "else catches all remaining cases", "Conditions use comparison operators"],
          realLifeExample: "If it's raining, take an umbrella. Else if it's sunny, wear sunglasses. Else, just go out.",
          codeExample: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Grade: {grade}")  # Grade: B`,
          outputExample: "Grade: B",
          memoryTrick: "if = 'is this true?' elif = 'else, if this?' else = 'otherwise'",
          interviewTips: "Know indentation matters, elif vs else if, and that only one block executes.",
          commonMistakes: ["Wrong indentation", "Using = instead of ==", "Forgetting colons", "Not handling all cases"],
          bestPractices: ["Use clear indentation", "Handle edge cases with else", "Avoid too many elif (use match-case or dict)", "Use comparison operators correctly"],
          revisionSummary: "if/elif/else for decisions. Indentation defines blocks. Only one block runs. Colons required.",
          cheatSheet: "if cond: | elif cond: | else: | Indentation = block | == for comparison | Only one block runs"
        },
        quiz: [
          { q: "Which defines a code block in Python?", options: ["Indentation", "Braces {}", "Brackets []", "Parentheses ()"], answer: 0 },
          { q: "How many else clauses can an if have?", options: ["0 or 1", "unlimited", "exactly 1", "0 only"], answer: 0 },
          { q: "What does elif stand for?", options: ["else if", "else loop", "elif loop", "end if"], answer: 0 },
          { q: "Which is a comparison operator?", options: ["==", "=", "+=", "//"], answer: 0 }
        ],
        exercises: {
          beginner: ["Check if a number is positive, negative, or zero.", "Check if a person can vote (age >= 18)."],
          intermediate: ["Create a grading system with A, B, C, D, F.", "Check if a year is a leap year."],
          advanced: ["Build a simple calculator using if/elif/else.", "Create a login system with username and password checks."]
        },
        miniProject: "Number Guessing Game — the computer picks a number, the user guesses, and gets hints using if/else.",
        companyTask: "Discount Calculator — apply different discount rates based on purchase amount using if/elif/else.",
        interviewQuestions: ["How do if/elif/else work?", "Why is indentation important?", "What's the difference between = and ==?"]
      }
    ]
  },
  { id: "m16", num: 16, title: "Loops", icon: "🔄", difficulty: "Beginner", time: "90 min", xp: 60, coins: 15, color: "mint",
    description: "Master for and while loops — the engines of repetition in programming.",
    objectives: ["Use for and while loops", "Use range(), break, continue", "Loop through lists and strings"],
    prerequisites: ["Module 15: If Else"],
    realWorldUses: ["Data processing", "Repetitive tasks", "Game loops", "Batch operations"],
    careerBenefits: "Loops are essential for processing collections and automating repetitive tasks.",
    topics: [
      { id: "m16t1", title: "For Loops", time: "30 min", xp: 60,
        intro: "A for loop iterates over a sequence (list, string, range, etc.) and executes a block for each item.",
        explanation: "for loops are used when you know how many times to iterate. They work with any iterable: lists, strings, dictionaries, ranges, files.",
        notes: {
          definition: "A for loop iterates over a sequence and executes a block for each item.",
          whyWeUse: "To repeat code for each item in a collection or a fixed number of times.",
          syntax: `for item in iterable:
    code

for i in range(5):
    print(i)`,
          rules: ["Works with any iterable", "range(n) gives 0 to n-1", "range(a,b) gives a to b-1", "range(a,b,step) with step", "break exits, continue skips"],
          importantPoints: ["Iterates over sequences", "range() generates numbers", "break exits loop", "continue skips to next", "Can use else with for"],
          realLifeExample: "A for loop is like going through each item on a shopping list one by one.",
          codeExample: `# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop with range
for i in range(5):
    print(i)  # 0 1 2 3 4

# break and continue
for i in range(10):
    if i == 5:
        break
    if i % 2 == 0:
        continue
    print(i)  # 1 3`,
          outputExample: "apple\nbanana\ncherry\n0\n1\n2\n3\n4\n1\n3",
          memoryTrick: "for = 'for each item, do this' — iterate through a collection.",
          interviewTips: "Know range(), break, continue, and that for works with any iterable.",
          commonMistakes: ["Confusing range(n) (0 to n-1) with range(1,n)", "Modifying list while iterating", "Not understanding break vs continue"],
          bestPractices: ["Use enumerate() for index+value", "Use range() for counting", "Avoid modifying while iterating", "Use break/continue wisely"],
          revisionSummary: "for loops iterate over sequences. range() for numbers. break exits, continue skips.",
          cheatSheet: "for x in iter: | for i in range(n): | range(a,b,step) | break (exit) | continue (skip) | enumerate() for index+value"
        },
        quiz: [
          { q: "What does range(5) produce?", options: ["0,1,2,3,4", "1,2,3,4,5", "0,1,2,3,4,5", "1,2,3,4"], answer: 0 },
          { q: "What does break do?", options: ["Exits the loop", "Skips iteration", "Restarts loop", "Pauses loop"], answer: 0 },
          { q: "What does continue do?", options: ["Skips to next iteration", "Exits loop", "Restarts", "Pauses"], answer: 0 },
          { q: "for loops work with ___?", options: ["any iterable", "only lists", "only ranges", "only strings"], answer: 0 }
        ],
        exercises: {
          beginner: ["Print numbers 1 to 10 using a for loop.", "Loop through a list and print each item."],
          intermediate: ["Print only even numbers from 1 to 20 using continue.", "Find the sum of all numbers in a list."],
          advanced: ["Build a multiplication table generator.", "Create a pattern printer (pyramid, diamond)."]
        },
        miniProject: "Pattern Printer — print various star patterns using nested for loops.",
        companyTask: "Report Generator — iterate through employee records and generate formatted reports.",
        interviewQuestions: ["How does range() work?", "Difference between break and continue?", "What is enumerate()?"]
      },
      { id: "m16t2", title: "While Loops", time: "30 min", xp: 60,
        intro: "A while loop repeats as long as a condition is True. Use it when you don't know how many iterations you need.",
        explanation: "while loops check a condition before each iteration. They're useful for indefinite iteration, user input, and game loops. Be careful of infinite loops!",
        notes: {
          definition: "A while loop repeats a block as long as a condition is True.",
          whyWeUse: "When the number of iterations is unknown — user input, game loops, waiting for conditions.",
          syntax: `while condition:
    code
    # Must update condition to avoid infinite loop`,
          rules: ["Check condition before each iteration", "Must update condition variable", "Risk of infinite loops", "break to exit", "Can use else"],
          importantPoints: ["Condition checked first", "Must modify condition", "Beware infinite loops", "break to exit early", "else runs if no break"],
          realLifeExample: "A while loop is like 'keep eating while you're hungry' — you don't know how many bites you'll need.",
          codeExample: `# Basic while loop
count = 0
while count < 5:
    print(count)
    count += 1
# 0 1 2 3 4

# User input loop
while True:
    user_input = input("Enter 'quit' to stop: ")
    if user_input == "quit":
        break
    print(f"You said: {user_input}")`,
          outputExample: "0\n1\n2\n3\n4",
          memoryTrick: "while = 'while this is true, keep doing this' — condition-controlled loop.",
          interviewTips: "Know when to use while vs for, how to avoid infinite loops, and the while-else construct.",
          commonMistakes: ["Forgetting to update condition (infinite loop)", "Not initializing the condition variable", "Using while when for is better"],
          bestPractices: ["Always update the condition", "Use break for early exit", "Prefer for when iteration count is known", "Avoid infinite loops"],
          revisionSummary: "while loops repeat while condition is True. Must update condition. Risk of infinite loops.",
          cheatSheet: "while cond: | Update condition! | break to exit | while-else | Use for known counts, while for unknown"
        },
        quiz: [
          { q: "When is the condition checked in a while loop?", options: ["Before each iteration", "After each iteration", "Only once", "Never"], answer: 0 },
          { q: "What causes an infinite loop?", options: ["Not updating condition", "Using break", "Using continue", "Using for"], answer: 0 },
          { q: "When should you use while over for?", options: ["Unknown iteration count", "Known count", "Never", "Always"], answer: 0 },
          { q: "What must you do inside a while loop?", options: ["Update the condition variable", "Use break", "Use continue", "Print something"], answer: 0 }
        ],
        exercises: {
          beginner: ["Print numbers 1 to 10 using a while loop.", "Count down from 10 to 1."],
          intermediate: ["Keep asking for input until the user types 'stop'.", "Find the sum of digits of a number."],
          advanced: ["Implement a number guessing game with limited attempts.", "Build a simple text-based menu system."]
        },
        miniProject: "Number Guessing Game — use a while loop to let the user guess until correct or out of attempts.",
        companyTask: "Data Entry System — keep accepting employee records until the user chooses to stop.",
        interviewQuestions: ["When do you use while vs for?", "How do you avoid infinite loops?", "What is while-else?"]
      }
    ]
  },
  { id: "m17", num: 17, title: "Functions", icon: "🔧", difficulty: "Intermediate", time: "90 min", xp: 60, coins: 15, color: "lavender",
    description: "Learn to write reusable functions — the building blocks of modular code.",
    objectives: ["Define and call functions", "Use parameters and return values", "Understand args and kwargs"],
    prerequisites: ["Module 16: Loops"],
    realWorldUses: ["Code organization", "API endpoints", "Utility functions", "Data processing pipelines"],
    careerBenefits: "Functions are the foundation of clean, maintainable, reusable code.",
    topics: [
      { id: "m17t1", title: "Defining & Calling Functions", time: "30 min", xp: 60,
        intro: "A function is a reusable block of code that performs a specific task. Define it with def, call it by name.",
        explanation: "Functions help organize code, avoid repetition (DRY principle), and make code modular. They can take parameters and return values.",
        notes: {
          definition: "A function is a reusable block of code that performs a specific task.",
          whyWeUse: "To avoid repetition (DRY), organize code, improve readability, and enable reuse.",
          syntax: `def function_name(parameters):
    """Docstring"""
    code
    return value`,
          rules: ["def keyword to define", "Indentation for body", "Parameters are optional", "return is optional", "Call with function_name(args)"],
          importantPoints: ["def to define", "Parameters for input", "return for output", "Docstrings for documentation", "Functions are first-class objects"],
          realLifeExample: "A function is like a recipe — define it once, use it many times with different ingredients (parameters).",
          codeExample: `def greet(name):
    """Greet a person by name."""
    return f"Hello, {name}!"

# Call the function
message = greet("Alice")
print(message)  # Hello, Alice!

# Function with default parameter
def power(base, exp=2):
    return base ** exp

print(power(3))      # 9 (default exp=2)
print(power(3, 3))   # 27`,
          outputExample: "Hello, Alice!\n9\n27",
          memoryTrick: "def = define, return = result. Function = recipe with ingredients (params) and output (return).",
          interviewTips: "Know def, parameters, return, default values, *args, **kwargs, and that functions are first-class objects.",
          commonMistakes: ["Forgetting to call the function", "Not returning a value", "Confusing parameters and arguments", "Missing colons"],
          bestPractices: ["Use descriptive names", "Write docstrings", "Keep functions small and focused", "Use default parameters wisely"],
          revisionSummary: "Functions: def name(params): return value. Reusable, modular, DRY. Can have defaults, *args, **kwargs.",
          cheatSheet: "def name(params): | return value | Default: param=value | *args (tuple) | **kwargs (dict) | Functions are first-class"
        },
        quiz: [
          { q: "Which keyword defines a function?", options: ["def", "function", "func", "define"], answer: 0 },
          { q: "What does return do?", options: ["Sends output back", "Prints value", "Stops program", "Loops"], answer: 0 },
          { q: "What are default parameters?", options: ["params with preset values", "required params", "no params", "return values"], answer: 0 },
          { q: "Functions in Python are ___?", options: ["first-class objects", "not reusable", "always void", "compiled"], answer: 0 }
        ],
        exercises: {
          beginner: ["Write a function that greets a user by name.", "Write a function that adds two numbers and returns the result."],
          intermediate: ["Write a function with default parameters.", "Write a function that returns multiple values."],
          advanced: ["Build a calculator with functions for each operation.", "Create a function that accepts *args and **kwargs."]
        },
        miniProject: "Calculator — build a calculator using separate functions for each operation (add, subtract, multiply, divide).",
        companyTask: "Salary Calculator — functions to calculate gross pay, tax, and net salary for employees.",
        interviewQuestions: ["How do you define a function?", "What are default parameters?", "What are *args and **kwargs?"]
      },
      { id: "m17t2", title: "Args, Kwargs & Lambda", time: "30 min", xp: 60,
        intro: "*args accepts variable positional arguments, **kwargs accepts variable keyword arguments, lambda creates anonymous functions.",
        explanation: "*args packs extra positional arguments into a tuple. **kwargs packs extra keyword arguments into a dict. Lambda creates small anonymous functions.",
        notes: {
          definition: "*args: variable positional args (tuple). **kwargs: variable keyword args (dict). lambda: anonymous function.",
          whyWeUse: "*args/**kwargs for flexible function signatures. lambda for short, throwaway functions.",
          syntax: "def func(*args, **kwargs): | lambda args: expression",
          rules: ["*args is a tuple", "**kwargs is a dict", "Order: params, *args, **kwargs", "lambda is single expression", "lambda has no name"],
          importantPoints: ["*args = positional (tuple)", "**kwargs = keyword (dict)", "lambda = anonymous one-liner", "Can combine all three", "Order matters"],
          realLifeExample: "*args = accepting any number of items at checkout. **kwargs = accepting any labeled options. lambda = a quick sticky note function.",
          codeExample: `# *args
def add_all(*args):
    return sum(args)
print(add_all(1, 2, 3, 4))  # 10

# **kwargs
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
print_info(name="Alice", age=25)

# Lambda
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with map
nums = [1, 2, 3]
doubled = list(map(lambda x: x * 2, nums))
print(doubled)  # [2, 4, 6]`,
          outputExample: "10\nname: Alice\nage: 25\n25\n[2, 4, 6]",
          memoryTrick: "*args = all positional (tuple), **kwargs = keyword args (dict), lambda = quick one-liner function.",
          interviewTips: "Know *args/**kwargs, parameter order, lambda syntax, and when to use lambda vs def.",
          commonMistakes: ["Wrong parameter order", "Using lambda for complex logic", "Confusing * and ** "],
          bestPractices: ["Use *args/**kwargs for flexibility", "Keep lambda simple", "Use def for complex functions", "Follow parameter order"],
          revisionSummary: "*args (tuple, positional), **kwargs (dict, keyword), lambda (anonymous one-liner). Order: params, *args, **kwargs.",
          cheatSheet: "*args (tuple) | **kwargs (dict) | lambda x: expr | Order: params, *args, **kwargs | lambda for simple, def for complex"
        },
        quiz: [
          { q: "*args collects arguments as a ___?", options: ["tuple", "list", "dict", "set"], answer: 0 },
          { q: "**kwargs collects arguments as a ___?", options: ["dict", "tuple", "list", "set"], answer: 0 },
          { q: "What does lambda create?", options: ["anonymous function", "class", "module", "loop"], answer: 0 },
          { q: "Correct parameter order?", options: ["params, *args, **kwargs", "*args, params, **kwargs", "**kwargs, *args, params", "any order"], answer: 0 }
        ],
        exercises: {
          beginner: ["Write a function using *args to sum all arguments.", "Write a lambda that doubles a number."],
          intermediate: ["Write a function using **kwargs to print key-value pairs.", "Use lambda with map() to square a list."],
          advanced: ["Build a flexible function with params, *args, and **kwargs.", "Use lambda with filter() and sorted()."]
        },
        miniProject: "Flexible Logger — a function that accepts any number of labeled log entries using **kwargs.",
        companyTask: "Report Generator — a function that accepts variable arguments to generate custom reports.",
        interviewQuestions: ["What are *args and **kwargs?", "What is lambda?", "What is the correct parameter order?"]
      }
    ]
  },
  { id: "m23", num: 23, title: "Object-Oriented Programming", icon: "🏛️", difficulty: "Advanced", time: "120 min", xp: 100, coins: 25, color: "lavender",
    description: "Master OOP — classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
    objectives: ["Create classes and objects", "Understand inheritance and polymorphism", "Use encapsulation and abstraction"],
    prerequisites: ["Module 17: Functions"],
    realWorldUses: ["Software architecture", "Game development", "API design", "Library/framework design"],
    careerBenefits: "OOP is the dominant programming paradigm — essential for any professional developer.",
    topics: [
      { id: "m23t1", title: "Classes & Objects", time: "40 min", xp: 100,
        intro: "A class is a blueprint for creating objects. An object is an instance of a class with attributes (data) and methods (behavior).",
        explanation: "OOP organizes code into classes that model real-world entities. A class defines attributes (variables) and methods (functions). Objects are instances created from classes.",
        notes: {
          definition: "A class is a blueprint. An object is an instance of a class with attributes and methods.",
          whyWeUse: "To model real-world entities, organize code, enable reuse, and manage complexity.",
          syntax: `class ClassName:
    def __init__(self, attrs):
        self.attrs = attrs
    def method(self):
        code`,
          rules: ["class keyword to define", "__init__ is the constructor", "self refers to the instance", "Attributes with self.attr", "Methods are functions in class"],
          importantPoints: ["Class = blueprint, Object = instance", "__init__ initializes objects", "self is first parameter of methods", "Attributes = data, Methods = behavior", "Class names use PascalCase"],
          realLifeExample: "A class is like a car blueprint. An object is a specific car built from that blueprint — each has its own color, speed, etc.",
          codeExample: `class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def sit(self):
        return f"{self.name} sits down."

# Create objects
dog1 = Dog("Buddy", "Golden Retriever")
dog2 = Dog("Max", "German Shepherd")

print(dog1.bark())  # Buddy says Woof!
print(dog2.bark())  # Max says Woof!
print(dog1.breed)   # Golden Retriever`,
          outputExample: "Buddy says Woof!\nMax says Woof!\nGolden Retriever",
          memoryTrick: "Class = Cookie Cutter, Object = Cookie. __init__ = 'initialize' the object. self = 'this specific object'.",
          interviewTips: "Know __init__, self, the difference between class and instance attributes, and that self is the first parameter.",
          commonMistakes: ["Forgetting self parameter", "Not using __init__ for initialization", "Confusing class and instance attributes", "Wrong indentation"],
          bestPractices: ["Use PascalCase for class names", "Always include self", "Use __init__ for setup", "Use docstrings", "Keep methods focused"],
          revisionSummary: "Class = blueprint, Object = instance. __init__ = constructor. self = current instance. Attributes = data, Methods = behavior.",
          cheatSheet: "class Name: | __init__(self, ...) | self.attr = value | def method(self): | PascalCase | object = ClassName(args)"
        },
        quiz: [
          { q: "What is __init__?", options: ["Constructor", "Destructor", "Method", "Attribute"], answer: 0 },
          { q: "What does self refer to?", options: ["The current instance", "The class", "The parent class", "A global variable"], answer: 0 },
          { q: "A class is a ___ and an object is an ___?", options: ["blueprint, instance", "instance, blueprint", "method, attribute", "attribute, method"], answer: 0 },
          { q: "Class names should use ___?", options: ["PascalCase", "snake_case", "UPPER_CASE", "kebab-case"], answer: 0 }
        ],
        exercises: {
          beginner: ["Create a Person class with name and age attributes.", "Create a Car class with a drive() method."],
          intermediate: ["Create a BankAccount class with deposit and withdraw methods.", "Create a Student class with grades and an average method."],
          advanced: ["Build a Library system with Book and Member classes.", "Create a Shape class hierarchy with area calculations."]
        },
        miniProject: "Phone Book — create a Contact class and a PhoneBook class to manage contacts.",
        companyTask: "Employee Management System — create Employee and Department classes with full CRUD operations.",
        interviewQuestions: ["What is a class vs an object?", "What is __init__?", "What is self?", "Difference between class and instance attributes?"]
      }
    ]
  },
  { id: "m39", num: 39, title: "NumPy", icon: "📊", difficulty: "Advanced", time: "120 min", xp: 100, coins: 25, color: "lavender",
    description: "Master NumPy — the fundamental package for scientific computing in Python.",
    objectives: ["Create and manipulate arrays", "Use array operations and broadcasting", "Apply mathematical functions"],
    prerequisites: ["Module 23: OOP"],
    realWorldUses: ["Data Science", "Machine Learning", "Scientific Computing", "Image Processing"],
    careerBenefits: "NumPy is the foundation of Python's data science ecosystem — essential for any data role.",
    topics: [
      { id: "m39t1", title: "NumPy Arrays", time: "40 min", xp: 100,
        intro: "NumPy arrays (ndarray) are the core data structure — fast, efficient, multi-dimensional arrays for numerical computing.",
        explanation: "NumPy arrays are more efficient than Python lists for numerical operations. They support vectorized operations, broadcasting, and multi-dimensional data.",
        notes: {
          definition: "A NumPy array (ndarray) is a fast, multi-dimensional array for numerical data.",
          whyWeUse: "Faster than lists, less memory, supports vectorized operations, essential for data science.",
          syntax: `import numpy as np
arr = np.array([1, 2, 3])
arr2d = np.array([[1, 2], [3, 4]])`,
          rules: ["Import as np (convention)", "Homogeneous data type", "Zero-indexed", "Supports multi-dimensional", "Vectorized operations"],
          importantPoints: ["Faster than lists", "Homogeneous (same type)", "Vectorized operations", "Memory efficient", "Supports broadcasting"],
          realLifeExample: "A NumPy array is like a spreadsheet — fast, organized, and perfect for numerical data.",
          codeExample: `import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
print(arr)            # [1 2 3 4 5]
print(arr.shape)     # (5,)
print(arr.dtype)     # int64

# 2D array
matrix = np.array([[1, 2], [3, 4]])
print(matrix.shape)  # (2, 2)

# Vectorized operations
print(arr * 2)       # [2 4 6 8 10]
print(arr + 10)      # [11 12 13 14 15]
print(np.sqrt(arr))  # [1. 1.41 1.73 2. 2.24]`,
          outputExample: "[1 2 3 4 5]\n(5,)\nint64\n(2, 2)\n[2 4 6 8 10]\n[11 12 13 14 15]\n[1. 1.41 1.73 2. 2.24]",
          memoryTrick: "NumPy = Numerical Python. ndarray = n-dimensional array. Import as np.",
          interviewTips: "Know why NumPy is faster (vectorization, C backend), homogeneous arrays, and broadcasting.",
          commonMistakes: ["Not importing as np", "Mixing data types", "Using list operations on arrays", "Not understanding shapes"],
          bestPractices: ["Import as np", "Use vectorized operations", "Understand shapes and axes", "Use appropriate dtypes"],
          revisionSummary: "NumPy arrays: fast, homogeneous, multi-dimensional. Vectorized operations. Import as np.",
          cheatSheet: "np.array([...]) | arr.shape | arr.dtype | arr * 2 (vectorized) | np.zeros() | np.ones() | np.arange() | np.linspace()"
        },
        quiz: [
          { q: "How do you conventionally import NumPy?", options: ["import numpy as np", "import numpy", "import np", "from numpy import *"], answer: 0 },
          { q: "NumPy arrays are ___?", options: ["homogeneous", "heterogeneous", "dynamic", "immutable"], answer: 0 },
          { q: "NumPy arrays are ___ than Python lists.", options: ["faster", "slower", "same speed", "unrelated"], answer: 0 },
          { q: "What does arr.shape return?", options: ["Dimensions", "Size", "Type", "Values"], answer: 0 }
        ],
        exercises: {
          beginner: ["Create a 1D array and a 2D array.", "Perform basic arithmetic on arrays."],
          intermediate: ["Use np.zeros, np.ones, and np.arange.", "Reshape an array."],
          advanced: ["Perform matrix multiplication.", "Use broadcasting to operate on different-shaped arrays."]
        },
        miniProject: "Data Analyzer — use NumPy to load, analyze, and compute statistics on numerical data.",
        companyTask: "Sales Data Processor — use NumPy to process and analyze monthly sales figures.",
        interviewQuestions: ["Why is NumPy faster than lists?", "What is a vectorized operation?", "What is broadcasting?"]
      }
    ]
  },
  { id: "m42", num: 42, title: "Flask", icon: "🌶️", difficulty: "Advanced", time: "120 min", xp: 100, coins: 25, color: "lavender",
    description: "Build web applications with Flask — Python's lightweight web framework.",
    objectives: ["Create Flask routes", "Handle requests and responses", "Use templates and forms"],
    prerequisites: ["Module 23: OOP"],
    realWorldUses: ["Web applications", "REST APIs", "Microservices", "Web backends"],
    careerBenefits: "Flask is widely used for web development — knowing it opens backend developer roles.",
    topics: [
      { id: "m42t1", title: "Flask Basics", time: "40 min", xp: 100,
        intro: "Flask is a lightweight WSGI web framework. Create routes, handle requests, and return responses.",
        explanation: "Flask is a micro-framework — simple, flexible, and easy to extend. You define routes that map URLs to Python functions.",
        notes: {
          definition: "Flask is a lightweight Python web framework for building web apps and APIs.",
          whyWeUse: "Simple, flexible, great for small to medium apps, easy to learn, large ecosystem.",
          syntax: `from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello!'

app.run()`,
          rules: ["Create Flask app instance", "Use @app.route() decorator", "Functions return responses", "app.run() starts server", "Default port 5000"],
          importantPoints: ["Micro-framework", "Route decorators", "Request/response handling", "Jinja2 templates", "Werkzeug WSGI"],
          realLifeExample: "Flask is like a restaurant — routes are the menu, functions are the kitchen, responses are the food.",
          codeExample: `from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to PyVerse!"

@app.route("/api/user/<name>")
def get_user(name):
    return jsonify({"name": name, "message": f"Hello, {name}!"})

@app.route("/api/echo", methods=["POST"])
def echo():
    data = request.get_json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)`,
          outputExample: "Server runs at http://127.0.0.1:5000\nGET / returns 'Welcome to PyVerse!'\nGET /api/user/Alice returns JSON",
          memoryTrick: "Flask = route + function + response. @app.route('/') maps URL to function.",
          interviewTips: "Know route decorators, request/response, jsonify, and that Flask is a micro-framework.",
          commonMistakes: ["Not running in debug mode during development", "Forgetting to return a response", "Not handling errors"],
          bestPractices: ["Use blueprints for large apps", "Use environment variables", "Handle errors properly", "Use Flask-RESTful for APIs"],
          revisionSummary: "Flask: @app.route() maps URLs to functions. Return responses. Run with app.run().",
          cheatSheet: "Flask(__name__) | @app.route('/') | return 'text' | jsonify() for JSON | request for input | app.run(debug=True)"
        },
        quiz: [
          { q: "Flask is a ___ framework?", options: ["micro", "full-stack", "ORM", "database"], answer: 0 },
          { q: "Which decorator maps URLs to functions?", options: ["@app.route()", "@route()", "@flask()", "@url()"], answer: 0 },
          { q: "What does jsonify() do?", options: ["Returns JSON response", "Parses JSON", "Creates database", "Renders template"], answer: 0 },
          { q: "What is the default Flask port?", options: ["5000", "8000", "3000", "8080"], answer: 0 }
        ],
        exercises: {
          beginner: ["Create a Flask app with a home route.", "Add a route that returns JSON."],
          intermediate: ["Create a route with a URL parameter.", "Handle POST requests."],
          advanced: ["Build a REST API with CRUD operations.", "Add error handling and status codes."]
        },
        miniProject: "Simple API — build a REST API for a to-do list with Flask.",
        companyTask: "Employee API — build a REST API for employee records with GET, POST, PUT, DELETE.",
        interviewQuestions: ["What is Flask?", "How do routes work?", "What is jsonify()?"]
      }
    ]
  },
  { id: "m43", num: 43, title: "FastAPI", icon: "⚡", difficulty: "Advanced", time: "120 min", xp: 100, coins: 25, color: "lavender",
    description: "Build high-performance APIs with FastAPI — modern, fast, and type-hinted.",
    objectives: ["Create FastAPI endpoints", "Use Pydantic models", "Handle async operations"],
    prerequisites: ["Module 42: Flask"],
    realWorldUses: ["High-performance APIs", "Microservices", "AI/ML model serving", "Real-time applications"],
    careerBenefits: "FastAPI is the modern standard for Python APIs — high demand in the job market.",
    topics: [
      { id: "m43t1", title: "FastAPI Basics", time: "40 min", xp: 100,
        intro: "FastAPI is a modern, fast web framework for building APIs with Python type hints. It's one of the fastest Python frameworks.",
        explanation: "FastAPI uses Python type hints for automatic validation, serialization, and documentation (Swagger/OpenAPI). It supports async/await for high performance.",
        notes: {
          definition: "FastAPI is a modern, high-performance web framework for building APIs with Python type hints.",
          whyWeUse: "Fast, automatic validation, auto docs (Swagger), async support, type-safe.",
          syntax: `from fastapi import FastAPI
app = FastAPI()

@app.get('/')
def read_root():
    return {'Hello': 'World'}`,
          rules: ["Create FastAPI instance", "Use @app.get/post/put/delete", "Type hints for validation", "Pydantic for data models", "Async with async/await"],
          importantPoints: ["Type hints = auto validation", "Auto Swagger docs at /docs", "Async support", "Pydantic models", "Very fast (Starlette + Pydantic)"],
          realLifeExample: "FastAPI is like a smart receptionist — it validates input, routes requests, and documents everything automatically.",
          codeExample: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    in_stock: bool = True

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

@app.post("/items/")
def create_item(item: Item):
    return item`,
          outputExample: "Server runs at http://127.0.0.1:8000\nAuto docs at /docs\nGET / returns JSON\nPOST /items/ validates and returns Item",
          memoryTrick: "FastAPI = Fast + Type hints + Auto docs. Type hints do the heavy lifting.",
          interviewTips: "Know type hints for validation, auto Swagger docs, async support, and Pydantic models.",
          commonMistakes: ["Not using type hints", "Forgetting Pydantic models", "Not using async when beneficial", "Not checking /docs"],
          bestPractices: ["Use type hints everywhere", "Use Pydantic for data models", "Use async for I/O operations", "Check /docs for API docs"],
          revisionSummary: "FastAPI: type hints = validation, auto Swagger docs, async support, Pydantic models.",
          cheatSheet: "FastAPI() | @app.get/post() | Type hints | Pydantic BaseModel | /docs (Swagger) | async/await"
        },
        quiz: [
          { q: "FastAPI uses ___ for automatic validation?", options: ["type hints", "decorators", "comments", "config files"], answer: 0 },
          { q: "Where are auto API docs available?", options: ["/docs", "/api", "/help", "/readme"], answer: 0 },
          { q: "What does FastAPI use for data models?", options: ["Pydantic", "Django", "SQLAlchemy", "Marshmallow"], answer: 0 },
          { q: "FastAPI supports ___ for high performance?", options: ["async/await", "threading only", "multiprocessing only", "sync only"], answer: 0 }
        ],
        exercises: {
          beginner: ["Create a FastAPI app with a root route.", "Add a route with a path parameter."],
          intermediate: ["Create a Pydantic model and a POST route.", "Add query parameters with type hints."],
          advanced: ["Build a full CRUD API with async database operations.", "Add authentication with OAuth2."]
        },
        miniProject: "Product API — build a CRUD API for products with Pydantic validation.",
        companyTask: "Order Management API — build a FastAPI service for order processing with validation.",
        interviewQuestions: ["What makes FastAPI fast?", "How does validation work in FastAPI?", "What is Pydantic?"]
      }
    ]
  }
];

// Helper: get all topics flattened
export const ALL_TOPICS = MODULES.flatMap(m =>
  m.topics.map(t => ({ ...t, moduleId: m.id, moduleTitle: m.title, moduleNum: m.num }))
);

export const getModule = (id) => MODULES.find(m => m.id === id);
export const getTopic = (id) => ALL_TOPICS.find(t => t.id === id);

// Typing game code snippets
export const TYPING_SNIPPETS = [
  `def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
  `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(10):
    print(fibonacci(i))`,
  `numbers = [1, 2, 3, 4, 5]
squared = [x ** 2 for x in numbers]
print(squared)`,
  `class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return f"{self.name} says Woof!"

dog = Dog("Buddy")
print(dog.bark())`,
  `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

primes = [x for x in range(20) if is_prime(x)]
print(primes)`,
  `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))`,
  `from functools import reduce
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(f"Product: {product}")`,
  `def reverse_string(s):
    return s[::-1]

text = "Python is awesome"
print(reverse_string(text))`,
];

// Debug challenges
export const DEBUG_CHALLENGES = [
  {
    id: "dc1",
    title: "Fix the Indentation Error",
    difficulty: "Beginner",
    category: "Debug",
    errorType: "IndentationError",
    description: "The following code has an indentation error. Fix it so it runs correctly.",
    buggyCode: `def check_age(age):
if age >= 18:
    return "Adult"
else:
    return "Minor"`,
    solution: `def check_age(age):
    if age >= 18:
        return "Adult"
    else:
        return "Minor"`,
    hint: "Python uses indentation to define code blocks. The if statement should be indented inside the function.",
    explanation: "The if and else statements need to be indented inside the function body. Python uses indentation (not braces) to define code blocks.",
    xpReward: 25
  },
  {
    id: "dc2",
    title: "Fix the Name Error",
    difficulty: "Easy",
    category: "Debug",
    errorType: "NameError",
    description: "This code has a NameError. Find and fix the typo.",
    buggyCode: `def calculate_area(radius):
    return 3.14 * radius * radius

area = calculate_area(radious)
print(area)`,
    solution: `def calculate_area(radius):
    return 3.14 * radius * radius

area = calculate_area(radius)
print(area)`,
    hint: "Check the spelling of the variable name passed to the function.",
    explanation: "The variable 'radious' is a typo — it should be 'radius'. NameError occurs when you use a variable that hasn't been defined.",
    xpReward: 25
  },
  {
    id: "dc3",
    title: "Fix the Type Error",
    difficulty: "Medium",
    category: "Debug",
    errorType: "TypeError",
    description: "This code tries to concatenate a string and a number. Fix the type error.",
    buggyCode: `age = 25
message = "I am " + age + " years old"
print(message)`,
    solution: `age = 25
message = "I am " + str(age) + " years old"
print(message)`,
    hint: "You can't concatenate a string and an integer directly. Convert the number to a string first.",
    explanation: "Python doesn't allow concatenating strings and integers with +. Use str() to convert the number to a string, or use an f-string.",
    xpReward: 40
  },
  {
    id: "dc4",
    title: "Fix the Zero Division Error",
    difficulty: "Medium",
    category: "Debug",
    errorType: "ZeroDivisionError",
    description: "This function crashes when dividing by zero. Add error handling.",
    buggyCode: `def divide(a, b):
    return a / b

result = divide(10, 0)
print(result)`,
    solution: `def divide(a, b):
    if b == 0:
        return "Error: Cannot divide by zero"
    return a / b

result = divide(10, 0)
print(result)`,
    hint: "Check if the denominator is zero before dividing.",
    explanation: "Always check for zero before dividing. You can use an if statement or a try/except block to handle ZeroDivisionError.",
    xpReward: 40
  },
  {
    id: "dc5",
    title: "Fix the Index Error",
    difficulty: "Hard",
    category: "Debug",
    errorType: "IndexError",
    description: "This code tries to access an index that doesn't exist. Fix the logic.",
    buggyCode: `def get_last_item(lst):
    return lst[len(lst)]

items = [1, 2, 3, 4, 5]
print(get_last_item(items))`,
    solution: `def get_last_item(lst):
    return lst[len(lst) - 1]

items = [1, 2, 3, 4, 5]
print(get_last_item(items))`,
    hint: "List indices start at 0, so the last index is len(list) - 1, not len(list).",
    explanation: "Python lists are zero-indexed. The last valid index is len(lst) - 1. Alternatively, use lst[-1] to get the last item.",
    xpReward: 50
  },
];

// Logic challenges
export const LOGIC_CHALLENGES = [
  {
    id: "lc1",
    title: "Sum of Two Numbers",
    difficulty: "Beginner",
    category: "Logic",
    topic: "Functions",
    description: "Write a function that takes two numbers and returns their sum.",
    problemStatement: "Create a function `add(a, b)` that returns the sum of a and b.",
    sampleInput: "add(3, 5)",
    sampleOutput: "8",
    constraints: "-10^9 <= a, b <= 10^9",
    hints: ["Use the + operator", "Return the result directly"],
    starterCode: `def add(a, b):
    # Your code here
    pass`,
    solution: `def add(a, b):
    return a + b`,
    xpReward: 10,
    coinReward: 5,
    estimatedTime: "2 min"
  },
  {
    id: "lc2",
    title: "Check Even or Odd",
    difficulty: "Easy",
    category: "Logic",
    topic: "Conditions",
    description: "Write a function that returns 'Even' or 'Odd' for a given number.",
    problemStatement: "Create a function `even_or_odd(n)` that returns 'Even' if n is even, 'Odd' if n is odd.",
    sampleInput: "even_or_odd(7)",
    sampleOutput: "Odd",
    constraints: "n is an integer",
    hints: ["Use the modulo operator %", "n % 2 == 0 means even"],
    starterCode: `def even_or_odd(n):
    # Your code here
    pass`,
    solution: `def even_or_odd(n):
    if n % 2 == 0:
        return "Even"
    return "Odd"`,
    xpReward: 15,
    coinReward: 8,
    estimatedTime: "3 min"
  },
  {
    id: "lc3",
    title: "Reverse a String",
    difficulty: "Easy",
    category: "Logic",
    topic: "Strings",
    description: "Write a function that reverses a given string.",
    problemStatement: "Create a function `reverse_string(s)` that returns the reversed string.",
    sampleInput: 'reverse_string("hello")',
    sampleOutput: '"olleh"',
    constraints: "1 <= len(s) <= 1000",
    hints: ["Use string slicing", "s[::-1] reverses a string"],
    starterCode: `def reverse_string(s):
    # Your code here
    pass`,
    solution: `def reverse_string(s):
    return s[::-1]`,
    xpReward: 20,
    coinReward: 10,
    estimatedTime: "3 min"
  },
  {
    id: "lc4",
    title: "FizzBuzz",
    difficulty: "Medium",
    category: "Logic",
    topic: "Loops",
    description: "Print FizzBuzz from 1 to n. Multiples of 3 -> Fizz, 5 -> Buzz, both -> FizzBuzz.",
    problemStatement: "Create a function `fizzbuzz(n)` that returns a list where: multiples of 3 are 'Fizz', multiples of 5 are 'Buzz', multiples of both are 'FizzBuzz', others are the number as a string.",
    sampleInput: "fizzbuzz(5)",
    sampleOutput: "['1', '2', 'Fizz', '4', 'Buzz']",
    constraints: "1 <= n <= 10^4",
    hints: ["Check both 3 and 5 first", "Use modulo operator", "Convert numbers to strings"],
    starterCode: `def fizzbuzz(n):
    result = []
    # Your code here
    return result`,
    solution: `def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result`,
    xpReward: 30,
    coinReward: 15,
    estimatedTime: "10 min"
  },
  {
    id: "lc5",
    title: "Find the Maximum",
    difficulty: "Medium",
    category: "Logic",
    topic: "Lists",
    description: "Find the maximum number in a list without using max().",
    problemStatement: "Create a function `find_max(lst)` that returns the maximum value in a list without using the built-in max() function.",
    sampleInput: "find_max([3, 1, 4, 1, 5, 9, 2, 6])",
    sampleOutput: "9",
    constraints: "List is non-empty, contains integers",
    hints: ["Initialize with the first element", "Loop through and compare", "Update when you find a larger value"],
    starterCode: `def find_max(lst):
    # Your code here
    pass`,
    solution: `def find_max(lst):
    max_val = lst[0]
    for num in lst:
        if num > max_val:
            max_val = num
    return max_val`,
    xpReward: 30,
    coinReward: 15,
    estimatedTime: "5 min"
  },
  {
    id: "lc6",
    title: "Palindrome Checker",
    difficulty: "Medium",
    category: "Logic",
    topic: "Strings",
    description: "Check if a string reads the same forwards and backwards.",
    problemStatement: "Create a function `is_palindrome(s)` that returns True if s is a palindrome, False otherwise. Ignore case and spaces.",
    sampleInput: 'is_palindrome("Race car")',
    sampleOutput: "True",
    constraints: "1 <= len(s) <= 1000",
    hints: ["Convert to lowercase", "Remove spaces", "Compare with reversed version"],
    starterCode: `def is_palindrome(s):
    # Your code here
    pass`,
    solution: `def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]`,
    xpReward: 35,
    coinReward: 18,
    estimatedTime: "5 min"
  },
  {
    id: "lc7",
    title: "Count Vowels",
    difficulty: "Easy",
    category: "Logic",
    topic: "Strings",
    description: "Count the number of vowels in a string.",
    problemStatement: "Create a function `count_vowels(s)` that returns the count of vowels (a, e, i, o, u) in the string. Case-insensitive.",
    sampleInput: 'count_vowels("Hello World")',
    sampleOutput: "3",
    constraints: "1 <= len(s) <= 1000",
    hints: ["Convert to lowercase", "Check each character", "Use a set of vowels"],
    starterCode: `def count_vowels(s):
    # Your code here
    pass`,
    solution: `def count_vowels(s):
    vowels = set("aeiou")
    return sum(1 for ch in s.lower() if ch in vowels)`,
    xpReward: 20,
    coinReward: 10,
    estimatedTime: "4 min"
  },
  {
    id: "lc8",
    title: "Fibonacci Sequence",
    difficulty: "Hard",
    category: "Logic",
    topic: "Recursion",
    description: "Generate the nth Fibonacci number.",
    problemStatement: "Create a function `fibonacci(n)` that returns the nth Fibonacci number. F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).",
    sampleInput: "fibonacci(7)",
    sampleOutput: "13",
    constraints: "0 <= n <= 30",
    hints: ["Base cases: F(0)=0, F(1)=1", "Recursive case: F(n) = F(n-1) + F(n-2)", "Or use iteration for efficiency"],
    starterCode: `def fibonacci(n):
    # Your code here
    pass`,
    solution: `def fibonacci(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b`,
    xpReward: 50,
    coinReward: 25,
    estimatedTime: "10 min"
  },
];

// Company challenges
export const COMPANY_CHALLENGES = [
  {
    id: "cc1",
    title: "Employee Salary Calculator",
    difficulty: "Company Level",
    category: "Company",
    topic: "Functions",
    description: "Calculate net salary after tax deductions based on tax brackets.",
    problemStatement: "Create a function `calculate_net_salary(gross)` that calculates net salary after tax. Tax brackets: 0-50k: 10%, 50k-100k: 20%, 100k+: 30%.",
    sampleInput: "calculate_net_salary(120000)",
    sampleOutput: "91000",
    constraints: "gross >= 0",
    hints: ["Calculate tax for each bracket separately", "First 50k at 10%, next 50k at 20%, rest at 30%"],
    starterCode: `def calculate_net_salary(gross):
    # Your code here
    pass`,
    solution: `def calculate_net_salary(gross):
    if gross <= 50000:
        tax = gross * 0.10
    elif gross <= 100000:
        tax = 50000 * 0.10 + (gross - 50000) * 0.20
    else:
        tax = 50000 * 0.10 + 50000 * 0.20 + (gross - 100000) * 0.30
    return gross - tax`,
    xpReward: 200,
    coinReward: 100,
    estimatedTime: "15 min"
  },
  {
    id: "cc2",
    title: "CSV Data Processor",
    difficulty: "Company Level",
    category: "Company",
    topic: "File Handling",
    description: "Process CSV data and generate a summary report.",
    problemStatement: "Create a function `process_sales_data(data)` that takes a list of (product, amount) tuples and returns a dict with total sales per product.",
    sampleInput: 'process_sales_data([("apple", 100), ("banana", 200), ("apple", 50)])',
    sampleOutput: '{"apple": 150, "banana": 200}',
    constraints: "data is a list of tuples",
    hints: ["Use a dictionary to accumulate totals", "Check if product exists in dict before adding"],
    starterCode: `def process_sales_data(data):
    # Your code here
    pass`,
    solution: `def process_sales_data(data):
    summary = {}
    for product, amount in data:
        if product in summary:
            summary[product] += amount
        else:
            summary[product] = amount
    return summary`,
    xpReward: 200,
    coinReward: 100,
    estimatedTime: "15 min"
  },
  {
    id: "cc3",
    title: "Inventory Management System",
    difficulty: "Company Level",
    category: "Company",
    topic: "Dictionary",
    description: "Build an inventory system with add, remove, and check stock operations.",
    problemStatement: "Create a class `Inventory` with methods: add_item(name, qty), remove_item(name, qty), check_stock(name). remove_item should not allow negative stock.",
    sampleInput: 'inv = Inventory(); inv.add_item("laptop", 10); inv.remove_item("laptop", 3); inv.check_stock("laptop")',
    sampleOutput: "7",
    constraints: "Quantities are positive integers",
    hints: ["Use a dict to store items", "Check stock before removing", "Prevent negative stock"],
    starterCode: `class Inventory:
    def __init__(self):
        # Your code here
        pass
    
    def add_item(self, name, qty):
        # Your code here
        pass
    
    def remove_item(self, name, qty):
        # Your code here
        pass
    
    def check_stock(self, name):
        # Your code here
        pass`,
    solution: `class Inventory:
    def __init__(self):
        self.stock = {}
    
    def add_item(self, name, qty):
        if name in self.stock:
            self.stock[name] += qty
        else:
            self.stock[name] = qty
    
    def remove_item(self, name, qty):
        if name not in self.stock or self.stock[name] < qty:
            return False
        self.stock[name] -= qty
        return True
    
    def check_stock(self, name):
        return self.stock.get(name, 0)`,
    xpReward: 200,
    coinReward: 100,
    estimatedTime: "20 min"
  },
];

// Projects
export const PROJECTS = [
  { id: "p1", title: "Calculator", difficulty: "Easy", category: "Mini", estimatedTime: "1 hour", difficultyLevel: 1,
    description: "Build a command-line calculator that performs basic arithmetic operations.",
    requiredSkills: ["Functions", "If/Else", "Loops"], technologies: ["Python"],
    learningObjectives: ["Master functions", "Handle user input", "Implement arithmetic operations"],
    problemStatement: "Create a calculator that can add, subtract, multiply, and divide two numbers.",
    requirements: ["Accept two numbers and an operator", "Handle division by zero", "Allow continuous calculations", "Exit option"],
    xpReward: 100, coinReward: 50, coverImage: "🧮" },
  { id: "p2", title: "BMI Calculator", difficulty: "Easy", category: "Mini", estimatedTime: "1 hour", difficultyLevel: 1,
    description: "Calculate Body Mass Index and provide health category feedback.",
    requiredSkills: ["Functions", "If/Else", "Input/Output"], technologies: ["Python"],
    learningObjectives: ["Mathematical calculations", "Conditional logic", "Health category classification"],
    problemStatement: "Calculate BMI from height and weight, then categorize as Underweight, Normal, Overweight, or Obese.",
    requirements: ["Accept height (m) and weight (kg)", "Calculate BMI = weight / height^2", "Classify into categories", "Display result"],
    xpReward: 100, coinReward: 50, coverImage: "⚖️" },
  { id: "p3", title: "Number Guessing Game", difficulty: "Easy", category: "Mini", estimatedTime: "2 hours", difficultyLevel: 1,
    description: "A game where the computer picks a number and the player guesses it with hints.",
    requiredSkills: ["Random", "Loops", "If/Else"], technologies: ["Python"],
    learningObjectives: ["Use random module", "Game loop logic", "User interaction"],
    problemStatement: "Generate a random number 1-100. Let the user guess with 'too high'/'too low' hints. Track attempts.",
    requirements: ["Random number generation", "Input validation", "Hint system", "Attempt counter", "Win/lose conditions"],
    xpReward: 100, coinReward: 50, coverImage: "🎯" },
  { id: "p4", title: "To-Do List App", difficulty: "Beginner", category: "Mini", estimatedTime: "2 hours", difficultyLevel: 2,
    description: "A task management app with add, complete, delete, and display features.",
    requiredSkills: ["Lists", "Functions", "Loops"], technologies: ["Python"],
    learningObjectives: ["List manipulation", "CRUD operations", "Menu-driven interface"],
    problemStatement: "Build a to-do list manager where users can add, view, complete, and delete tasks.",
    requirements: ["Add tasks", "Mark complete", "Delete tasks", "Display all tasks", "Save/load from file"],
    xpReward: 150, coinReward: 75, coverImage: "✅" },
  { id: "p5", title: "Password Generator", difficulty: "Beginner", category: "Mini", estimatedTime: "1 hour", difficultyLevel: 2,
    description: "Generate strong random passwords with customizable options.",
    requiredSkills: ["Random", "Strings", "Functions"], technologies: ["Python"],
    learningObjectives: ["String manipulation", "Random generation", "User customization"],
    problemStatement: "Create a password generator that produces strong passwords with configurable length and character types.",
    requirements: ["Customizable length", "Include uppercase, lowercase, digits, symbols", "Strength indicator", "Multiple passwords option"],
    xpReward: 150, coinReward: 75, coverImage: "🔐" },
  { id: "p6", title: "Weather App", difficulty: "Intermediate", category: "Mini", estimatedTime: "3 hours", difficultyLevel: 3,
    description: "Fetch and display weather data using a public API.",
    requiredSkills: ["API", "JSON", "Requests"], technologies: ["Python", "requests"],
    learningObjectives: ["API integration", "JSON parsing", "Error handling"],
    problemStatement: "Build a weather app that fetches current weather for a given city using a weather API.",
    requirements: ["Accept city name", "Fetch from weather API", "Parse JSON response", "Display temperature, conditions", "Handle errors"],
    xpReward: 200, coinReward: 100, coverImage: "🌤️" },
  { id: "p7", title: "Library Management System", difficulty: "Intermediate", category: "Intermediate", estimatedTime: "5 hours", difficultyLevel: 3,
    description: "A complete library system with books, members, and borrowing functionality.",
    requiredSkills: ["OOP", "Classes", "File Handling"], technologies: ["Python"],
    learningObjectives: ["Object-oriented design", "Class relationships", "Data persistence"],
    problemStatement: "Build a library system with Book and Member classes. Track borrowing, returns, and availability.",
    requirements: ["Add/remove books", "Register members", "Borrow/return books", "Track due dates", "Search functionality", "Save to file"],
    xpReward: 300, coinReward: 150, coverImage: "📚" },
  { id: "p8", title: "Student Management System", difficulty: "Intermediate", category: "Intermediate", estimatedTime: "5 hours", difficultyLevel: 3,
    description: "Manage student records, grades, and generate report cards.",
    requiredSkills: ["OOP", "Dictionary", "File Handling"], technologies: ["Python"],
    learningObjectives: ["Data management", "Report generation", "Grade calculation"],
    problemStatement: "Create a student management system with enrollment, grade tracking, and report card generation.",
    requirements: ["Add/update/remove students", "Record grades", "Calculate GPA", "Generate report cards", "Search students"],
    xpReward: 300, coinReward: 150, coverImage: "🎓" },
  { id: "p9", title: "Bank Management System", difficulty: "Advanced", category: "Intermediate", estimatedTime: "6 hours", difficultyLevel: 4,
    description: "A banking system with accounts, transactions, and security features.",
    requiredSkills: ["OOP", "Exception Handling", "File Handling"], technologies: ["Python"],
    learningObjectives: ["Financial calculations", "Transaction logging", "Security practices"],
    problemStatement: "Build a bank system with account creation, deposits, withdrawals, transfers, and transaction history.",
    requirements: ["Create accounts", "Deposit/withdraw", "Transfer between accounts", "Transaction history", "PIN security", "Balance inquiry"],
    xpReward: 400, coinReward: 200, coverImage: "🏦" },
  { id: "p10", title: "AI Chatbot", difficulty: "Advanced", category: "Advanced", estimatedTime: "8 hours", difficultyLevel: 4,
    description: "Build an AI-powered chatbot using NLP and rule-based responses.",
    requiredSkills: ["Strings", "NLP basics", "API"], technologies: ["Python", "nltk"],
    learningObjectives: ["Natural language processing", "Pattern matching", "Conversation flow"],
    problemStatement: "Create a chatbot that can answer questions, have conversations, and learn from interactions.",
    requirements: ["Natural language input", "Pattern matching", "Context awareness", "Response generation", "Conversation history"],
    xpReward: 500, coinReward: 250, coverImage: "🤖" },
  { id: "p11", title: "E-Commerce Backend API", difficulty: "Professional", category: "Company", estimatedTime: "10 hours", difficultyLevel: 5,
    description: "Build a REST API for an e-commerce platform with products, orders, and authentication.",
    requiredSkills: ["FastAPI", "OOP", "Database", "Auth"], technologies: ["Python", "FastAPI", "SQLite"],
    learningObjectives: ["API design", "Database modeling", "Authentication", "RESTful principles"],
    problemStatement: "Create a complete e-commerce backend with product catalog, shopping cart, orders, and user authentication.",
    requirements: ["Product CRUD", "User registration/login", "Shopping cart", "Order processing", "JWT authentication", "SQLite database"],
    xpReward: 600, coinReward: 300, coverImage: "🛒" },
  { id: "p12", title: "HR Management System", difficulty: "Enterprise", category: "Company", estimatedTime: "15 hours", difficultyLevel: 6,
    description: "Enterprise HR system with employee management, payroll, and leave tracking.",
    requiredSkills: ["OOP", "Database", "FastAPI", "File Handling"], technologies: ["Python", "FastAPI", "SQLite"],
    learningObjectives: ["Enterprise architecture", "Complex data models", "Business logic"],
    problemStatement: "Build a comprehensive HR system with employee records, payroll, leave management, and reporting.",
    requirements: ["Employee CRUD", "Payroll calculation", "Leave management", "Department management", "Performance reviews", "Report generation"],
    xpReward: 800, coinReward: 400, coverImage: "👥" },
];

// Leaderboard mock data
export const LEADERBOARD = [
  { rank: 1, name: "Priya Sharma", avatar: "👩‍💻", xp: 15420, level: 47, country: "🇮🇳", wpm: 78, accuracy: 98 },
  { rank: 2, name: "Alex Chen", avatar: "👨‍💻", xp: 14890, level: 45, country: "🇨🇳", wpm: 82, accuracy: 96 },
  { rank: 3, name: "Maria Garcia", avatar: "👩‍🎓", xp: 13200, level: 42, country: "🇪🇸", wpm: 71, accuracy: 97 },
  { rank: 4, name: "James Wilson", avatar: "🧑‍💻", xp: 12500, level: 40, country: "🇺🇸", wpm: 75, accuracy: 94 },
  { rank: 5, name: "Fatima Al-Zahra", avatar: "👩‍🔬", xp: 11800, level: 38, country: "🇦🇪", wpm: 68, accuracy: 99 },
  { rank: 6, name: "Raj Patel", avatar: "🧑‍🎓", xp: 10500, level: 35, country: "🇮🇳", wpm: 65, accuracy: 93 },
  { rank: 7, name: "Sophie Martin", avatar: "👩‍🏫", xp: 9800, level: 32, country: "🇫🇷", wpm: 70, accuracy: 95 },
  { rank: 8, name: "Yuki Tanaka", avatar: "🧑‍🔬", xp: 8900, level: 30, country: "🇯🇵", wpm: 85, accuracy: 97 },
  { rank: 9, name: "Olga Petrov", avatar: "👩‍💼", xp: 7600, level: 28, country: "🇷🇺", wpm: 63, accuracy: 92 },
  { rank: 10, name: "David Kim", avatar: "🧑‍💼", xp: 6500, level: 25, country: "🇰🇷", wpm: 72, accuracy: 90 },
];

// Testimonials
export const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Software Engineer at Google", avatar: "👩‍💻", rating: 5,
    review: "PyVerse Academy transformed my career. I went from knowing nothing about Python to landing a job at Google. The typing game and company projects gave me real-world skills." },
  { name: "Alex Chen", role: "Data Scientist at Netflix", avatar: "👨‍💻", rating: 5,
    review: "The handwritten notes are genius! I've never seen a learning platform make concepts so easy to remember. The AI mentor helped me through every tough topic." },
  { name: "Maria Garcia", role: "Backend Developer at Spotify", avatar: "👩‍🎓", rating: 5,
    review: "The company-level projects are exactly what employers look for. I built a portfolio that impressed every interviewer. The certificates are verified and professional." },
  { name: "James Wilson", role: "Python Developer at Amazon", avatar: "🧑‍💻", rating: 5,
    review: "The debug arena and logic builder sharpened my problem-solving skills immensely. The gamification kept me motivated every single day. Best learning platform ever!" },
  { name: "Fatima Al-Zahra", role: "ML Engineer at Tesla", avatar: "👩‍🔬", rating: 5,
    review: "From absolute beginner to ML Engineer — PyVerse made it possible. The roadmap is clear, the lessons are engaging, and the community is incredibly supportive." },
  { name: "Raj Patel", role: "Full Stack Developer at Microsoft", avatar: "🧑‍🎓", rating: 5,
    review: "The FastAPI and Flask modules are outstanding. I built real APIs and deployed them. The career hub helped me optimize my resume and LinkedIn. Got 3 job offers!" },
];

// FAQ data
export const FAQS = [
  { category: "Course", q: "Do I need any prior programming experience?", a: "No! PyVerse Academy is designed for absolute beginners. Our roadmap starts from 'What is Python?' and takes you all the way to job-ready professional level." },
  { category: "Course", q: "How long does it take to complete the course?", a: "It depends on your pace and daily study goal. On average, students complete the full curriculum in 3-6 months with 1-2 hours of daily practice." },
  { category: "Projects", q: "What kind of projects will I build?", a: "You'll build over 200 projects ranging from mini projects (calculator, to-do app) to company-level projects (HR management, e-commerce API) that you can showcase in your portfolio." },
  { category: "Certificates", q: "Are the certificates verified and recognized?", a: "Yes! Every certificate has a unique ID and QR code for verification. Our certificates are recognized by many companies and can be shared on LinkedIn." },
  { category: "Typing", q: "How does the typing game work?", a: "Our Python typing game uses real Python code snippets. You practice typing actual code, improving both your typing speed and Python syntax familiarity. Track WPM, accuracy, and earn XP." },
  { category: "Pricing", q: "Is PyVerse Academy free?", a: "We offer a free tier with access to core modules, typing game, and basic features. Premium unlocks advanced AI mentor, company projects, career hub, and premium themes." },
  { category: "Career", q: "Will this help me get a job?", a: "Absolutely! Our curriculum is designed to make you job-ready. You'll build a portfolio, get a verified resume, practice interview questions, and access our career hub with job listings." },
  { category: "Career", q: "What job roles can I apply for after completing the course?", a: "Python Developer, Backend Developer, Data Scientist, ML Engineer, Full Stack Developer, Automation Engineer, API Developer, and more — with salaries ranging from $50k to $150k+." },
];

// Level system
export const LEVELS = [
  { level: 1, title: "Python Beginner", minXP: 0 },
  { level: 5, title: "Python Explorer", minXP: 500 },
  { level: 10, title: "Python Coder", minXP: 1500 },
  { level: 20, title: "Python Developer", minXP: 5000 },
  { level: 30, title: "Python Engineer", minXP: 12000 },
  { level: 50, title: "Python Master", minXP: 30000 },
  { level: 75, title: "Python Expert", minXP: 60000 },
  { level: 100, title: "Python Legend", minXP: 100000 },
];

export const getLevelFromXP = (xp) => {
  let current = LEVELS[0];
  let next = null;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].minXP) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    }
  }
  return { current, next };
};

// XP rewards
export const XP_REWARDS = {
  lesson: 20, homework: 40, quiz: 30, typing: 25, miniProject: 100, companyProject: 300, dailyLogin: 10
};

// Coin rewards
export const COIN_REWARDS = {
  lesson: 5, homework: 10, typing: 8, project: 50, dailyReward: 20
};

// Contact info
export const CONTACT_INFO = {
  ownerName: "Vaibhav Sonwane",
  email: "vaibhavsonwane1222@gmail.com",
  phone: "+91 9730764956",
  whatsapp: "919730764956",
  location: "Maharashtra, India"
};

// Badges
export const BADGES = [
  { id: "first_lesson", name: "First Steps", icon: "🎯", description: "Complete your first lesson", color: "mint" },
  { id: "streak_7", name: "Week Warrior", icon: "🔥", description: "7-day learning streak", color: "amber" },
  { id: "streak_30", name: "Monthly Master", icon: "💎", description: "30-day learning streak", color: "lavender" },
  { id: "typing_50", name: "Speed Demon", icon: "⚡", description: "Reach 50 WPM in typing", color: "mint" },
  { id: "quiz_perfect", name: "Perfect Score", icon: "💯", description: "Get 100% on a quiz", color: "lavender" },
  { id: "first_project", name: "Builder", icon: "🏗️", description: "Complete your first project", color: "amber" },
  { id: "debug_master", name: "Bug Hunter", icon: "🐛", description: "Solve 10 debug challenges", color: "coral" },
  { id: "level_10", name: "Python Coder", icon: "🐍", description: "Reach level 10", color: "mint" },
  { id: "level_20", name: "Python Developer", icon: "🏆", description: "Reach level 20", color: "lavender" },
  { id: "first_cert", name: "Certified", icon: "📜", description: "Earn your first certificate", color: "amber" },
  { id: "logic_50", name: "Logic Master", icon: "🧠", description: "Solve 50 logic problems", color: "lavender" },
  { id: "company_task", name: "Company Ready", icon: "💼", description: "Complete a company task", color: "mint" },
];