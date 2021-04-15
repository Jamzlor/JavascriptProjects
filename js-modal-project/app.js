//filter and search functions
let navItems = document.querySelectorAll('.nav-item');
let cards = document.querySelectorAll('.card');
let displayAllFilter = document.querySelector('.all');

navItems.forEach(item => item.addEventListener('click', function(){
    cards.forEach(card => card.style.display = 'none');
    document.querySelectorAll(`.${item.id}`).forEach(card => (card.style.display == 'none') ? card.style.display = 'block' : card.style.display = 'none');
}));

displayAllFilter.addEventListener('click', function(){
    cards.forEach(item => item.style.display = 'block');
});

const searchBar = document.getElementById('searchBar');
let lowerDishName = Array.from(document.querySelectorAll('.dishName')).map(item => item.innerHTML.toLowerCase());


searchBar.addEventListener('keyup', function(event){
    if(event.key ==='Enter'){
        if(searchBar.value.toLowerCase() === 'all'){
            cards.forEach(card => card.style.display = 'block');
        }
        if(lowerDishName.filter(item => item == searchBar.value.toLowerCase()).length > 0){
            cards.forEach(card => card.style.display = 'none');
            cards[lowerDishName.indexOf(searchBar.value.toLowerCase())].style.display = "block";
        } 
        searchBar.value = '';
    }
});


//modal popup and scrolling carousel functions
// this array holds the paths of the images in the card
const imgArr = Array.from(document.querySelectorAll('img')).map(item => item.currentSrc);

const body = document.getElementsByTagName('body');
let cardImg = document.querySelectorAll('img');
let imgContainer = document.getElementById('imgContainer');
let popUp = document.getElementById('popUp');
let closeButton = document.querySelector('#closeButton');
let count;
let imgUrl;
// this function will open a popup when a card is clicked
cardImg.forEach(item => item.addEventListener('click', function(e){
    imgUrl = e.path[0].src;
    popUp.style.display = 'block';
    popUp.style.background = 'rgb(40,42,54, 0.7)';
    imgContainer.style.background = `url(${imgUrl}) center/cover`;
    count = imgArr.indexOf(imgUrl);
}));

// left and right button will cycle through a carousel of all photos available on this menu
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');

    leftButton.addEventListener('click', function(e){
        if(count === 0){
            count = imgArr.length - 1;
            imgContainer.style.background = `url(${imgArr[count]}) center/cover`;
        } else{
            count--;
            imgContainer.style.background = `url(${imgArr[count]}) center/cover`;
        }
    });
    
    rightButton.addEventListener('click', function(e){
        if(count === imgArr.length - 1){
            count = 0;
            imgContainer.style.background = `url(${imgArr[count]}) center/cover`;
        } else{
            count++;
            imgContainer.style.background = `url(${imgArr[count]}) center/cover`;
        }
    });
    
    // close button function will close the popup  
    closeButton.addEventListener('click', close);
    
    function close(){
        popUp.style.display = 'none';
    }
    

