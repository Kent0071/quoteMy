'use strict';
// 1.Необходимо место где будут храниться цитаты
// По скольку как хранить и доставать данные с сервера мы не учили,то создам массив
// в который помещю несколько цитат обьектами в текстом цитаты и автором
// 2.На слушатель навесить событие клик,при котором будут доставаться данные из массива и 
// подставлятся в соответствующий блок
// 3.Цитаты с массива перебирать в цикле и выбирать с помощью функции макс рандом умноженую на сто и округленную до 
// в сторону нижнего значения
// 4.Можно на слушатель добавить класс кнопки чтобы она перекручивалась и потом сразу этот класс удалить.

let quoteArray = 
    [{textQuote: "Quote1", citeQuote:"&copy; Autor1"},
    {textQuote: "Quote2", citeQuote:"&copy; Autor2"},
    {textQuote: "Quote3", citeQuote:"&copy; Autor3"},
    {textQuote: "Quote4", citeQuote:"&copy; Autor4"},
    {textQuote: "Quote5", citeQuote:"&copy; Autor5"},
    {textQuote: "Quote6", citeQuote:"&copy; Autor6"},
    {textQuote: "Quote7", citeQuote:"&copy; Autor7"},
    {textQuote: "Quote8", citeQuote:"&copy; Autor8"},
    {textQuote: "Quote9", citeQuote:"&copy; Autor9"},
    {textQuote: "Quote10", citeQuote:"&copy; Autor10"}];

    let button = document.body.querySelector('button');
    
    button.addEventListener('click', function(){
    let quoteText = document.body.querySelector('.quote__blockquote p');
    let quoteCite = document.body.querySelector('.quote__blockquote cite');

    let currentQuote = quoteArray[Math.floor(Math.random()*10)];
        
    quoteText.innerHTML = currentQuote.textQuote;
    quoteCite.innerHTML = currentQuote.citeQuote;

    });
    button.addEventListener('click', function(){
        button.classList.toggle('rotate');
        setTimeout(() => button.classList.remove("rotate"), 300);
        
    });
 
    
    