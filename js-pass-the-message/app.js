let button = document.getElementById('button');
let textDisplay = document.getElementById('textDisplay');
let input = document.getElementById('input');

function submit(){
    if(input.value.length < 1){
        textDisplay.innerHTML = 'Input was left blank!';
        setTimeout(function(){
            textDisplay.innerHTML = null;
        }, 2000)
    } else {
        textDisplay.innerHTML = input.value;
        input.value = null;
    }   
}

button.addEventListener('click', submit)

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13) {
        event.preventDefault();
        button.click();
        input.value = null;
    }
});
