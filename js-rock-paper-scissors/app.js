// mise en place
// buttons
const choiceBtn = document.getElementsByClassName('choiceBtn');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

// players choice and opponent choice
const opponentPlays = document.getElementById('opponentPlays');
const playerPlays = document.getElementById('playerPlays');

//win Loss
const winLoss = document.getElementById('winLoss');
const winLossMessage = document.getElementById('winLossMessage');

//functions mise en place
function rockIcon(elem) {
    elem.classList.add('fas', 'fa-hand-rock', 'rock');
}

function paperIcon(elem) {
    elem.classList.add('fas', 'fa-hand-paper', 'paper');
}

function scissorIcon(elem) {
    elem.classList.add('fas', 'fa-hand-peace', 'scissor');
}

function win() {
    setTimeout(() => {
        winLoss.style.display = 'flex';
        winLossMessage.innerHTML = 'Win!';   
    }, 800);
    
}

function lose() {
    setTimeout(() => {
        winLoss.style.display = 'flex';
        winLossMessage.innerHTML = 'Lose!';        
    }, 800);
}

const opponentArr = [rockIcon, paperIcon, scissorIcon]; //an arr of methods that is then used in the onclick callback to randomly determine opponent's choice

Array.from(choiceBtn).forEach(button => button.addEventListener('click', function (e) {
    //these 2 lines will clear all the class list, removing the icon from the play area for a new move
    playerPlays.classList.remove('fas', 'fa-hand-rock', 'fa-hand-peace', 'fa-hand-paper', 'rock', 'paper', 'scissor');
    opponentPlays.classList.remove('fas', 'fa-hand-rock', 'fa-hand-peace', 'fa-hand-paper', 'rock', 'paper', 'scissor');

    opponentArr[Math.floor(Math.random() * opponentArr.length)](opponentPlays); //this is a random action that dictates what the computer will choose

    //these will determine what the player chooses
    if (button.id === 'rock') {
        rockIcon(playerPlays);
    }
    if (button.id === 'scissor') {
        scissorIcon(playerPlays);
    }
    if (button.id === 'paper') {
        paperIcon(playerPlays);
    }

    // this will disable the button right after the button is pressed for 3 seconds so the victory message will not be distrubed
    Array.from(choiceBtn).forEach(button => button.disabled = true);
    setTimeout(() => {
        Array.from(choiceBtn).forEach(button => button.disabled = false);
    }, 3000);

    const opponentClassList = Array.from(opponentPlays.classList) //make classList into array for easier manipulation

    // these are conditions for winning and losing
    if (opponentClassList[3] === (button.id)) {
        setTimeout(() => {
            winLoss.style.display = 'flex';
            winLossMessage.innerHTML = 'Draw';
        }, 800);
    } else if (button.id === 'rock' && opponentClassList[3] === 'scissor') {
        win();
    } else if (button.id === 'scissor' && opponentClassList[3] === 'paper') {
        win();
    } else if (button.id === 'paper' && opponentClassList[3] === 'rock') {
        win();
    } else {
        lose();
    }

    setTimeout(() => {
        winLoss.style.display = 'none'
    }, 3800);
}));