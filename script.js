let firstNumber = null;
let secondNumber = null;
let operator = null;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

const multiply = (num1, num2) => num1 * num2;

function divide (num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

// function operate(operator, num1, num2) {

// }