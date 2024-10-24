let firstNumber = null;
let secondNumber = null;
let operator = null;



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) { 
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b); /*break is not needed since the functions have return.*/
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Error: Invalid operator!";
    }
}

// operate("+", 4, 7);

// Variable to hold the current display value
let displayValue = 0;   
// get display element
const display = document.getElementById('display');


function updateDisplay() {
    display.textContent = displayValue;
}

// event listeners for all buttons
const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.getAttribute('data-value');

        if (!buttonValue) return;

        if (displayValue === '0') {
            displayValue = buttonValue;
        }else {
            displayValue += buttonValue;
        }
        updateDisplay();
    })
});

updateDisplay();