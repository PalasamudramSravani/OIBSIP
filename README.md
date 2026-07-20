# Task 1 - Calculator (OIBSIP Web Development Internship - Level 2)

##  Objective
Build a fully functional browser-based calculator capable of performing basic arithmetic operations with a user-friendly button interface.

##  Tech Stack
- HTML5
- CSS3 (Grid Layout)
- JavaScript (Vanilla)

##  Features
- Display screen showing current input and result
- Numeric buttons (0–9) and decimal point
- Operator buttons: addition, subtraction, multiplication, division
- Equals (=) button to evaluate expressions
- Clear (C) button to reset the display
- Backspace button to remove the last entered character
- Division-by-zero handled gracefully with an error message (no crash)
- Operator chaining supported (e.g., 5 + 3 × 2 without resetting)
- Responsive CSS Grid layout for buttons
- All interactions handled via `addEventListener` (no inline `onclick`)

##  Project Structure
Sravani_Task1/
├── index.html
├── style.css
├── app.js
└── README.md

##  How It Works
1. User inputs numbers and operators via on-screen buttons.
2. Input is displayed live in the display screen.
3. On pressing "=", the expression is split into numbers and operators using a regular expression, then evaluated step-by-step (left to right) without using `eval()`.
4. If a division by zero is attempted, the calculator catches the error and displays "Error: Div by 0" instead of crashing.

##  How to Run
1. Clone this repository:

git clone https://github.com/PalasamudramSravani/OIBSIP.git

2. Navigate to the `Sravani_Task1` folder.
3. Open `index.html` in any web browser.

##  What I Learned
- DOM manipulation and event handling in vanilla JavaScript
- Writing custom expression parsing logic using regular expressions instead of `eval()`
- Implementing CSS Grid for responsive UI layouts
- Handling edge cases like division by zero gracefully

##  Internship
This project is part of **Task 1, Level 2** of the **OIBSIP Web Development Internship**.

##  Author
**Sravani**  
[LinkedIn](https://www.linkedin.com/in/sravanipalasamudram) | [GitHub](https://github.com/PalasamudramSravani)

To add this:
1.Create a new file inside Sravani_Task1 named README.md
2.Paste this content
3.Add your live demo link and a screenshot once you deploy it
4.Commit and push
