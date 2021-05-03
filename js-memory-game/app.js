// mise en place
//targets 
//arr is a list of class name for fontawesome icons.
const arr = ['fa-anchor', 'fa-blender', 'fa-archway', 'fa-atom', 'fa-band-aid', 'fa-baseball-ball', 'fa-bell', 'fa-binoculars'];
//icons are where the FA icons will show in the cards.
const icons = Array.from(document.getElementsByClassName('icon'));
const cards = Array.from(document.getElementsByClassName('cards'));
const reset = document.getElementById('reset');

var iconList = arr.concat(arr); //this will double all the icons into a list of 16 icons with a duplicate of each.

// timer mise en place
var timerRunning = false;
var timerStart; //this is a global variable made for the timer so it can accessed in differet functions.
var minutesLabel = document.getElementById('minutes');
var secondsLabel = document.getElementById('seconds');
var totalSeconds = 0;

var check = false; //this determines if a click needs to be checked or not.

//functions
function shuffle(arr) {
  return arr.sort((a, b) => 0.5 - Math.random());
}

var shuffledList = shuffle(iconList);

function applyIcons() {
  icons.forEach(item => item.classList.add(shuffledList[icons.indexOf(item)])) //this will apply the icons in random order to the cards.
}

function reapplyIcons() {
  icons.forEach(item => item.classList.remove(item.classList[item.classList.length - 1]));
  shuffledList = shuffle(iconList);
  applyIcons();
}

function resetHiddenClass() {
  icons.forEach(item => item.classList.add('hidden'));
}

function resetTimer() {
  timerRunning = false;
  clearInterval(timerStart);
  minutesLabel.innerHTML = '00';
  secondsLabel.innerHTML = '00';
  totalSeconds = 0;
}
function resetStates(){
  check = false;
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

function checkAnswer() {
  if (!check) {
    check = true;
  } else {
    check = false;
  }
}

applyIcons(); //this will apply the first round of icons on the board  

cards.forEach(item => item.addEventListener('click', function () {
  checkTimer();
  checkAnswer();
  console.log(check)
  item.children[0].classList.remove('hidden');
}))



//reset function
reset.addEventListener('click', function () {
  reapplyIcons();
  resetHiddenClass();
  resetTimer();
  resetStates();
})