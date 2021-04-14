//filter and search functions
document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', function(){
    document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
    document.querySelectorAll(`.${item.id}`).forEach(card => (card.style.display == 'none') ? card.style.display = 'block' : card.style.display = 'none')
}));

document.querySelector('.all').addEventListener('click', function(){
    document.querySelectorAll('.card').forEach(item => item.style.display = 'block');
})

const searchBar = document.getElementById('searchBar');
let lowerDishName = Array.from(document.querySelectorAll('.dishName')).map(item => item.innerHTML.toLowerCase());


searchBar.addEventListener('keyup', function(event){
    if(event.key ==='Enter'){
        if(lowerDishName.filter(item => item == searchBar.value.toLowerCase()).length > 0){
            document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
            document.querySelectorAll('.card')[lowerDishName.indexOf(searchBar.value.toLowerCase())].style.display = "block";
        } 
    }
})


//modal popup and scrolling carousel functions
const imgArr = Array.from(document.querySelectorAll('img')).map(item => item.currentSrc);

console.log(imgArr);

document.querySelectorAll('.card').forEach(item => item.addEventListener('click', function(e){
    let imgUrl = e.path[0].src;
    document.getElementById('popUp').style.display = 'block';
    document.getElementById('imgContainer').style.background = `url(${imgUrl}) center/cover`;
}));

document.querySelector('#closeButton').addEventListener('click', function(){
    document.getElementById('popUp').style.display = 'none';
});