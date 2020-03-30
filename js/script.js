'use strict';

let quoteArray = [
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

    let json = JSON.stringify(quoteArray);
    
    let button = document.body.querySelector('#button');
    let quoteText = document.body.querySelector('.quote__blockquote p');
    let quoteCite = document.body.querySelector('.quote__blockquote cite');
    
    
    function generatorQuote(array) {
        
        button.addEventListener('click', function(){
            
            let currentQuote = array[Math.floor(Math.random()*10)];
                
            quoteText.innerHTML = currentQuote.textQuote;
            quoteCite.innerHTML = currentQuote.citeQuote;

        });

        button.addEventListener('click', function(){
            button.classList.toggle('rotate');
            setTimeout(() => button.classList.remove("rotate"), 300);
            
        });
    }

    try {

        let jsonQuoteArray = JSON.parse(json);
        for (let i = 0; i < jsonQuoteArray.length; i++) {
            
            if (!jsonQuoteArray[i].textQuote || !jsonQuoteArray[i].citeQuote ) {
                throw new SyntaxError("Данные неполны: отсутствует соответствующее поле");
            }  
        }
        
          generatorQuote(jsonQuoteArray);

    } catch (error) {
        
        alert(error.message);

    }
    