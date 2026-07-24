const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');

let currentInput = '';// so this will be a variable for tracking what we type 
 
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.getAttribute('data-value');//we append what ever that is present in data-value attribute to the currentInput
    display.value = currentInput;//this helps and then updates what ever is shown in the screen
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (currentInput === '' && value !== '-') return;//as negative numbers start with - sign we should allow only that operator
    const lastChar = currentInput.slice(-1);//this slice gives us the last character of string we can check what is most recently typed
    if (['+', '-', '*', '/'].includes(lastChar)) {
      currentInput = currentInput.slice(0, -1) + value;//if we reenter the operator 2 times then we will remove last char and adds new one
    } else {
      currentInput += value;
    }
    display.value = currentInput;
  });
});

equalsButton.addEventListener('click', () => {
  try {
    const result = evaluateExpression(currentInput);//currentInput below which actually calculates the result
    display.value = result;
    currentInput = result.toString();//if the result is succeeds then store it back into the currentInput
  } catch (error) {
    display.value = 'Error: Div by 0';//as function throws an error we write this in catch 
    currentInput = '';
  }
});

clearButton.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});//this will helps us wipe everything back to the blank

backspaceButton.addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
});//as the whole point of the backspace is to remove something

function evaluateExpression(expression) {
  const tokens = expression.match(/(\d+\.?\d*|[+\-*/])/g); //used to split the typed string into separate numbers and operators so code can calculate them one step at a time instead of eval()
  if (!tokens || tokens.length === 0) return '';//if we typed nothing or something weird this return us with empty string

  let result = parseFloat(tokens[0]);//so basically the each index of the tokens we will parse them and convert them from string into the numbers
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = parseFloat(tokens[i + 1]);

    if (operator === '/' && nextNumber === 0) {
      throw new Error('Division by zero');
    }

    switch (operator) {
      case '+': result += nextNumber; break;
      case '-': result -= nextNumber; break;
      case '*': result *= nextNumber; break;
      case '/': result /= nextNumber; break;
    }
  }
  return result;
}