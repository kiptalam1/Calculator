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

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === '') {
            firstNumber = displayValue;
        } else if(operator) {
            calculate();
        }
        operator = button.textContent;
        displayValue = '0'
        updateOperationDisplay();
    })
});


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue === "0") {
            displayValue = button.textContent; 
        } else {
            displayValue += button.textContent;
        }
        updateOperationDisplay();
    })
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
    operation.textContent = displayValue;
    result.textContent = '';
    return displayValue;
}

clearBtn.addEventListener('click', () => clearDisplay());

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
            return "Error";
    }
}

