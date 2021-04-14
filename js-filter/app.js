document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', function(){
    document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
    document.querySelectorAll(`.${item.id}`).forEach(card => (card.style.display == 'none') ? card.style.display = 'block' : card.style.display = 'none')
}));

document.querySelector('.all').addEventListener('click', function(){
    document.querySelectorAll('.card').forEach(item => item.style.display = 'block');
})

const searchBar = document.getElementById('searchBar');
let lowerDishName = Array.from(document.querySelectorAll('.dishName')).map(item => item.innerHTML.toLowerCase());

console.log(lowerDishName);

searchBar.addEventListener('keyup', function(event){
    if(event.key ==='Enter'){
        if(lowerDishName.filter(item => item == searchBar.value.toLowerCase()).length > 0){
            document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
            document.querySelectorAll('.card')[lowerDishName.indexOf(searchBar.value.toLowerCase())].style.display = "block";
        } 
    }
})