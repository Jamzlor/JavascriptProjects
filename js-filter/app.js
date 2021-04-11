document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', function(){
    document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
    document.querySelectorAll(`.${item.id}`).forEach(card => (card.style.display == 'none') ? card.style.display = 'block' : card.style.display = 'none')
}));

