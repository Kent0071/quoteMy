'use strict';

let quoteArray = 
    [
    {textQuote: "Quote1", citeQuote:"&copy; Autor1"},
    {textQuote: "Quote2", citeQuote:"&copy; Autor2"},
    {textQuote: "Quote3", citeQuote:"&copy; Autor3"},
    {textQuote: "Quote4", citeQuote:"&copy; Autor4"},
    {textQuote: "Quote5", citeQuote:"&copy; Autor5"},
    {textQuote: "Quote6", citeQuote:"&copy; Autor6"},
    {textQuote: "Quote7", citeQuote:"&copy; Autor7"},
    {textQuote: "Quote8", citeQuote:"&copy; Autor8"},
    {textQuote: "Quote9", citeQuote:"&copy; Autor9"},
    {textQuote: "Quote10", citeQuote:"&copy; Autor10"}
];

function getElement(selector) {
    
    return document.body.querySelector(selector); 

}

function currentQuote(array){

    let currentQuote = array[Math.floor(Math.random()*10)];
   return currentQuote;

}

let button = getElement('#button');
let quoteText = getElement('.quote__blockquote p');
let quoteCite = getElement('.quote__blockquote cite');




function generatorQuote(arr) {
    
    button.addEventListener('click', function(){
        
         let activeQuote = currentQuote(arr);
            
        quoteText.innerHTML = activeQuote.textQuote;
        quoteCite.innerHTML = activeQuote.citeQuote;
        
        button.classList.toggle('rotate');
        setTimeout(() => button.classList.remove("rotate"), 300);
    });
}

generatorQuote(quoteArray);
    