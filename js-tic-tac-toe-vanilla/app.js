
//mise en place
const o = 'o';
const x = 'x';

var currentPlayer = o;
var checkedBoxes = [];

var os;
var xs;
var won = false;

const currentPlayerTurn = document.getElementById('currentPlayer');
const plays = document.getElementsByClassName('playSquare');
const reset = document.getElementById('reset');
const winMessageContainer = document.getElementById('winMessageContainer');
const winMessage = document.getElementById('winMessage');

currentPlayerTurn.innerHTML = currentPlayer;
// function to append x or o;
Array.from(plays).forEach(square => square.addEventListener('click', function () {
    if (currentPlayer === o) {
        square.innerHTML = o;
        square.style.background = 'var(--o)';
        onCheckBox(square);
    } else {
        square.innerHTML = x;
        square.style.background = 'var(--x)';
        onCheckBox(square);
    }
    checkWinner();
    switchPlayer();
    disableSquare(square);
}));
//onCheckBox will update the checkbox record when buttons are clicked;
function onCheckBox(element) {
    checkedBoxes.push({
        box: element.id,
        player: element.innerHTML
    });
}
//swithcPlayer function will switch players turn everytime a button is clicked;
function switchPlayer() {
    currentPlayer = currentPlayer == o ? x : o;
    currentPlayerTurn.innerHTML = currentPlayer;
}
//reset function 
reset.addEventListener('click', function () {
    Array.from(plays).forEach(square => {
        clearAll(square);
    })
});

//disable square function will disable the square when a player clicks on it to prevent it from being clicked again;
function disableSquare(element) {
    element.disabled = true;
}

//clearall function will reset everything to original state.
function clearAll(element) {
    element.innerHTML = '';
    element.style.background = 'var(--before)';
    element.disabled = false;
    currentPlayer = o;
    currentPlayerTurn.innerHTML = currentPlayer;
    checkedBoxes = [];
    os = [];
    xs = [];
    winMessageContainer.style.display = 'none';
}

//checkWinner function will be the logic behind the whole game. this function will check if a player has won or not everytime a player clicks on a button;
function checkWinner() {
    if (currentPlayer === o) {
        os = checkedBoxes.filter(item => item.player === o).map(object => {
            return {
                x: Number(object.box.split('-')[0]),
                y: Number(object.box.split('-')[1])
            }
        })
        calculateScore(os);
    } else {
        xs = checkedBoxes.filter(item => item.player === x).map(object => {
            return {
                x: Number(object.box.split('-')[0]),
                y: Number(object.box.split('-')[1])
            }
        })
        calculateScore(xs);
    }
    drawCheck(os, xs);
}

//calculateScore is to check if a winner is determined with the next press of button;
function calculateScore(positions){
    //horizontal check
    for(var i = 0; i < 3; i++){
        var consecutiveHorizontal = positions.filter(p => p.x === i);
        if(consecutiveHorizontal.length === 3){
            win();
        }
        //vertical check
        var consecutiveVertical = positions.filter(p => p.y === i);
        if(consecutiveVertical.length === 3){
            win();
        }
    } 
    //left diagonal check
    if(positions.filter(i => i.x === i.y).length === 3){
        win();
    } 
    //right diagonal check
    if(positions.filter(i => {
        {return (i.x === 0 && i.y ===2) || (i.x === 1 && i.y === 1) || (i.x === 2 && i.y === 0)}       
    }).length === 3){
        win();
    }
}

function drawCheck(position1, position2){
    if(won === false && position1.length === 5 && position2.length === 4){
        draw();
    }
}

//win message
function win(){
    winMessageContainer.style.display = 'flex';
    winMessage.innerHTML = currentPlayer + ' Wins!'
    won = true;
}

//draw message
function draw(){
    winMessageContainer.style.display = 'flex';
    winMessage.innerHTML = 'Draw'
}