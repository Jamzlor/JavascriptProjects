// mise en place
//targets 
//arr is a list of class name for fontawesome icons.
const arr = ['fa-anchor', 'fa-blender', 'fa-archway', 'fa-atom', 'fa-band-aid', 'fa-baseball-ball', 'fa-bell', 'fa-binoculars'];
//icons are where the FA icons will show in the cards.
const icons = Array.from(document.getElementsByClassName('icon'));
const cards = Array.from(document.getElementsByClassName('cards'));
const reset = document.getElementById('reset');
const iconContainers = Array.from(document.getElementsByClassName('iconContainer'));
const winConatiner = document.getElementById('winContainer')
var iconList = arr.concat(arr); //this will double all the icons into a list of 16 icons with a duplicate of each.

// timer mise en place
var timerRunning = false;
var timerStart; //this is a global variable made for the timer so it can accessed in differet functions.
var minutesLabel = document.getElementById('minutes');
var secondsLabel = document.getElementById('seconds');
var totalSeconds = 0;

var check = false; //this determines if a click needs to be checked or not.

var temp;


//functions
function shuffle(arr) {
    return arr.sort((a, b) => 0.5 - Math.random());
}

var shuffledList = shuffle(iconList);

function applyIcons() {
    icons.forEach(item => {
        item.classList.add(shuffledList[icons.indexOf(item)]);
    }) //this will apply the icons in random order to the cards.
}

function reapplyIcons() {
    icons.forEach(item => item.classList.remove(item.classList[item.classList.length - 1]));
    shuffledList = shuffle(iconList);
    applyIcons();
}


function resetTimer() {
    timerRunning = false;
    clearInterval(timerStart);
    minutesLabel.innerHTML = '00';
    secondsLabel.innerHTML = '00';
    totalSeconds = 0;
}

function resetStates() {
    check = false;
    winContainer.style.display = 'none'
    cards.forEach(item => item.disabled = false);
}

function resetHiddenClass() {
    iconContainers.forEach(item => item.classList.add('hidden'));
}
// timer function 
function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function checkTimer() {
    if (!timerRunning) {
        timerStart = setInterval(setTime, 1000);
        timerRunning = true;
    }
}

function noMatch(x) {
    setTimeout(() => {
        x.parentNode.classList.add('hidden');
        x.parentNode.parentNode.disabled = false;
        temp.parentNode.classList.add('hidden');
        temp.parentNode.parentNode.disabled = false;
        
    }, 100);
}

function checkAnswer(checkItem) {
    if (!check) {
        temp = checkItem;
        check = true;
    } else {
        if (checkItem.classList[checkItem.classList.length - 1] !== temp.classList[temp.classList.length - 1]) {
            noMatch(checkItem);
        }
        check = false;
    }
}

function checkWin() {
    if (!check) {
        if(iconContainers.filter(item => item.classList.contains('hidden')).length === 0){
            clearInterval(timerStart);
            winConatiner.style.display = 'flex';
            winContainer.children[0].innerHTML = `Completed in ${minutesLabel.innerHTML}:${secondsLabel.innerHTML}`
        }
    }
}



applyIcons(); //this will apply the first round of icons on the board  

cards.forEach(item => item.addEventListener('click', function () {
    var iconContainer = item.children[0];
    var icon = item.children[0].children[0];

    item.disabled = true;
    iconContainer.classList.remove('hidden');
    checkTimer();
    checkAnswer(icon);
    checkWin();

}))



//reset function
reset.addEventListener('click', function () {
    resetHiddenClass();
    reapplyIcons();
    resetTimer();
    resetStates();
})