'use strict';

(function () {

    let quoteArray =
        [
            { textQuote: "Quote1", citeQuote: "&copy; Autor1" },
            { textQuote: "Quote2", citeQuote: "&copy; Autor2" },
            { textQuote: "Quote3", citeQuote: "&copy; Autor3" },
            { textQuote: "Quote4", citeQuote: "&copy; Autor4" },
            { textQuote: "Quote5", citeQuote: "&copy; Autor5" },
            { textQuote: "Quote6", citeQuote: "&copy; Autor6" },
            { textQuote: "Quote7", citeQuote: "&copy; Autor7" },
            { textQuote: "Quote8", citeQuote: "&copy; Autor8" },
            { textQuote: "Quote9", citeQuote: "&copy; Autor9" },
            { textQuote: "Quote10", citeQuote: "&copy; Autor10" }
        ];

    /**
     * эта функция возвращает найденный элемент по селектору
     * @returns {object|undefined}
     * @param {string} строка с названием селектора
     */

    function getElementBySelector(selector) {

        return document.body.querySelector(selector);

    }
    
    /**
     * эта функция возвращает рандомный элемент массива
     * @returns {number|undefined}
     * @param {Array} ссылка на обрабатываемый массив
     */

    function getRandomQuote(array) {

        let currentQuote = array[Math.floor(Math.random() * 10)];
        return currentQuote;

    }

    /**
     * эта функция меняет содержимое html тега
     *
     * @param {Array} ссылка на обрабатываемый массив
     */
    function changeQuoteInnerHTML(arr) {

        let activeQuote = getRandomQuote(arr);

        quoteText.innerHTML = activeQuote.textQuote;
        quoteCite.innerHTML = activeQuote.citeQuote;
    }

    /**
     * Функция которая меняет состояние кнопки
     */
    function changesBehaviorEventButton () {

        button.classList.toggle('rotate');
        setTimeout(() => button.classList.remove("rotate"), 300);
    }

    /**
     * эта функция меняет состояние элемента при наступление события
     *
     * @param {element} - элемент на который будет вешаться обработчик события
     * @param {event} - событие при котором стработает обработчик
     * @param {handler} - функция для обработки события
     */
    function handleRefreshQuoteBtnClick(element, event, handler) {
        element.addEventListener(event, handler);
    }
  
    let button = getElementBySelector('#button');
    let quoteText = getElementBySelector('.quote__blockquote p');
    let quoteCite = getElementBySelector('.quote__blockquote cite');

    let eventBtn = 'click';

    window.onload = function () {
        changeQuoteInnerHTML(quoteArray)
    }
     /**
     * эта функция меняет содержимое html тега при наступлении события
     *
     * @param {Array} ссылка на обрабатываемый массив
     */

    function initQuoteGenerator(arr) {

        button.addEventListener('click', function () {

            changeQuoteInnerHTML(arr);
        });

        handleRefreshQuoteBtnClick(button, eventBtn, changesBehaviorEventButton);
    }

    initQuoteGenerator(quoteArray);
})()  