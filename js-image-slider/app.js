const images = [
    'images/1.jpg', 
    'images/2.jpg', 
    'images/3.jpg', 
    'images/4.jpg', 
    'images/5.jpg'
];

const wrapper = document.getElementById('wrapper');
let count = 0;

function right(){
    if(count != images.length -1){
        count++;
        wrapper.style.background = `url(${images[count]}) center/cover fixed no-repeat`;
    } else {
        count = 0;
        wrapper.style.background = `url(${images[count]}) center/cover fixed no-repeat`;
    }
}

function left(){
    if(count != 0){
        count--;
        wrapper.style.background = `url(${images[count]}) center/cover fixed no-repeat`;
    } else {
        count = images.length -1;
        wrapper.style.background = `url(${images[count]}) center/cover fixed no-repeat`;
    }
}


const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

leftButton.addEventListener('click', left);
rightButton.addEventListener('click', right);