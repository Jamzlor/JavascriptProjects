let numDisplay = document.getElementById('numDisplay')
let count = 0;

numDisplay.innerHTML = count;

let increaseButton = document.getElementById('increaseCount');
let decreaseButton = document.getElementById('decreaseCount');

function plusOne (){
    count += 1;
    numDisplay.innerHTML = count;
};

function minusOne (){
    count -= 1;
    numDisplay.innerHTML = count;
};

increaseButton.addEventListener('click', plusOne);
decreaseButton.addEventListener('click', minusOne);