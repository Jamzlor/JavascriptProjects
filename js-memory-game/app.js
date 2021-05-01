// mise en place
//targets 
    //arr is a list of class name for fontawesome icons.
const arr = ['fa-anchor', 'fa-blender', 'fa-archway', 'fa-atom', 'fa-band-aid', 'fa-baseball-ball', 'fa-bell', 'fa-binoculars'];
    //icons are where the FA icons will show in the cards.
const icons = Array.from(document.getElementsByClassName('icon'));
const cards = Array.from(document.getElementsByClassName('cards'));
var iconList = arr.concat(arr); //this will double all the icons into a list of 16 icons with a duplicate of each.
var temp;

// timer mise en place
var minutesLabel = document.getElementById('minutes');
var secondsLabel = document.getElementById('seconds');
var totalSeconds = 0;


//functions
function shuffle(arr){
    return arr.sort((a, b) => 0.5 - Math.random());  
}

var shuffledList = shuffle(iconList);

function applyIcons(){
    icons.forEach(item => item.classList.add(shuffledList[icons.indexOf(item)])) //this will apply the icons in random order to the cards.
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



document.getElementById('reset').addEventListener('click', applyIcons);

cards.forEach(item => item.addEventListener('click', function(){
    item.children[0].style.display = 'block';
    setInterval(setTime, 1000);
}))

applyIcons();


//apply icons during reset will have to remove the icon class before adding another class to it. 