const display = document.getElementById('displayText');
const keyNum = document.getElementsByClassName('keyNumButton');
const operators = document.getElementsByClassName('operatorButton');
const clear = document.getElementById('clearC');
const resultDisplay = document.getElementById('result');

Array.from(keyNum).forEach(button => button.addEventListener('click', function () {
    if (display.innerHTML.length <= 27) {
        let clickedNum = button.innerHTML;
        display.innerHTML += clickedNum;
    }

}));
let result = [];

Array.from(operators).forEach(button => button.addEventListener('click', function () {
    if (button.innerHTML != '=') {
        let num = parseInt(display.innerHTML, 10);
        let operator = button.innerHTML;
        result.push(num);
        result.push(operator);
        display.innerHTML = '';
    } else {
        // evaluate the inputs
    }
}));

// clear button to clear all calculations and display area
clear.addEventListener('click', function () {
    display.innerHTML = "";
    resultDisplay.innerHTML = '_';
    result = [];
});