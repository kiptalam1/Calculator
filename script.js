let firstNumber = '';
let secondNumber = '';
let operator = null;
const numberButtons = document.querySelectorAll('.number');
const operation = document.querySelector('.operation');
const result = document.querySelector('.result');
const clearBtn = document.querySelector('.clear');
const number = document.querySelector('.number');
const operatorButtons = document.querySelectorAll('.operator');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
// const operatorValue = document.querySelector('.operator');
// Variable to hold the current display value
let displayValue = "0";  




function updateOperationDisplay() {
    operation.textContent = displayValue;
}

function updateResultDisplay (){
    result.textContent = displayValue;
}

// Operator buttons logic
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === '') {
            firstNumber = displayValue; 
        } else if (operator) {
            calculate();  // Calculate if an operator is already selected
            firstNumber = displayValue;
        }
        operator = button.textContent; 
        operation.textContent = `${firstNumber} ${operator}`;
        displayValue = '0';  // Reset for next number input
    });
});

// Number buttons logic
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '.' && displayValue.includes('.')) return;
        if (displayValue === "0" || displayValue === "") {
            displayValue = button.textContent; // Replace '0' with the clicked number
        } else {
            displayValue += button.textContent; // Append the clicked number
        }
        updateOperationDisplay(); // Update the display with the current value
    });
});


    
function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateOperationDisplay();
}

deleteBtn.addEventListener('click', () => deleteLastCharacter());

function clearDisplay() {
    displayValue = '0';
    firstNumber = '';
    secondNumber = '';
    operation.textContent = '';
    result.textContent = displayValue;
    operator = null;
}

clearBtn.addEventListener('click', () => clearDisplay());

function calculate() {
    if (firstNumber === '' || operator === null) return;
    secondNumber = displayValue;
    const resultValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    
    if (resultValue === "Error") {
        displayValue = resultValue;
    } else {
        displayValue = resultValue.toString();
    }
    
    result.textContent = displayValue;
    operation.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    firstNumber = displayValue;  // To allow chaining of operations
    operator = null;
}


equalsBtn.addEventListener('click', calculate);

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
        return "Error";
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
            return "Error";
    }
}

