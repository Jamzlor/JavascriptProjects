let button = document.getElementById('button');

button.addEventListener('click', function(){
    document.getElementById('textDisplay').innerHTML = document.getElementById('input').value;
});

// TODO link this action to the enter key so when ever enter key is pressed the text display area will have the typed message.
// TODO produce an alert when the input is left blank and submit triggered. it will have to disappear in 2 seconds.