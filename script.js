
let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (displayValue === '0' && number !== '.') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function chooseOperator(operator) {
    if (currentOperator !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    currentOperator = operator;
    displayValue = '';
}

function calculate() {
    if (currentOperator === null) return;

    secondOperand = parseFloat(displayValue);
    let result;

    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    currentOperator = null;
    firstOperand = result;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayValue;
}
