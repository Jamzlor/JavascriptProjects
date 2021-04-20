const display = document.getElementById('displayText');
const keyNum = document.getElementsByClassName('keyNumButton');
const operators = document.getElementsByClassName('operatorButton');
const operatorsArr = Array.from(operators).map(item => item.innerHTML);
const plusMinus = document.getElementById('plusMinus');
const clear = document.getElementById('clearC');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equal');


var equation = [];
let input = '';

// keyNum input functions
Array.from(keyNum).forEach(button => button.addEventListener('click', function(){
    if(input.length === 0){
        display.innerHTML = '';
        display.innerHTML += button.innerHTML;
        input += button.innerHTML;
    } else if(display.innerHTML.length < 25){
        input += button.innerHTML;
        display.innerHTML += button.innerHTML;    
    }
    console.log(input);
}));

// operators input function
Array.from(operators).forEach(button => button.addEventListener('click', function(){
    if(input.length > 0){
        equation.push(input);
        equation.push(button.innerHTML);
        input = '';
    }
    console.log(equation);
}));

//decimal input function
decimal.addEventListener('click', function(){
    if(input.length === 0){
        input = '0.';
        display.innerHTML = '0.';
    } else if(!input.includes('.')) {
        input += '.';
        display.innerHTML += '.';
    }
    console.log(input)
});

// equal input function
equals.addEventListener('click', function(){
    equation.push(input);
    input = '';
    let result = eval(equation.join(''));
    display.innerHTML = result;
});