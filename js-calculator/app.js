const display = document.getElementById('displayText');
const keyNum = document.getElementsByClassName('keyNumButton');
const operators = document.getElementsByClassName('operatorButton');
const operatorsArr = Array.from(operators).map(item => item.innerHTML);
const plusMinus = document.getElementById('plusMinus');
const clear = document.getElementById('clearC');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equal');


var equation = [];
var input = '';
var evaluated = false;

// keyNum input functions
Array.from(keyNum).forEach(button => button.addEventListener('click', function(){
    if(evaluated){
        input = '';
        equation = [];
        display.innerHTML = '';
        console.log(input)
        console.clear();
        if(input.length === 0){
            display.innerHTML = '';
            display.innerHTML += button.innerHTML;
            input += button.innerHTML;
        } else if(display.innerHTML.length < 25){
            input += button.innerHTML;
            display.innerHTML += button.innerHTML;    
        }
        evaluated = false;
    } else {
        if(input.length === 0){
            display.innerHTML = '';
            display.innerHTML += button.innerHTML;
            input += button.innerHTML;
        } else if(display.innerHTML.length < 25){
            input += button.innerHTML;
            display.innerHTML += button.innerHTML;    
        }
    }
    
    //debugging
    console.log(input);
    console.log(equation)
}));

// operators input function
Array.from(operators).forEach(button => button.addEventListener('click', function(){
    if(input.length > 0){
        equation.push(input);
        input = '';
        equation.push(button.innerHTML);
    }

    //debugging
    console.log(input);
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

    //debugging
    console.log(input)
});

//plusminus input function
plusMinus.addEventListener('click', function(){
    if(input[0] === '-'){
        input = input.slice(1, input.length);
        display.innerHTML = input;
    } else {
        input = '-' + input;
        display.innerHTML = input;
    }
});

// equal input function
equals.addEventListener('click', function(){
    equation.push(input);
    input = '';
    let result = eval(equation.join(''));
    display.innerHTML = (result === undefined) ? 0 : result;
    evaluated = true;

    //debugging
    console.log(result)
    console.log(input)
    console.log(equation)
});

// clear input function
clear.addEventListener('click', function(){
    input = '';
    equation = [];
    display.innerHTML = '';
    evaluated = false;

    //debugging
    console.log(input)
    console.clear();
    
})
