let body = document.body;
let display = document.getElementById('#colorHex');
let maxHexValue = parseInt("ffffff" ,16); //max value of hex code in integer

function randomColor(){
    randomNum = () => Math.floor(Math.random() * maxHexValue);
    return '#' + randomNum().toString(16);
}

let backColor = randomColor(); //initial background-color
body.style.backgroundColor = backColor;

function changeColor(){
    body.style.backgroundColor = randomColor();
}
