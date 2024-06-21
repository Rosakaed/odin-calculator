

let dark = false;


let checkBox = document.getElementById("dark-light");
let body = document.getElementById("calculator-body");
let screen = document.getElementById("screen");
let buttons = document.getElementsByClassName("button");
let buttonsArr = Array.from(buttons);
let lightColor = "#e0e5eb";
let darkColor = "#131419";
let darkBorderColor = "#2f3034";
let lightBorderColor = "#dededd";

let checkBoxLightShadow = `-6px -6px 14px rgba(255,255,255,.65),
    6px 6px 10px rgba(70,70,70,0.12),
    inset -6px -6px 14px rgba(255,255,255,.65),
    inset 6px 6px 10px rgba(70,70,70,0.12)`;

let checkBoxDarkShadow = `0px 0px 10px rgba(255,255,255,.15),
    0px 0px 10px rgba(70,70,70,0.12),
     0px 0px 10px rgba(255,255,255,.15),
     0px 0px 10px rgba(70,70,70,0.12)`;


let buttonLightShadow = `-6px -6px 14px rgba(255, 255, 255, .65),
        6px 6px 10px rgba(70, 70, 70, 0.12),
        -6px -6px 8px rgba(255, 255, 255, .65),
        6px 6px 10px rgba(70, 70, 70, 0.12)`;

let buttonDarkShadow = `0px 0px 10px rgba(255,255,255,.15),
    0px 0px 10px rgba(70,70,70,0.12),
     0px 0px 10px rgba(255,255,255,.15),
     0px 0px 10px rgba(70,70,70,0.12)`;


let screenLightShadow = `-6px -6px 14px rgba(255, 255, 255, .65),
        6px 6px 10px rgba(70, 70, 70, 0.12),
        inset -6px -6px 14px rgba(255, 255, 255, .65),
        inset 6px 6px 10px rgba(70, 70, 70, 0.12)`;

let screenDarkShadow = `0px 0px 10px rgba(255,255,255,.15),
    0px 0px 10px rgba(70,70,70,0.12),
     0px 0px 10px rgba(255,255,255,.15),
     0px 0px 10px rgba(70,70,70,0.12)`;


function changeTheme() {
    if (dark) {
        dark = false;
        body.style.backgroundColor = lightColor;

        screen.style.backgroundColor = lightColor;
        screen.style.color = "#757a8b";
        screen.style.borderColor = lightBorderColor;
        screen.style.boxShadow = screenLightShadow;

        buttonsArr.forEach((cell, index) => {
            cell.style.backgroundColor = lightColor
            cell.style.color = "#000000"
            cell.style.borderColor = lightBorderColor;

            cell.style.boxShadow = buttonLightShadow;
        })

        checkBox.style.borderColor = lightBorderColor;
        checkBox.style.boxShadow = checkBoxLightShadow;


    }
    else {

        dark = true;
        body.style.backgroundColor = darkColor;

        screen.style.backgroundColor = darkColor;
        screen.style.color = "#01aaf3";
        screen.style.borderColor = darkBorderColor
        screen.style.boxShadow = screenDarkShadow;

        buttonsArr.forEach((cell, index) => {
            cell.style.backgroundColor = darkColor
            cell.style.color = "#FFFFFF"
            cell.style.borderColor = darkBorderColor;
            cell.style.boxShadow = buttonDarkShadow;
        })

        checkBox.style.borderColor = darkBorderColor;
        checkBox.style.boxShadow = checkBoxDarkShadow;
    }
}


checkBox.addEventListener("change", changeTheme);


let screenText = "";

const btnClear = document.getElementById('btn-clear');
const btnCe = document.getElementById('btn-ce');
const btnPercent = document.getElementById('btn-percent');
const btnDivide = document.getElementById('btn-divide');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btnMultiply = document.getElementById('btn-multiply');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btnSubtract = document.getElementById('btn-subtract');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btnAdd = document.getElementById('btn-add');
const btn0 = document.getElementById('btn-0');
const btnDecimal = document.getElementById('btn-decimal');
const btnEquals = document.getElementById('btn-equals');



let firstNumber = "";
let secondNumber = "";
let operator = false;
let operatorVal = "";
let error = false;
function updateDisplay() {
    console.log(firstNumber);
    console.log(operatorVal);
    console.log(secondNumber);
    
    screen.innerText = screenText;
}


// Attach event listeners to the buttons
btnClear.addEventListener('click', () => {
    screenText = "";
    firstNumber = "";
    secondNumber = "";
    operator = false;
    operatorVal = "";
    updateDisplay();  // Clear the display
});

