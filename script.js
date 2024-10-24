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

// function operate(operator, num1, num2) {

// }