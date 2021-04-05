/* jshint esversion: 6*/
window.onload = getQuote();
var ranQuote = "";
var ranAuthor = "";
function getQuote(){
    fetch("https://type.fit/api/quotes#")
        .then(res => res.json())
        .then(function(data) {

            var randomInd = (Math.floor(Math.random() * data.length)) ;
            var quote = document.getElementById("text");
            var author =document.getElementById("author");
            ranQuote = data[randomInd].text;
            ranAuthor = data[randomInd].author;
            
            if(ranAuthor === null){
                ranAuthor = "Anonymous";
            }
            quote.innerHTML = ranQuote;
            author.innerHTML = ranAuthor;
        });
}

document.getElementById("new-quote").onclick = getQuote;