btnCe.addEventListener('click', () => {
    if (operator) {
        if (secondNumber === "") {
            operatorVal = "";
            operator = false;
        }
        else {
            secondNumber = secondNumber.slice(0, -1);
        }
    }
    else {
        firstNumber = firstNumber.slice(0, -1);
    }
    screenText = screenText.slice(0, -1);
    updateDisplay();  // Update the display
});

btnPercent.addEventListener('click', () => {
    if (operator) {
        screenText = calculate(firstNumber, secondNumber, operatorVal);
        firstNumber = screenText;
        operatorVal = "%";
        secondNumber = "";
    }
    else {
        operator = true;
        operatorVal = "%";
    }
    screenText += '%';
    updateDisplay();
});

btnDivide.addEventListener('click', () => {
    if (operator) {
        screenText = calculate(firstNumber, secondNumber, operatorVal);
        firstNumber = screenText;
        operatorVal = "/";

        secondNumber = "";
    }
    else {
        operator = true; operatorVal = "/";
    }
    screenText += '/';
    updateDisplay();
});

btn7.addEventListener('click', () => {
    if (operator) {
        secondNumber += `7`;
    }
    else {
        firstNumber += `7`;
    }
    screenText += '7';
    updateDisplay();
});

btn8.addEventListener('click', () => {
    if (operator) {
        secondNumber += `8`;
    }
    else {
        firstNumber += `8`;
    }
    screenText += '8';
    updateDisplay();
});

btn9.addEventListener('click', () => {
    if (operator) {
        secondNumber += `9`;
    }
    else {
        firstNumber += `9`;
    }
    screenText += '9';
    updateDisplay();
});

btnMultiply.addEventListener('click', () => {
    if (operator) {
        screenText = calculate(firstNumber, secondNumber, operatorVal);
        firstNumber = screenText;
        operatorVal = "*";

        secondNumber = "";
    }
    else {
        operator = true; operatorVal = "*";
    }
    screenText += '*';
    updateDisplay();
});

btn4.addEventListener('click', () => {
    if (operator) {
        secondNumber += `4`;
    }
    else {
        firstNumber += `4`;
    }
    screenText += '4';
    updateDisplay();
});

btn5.addEventListener('click', () => {
    if (operator) {
        secondNumber += `5`;
    }
    else {
        firstNumber += `5`;
    }
    screenText += '5';
    updateDisplay();
});

btn6.addEventListener('click', () => {
    if (operator) {
        secondNumber += `6`;
    }
    else {
        firstNumber += `6`;
    }
    screenText += '6';
    updateDisplay();
});

btnSubtract.addEventListener('click', () => {
    if (operator) {
        screenText = calculate(firstNumber, secondNumber, operatorVal);
        firstNumber = screenText;
        operatorVal = "-";

        secondNumber = "";
    }
    else {
        operator = true; operatorVal = "-";
    }
    screenText += '-';
    updateDisplay();
});

btn1.addEventListener('click', () => {
    if (operator) {
        secondNumber += `1`;
    }
    else {
        firstNumber += `1`;
    }
    screenText += '1';
    updateDisplay();
});

btn2.addEventListener('click', () => {
    if (operator) {
        secondNumber += `2`;
    }
    else {
        firstNumber += `2`;
    }
    screenText += '2';
    updateDisplay();
});

btn3.addEventListener('click', () => {
    if (operator) {
        secondNumber += `3`;
    }
    else {
        firstNumber += `3`;
    }
    screenText += '3';
    updateDisplay();
});

btnAdd.addEventListener('click', () => {
    if (operator) {
        screenText = calculate(firstNumber, secondNumber, operatorVal);
        firstNumber = screenText;
        operatorVal = "+";

        secondNumber = "";
    }
    else {
        operator = true; operatorVal = "+";
    }

    screenText += '+';
    updateDisplay();
});

btn0.addEventListener('click', () => {
    if (operator) {
        secondNumber += `0`;
    }
    else {
        firstNumber += `0`;
    }
    screenText += '0';
    updateDisplay();
});

btnDecimal.addEventListener('click', () => {
    if (operator) {
        secondNumber += `.`;
    }
    else {
        firstNumber += `.`;
    }
    screenText += '.';
    updateDisplay();
});

btnEquals.addEventListener('click', () => {
    if (firstNumber != "" && secondNumber != "" && operatorVal != "") {
        firstNumber = calculate(firstNumber, secondNumber, operatorVal);
        operatorVal = "";
        secondNumber = "";
        operator = false;
        screenText = firstNumber;
    }
    updateDisplay();  // Update the display
});




function calculate(num1, num2, operator) {
    let result;

    // Convert the string inputs to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Perform the operation based on the operator
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = 'Error';
                error = true;
            }
            break;
        case '%':
            result = number1 % number2;
            break;
        default:
            break;
    }

    return result.toString();
}

