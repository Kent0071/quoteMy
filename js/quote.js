'use strict';

(function () {

    /*
        DATA UTILITY LAYER:
    */

    /**
     * 
     * @param {*[]} dataArray
     * @returns {*}
     */
    function getRandomElementFromArray(dataArray = []) {
        const randomElementIndex = Math.floor(Math.random() * dataArray.length); // TODO: improve it

        return dataArray[randomElementIndex];
    }

    /*
        TODO: wrap into a Class
        DATA LAYER:
    */

    const QUOTES = [
        { text: "Quote1", author: "Author1" },
        { text: "Quote2", author: "Author2" },
        { text: "Quote3", author: "Author3" },
        { text: "Quote4", author: "Author4" },
        { text: "Quote5", author: "Author5" },
        { text: "Quote6", author: "Author6" },
        { text: "Quote7", author: "Author7" },
        { text: "Quote8", author: "Author8" },
        { text: "Quote9", author: "Author9" },
        { text: "Quote10", author: "Author10" }
    ];

    /**
      *
      * @returns {{text: string, author: string}}
      */
    function getRandomQuote() {
        return getRandomElementFromArray(QUOTES);
    }

    /*
        TODO: wrap into a class with static methods
        HTML UTILITY LAYER:
    */

    /**
      * эта функция возвращает найденный элемент по селектору
      * @param {string} cssSelector
      * @returns {HTMLElement | undefined}
      */

    function getElementBySelector(cssSelector) {
        return document.querySelector(cssSelector);
    }

    /*
        TODO: wrap into a Class
        QUOTE APPLICATION LAYER:
    */

    // html-related helpers:

    /**
     * 
     */
    function getRefreshQuoteBtnHtmlElement() {
        const refreshQuoteBtnSelector = '#button'; // TODO: this ID should be replaced with class selector
        
        return getElementBySelector(refreshQuoteBtnSelector);
    }

    /**
     * 
     */
    function getQuoteTextHtmlElement() {
        const quoteTextSelector = '.quote__blockquote p';
        
        return getElementBySelector(quoteTextSelector);
    }

    /**
     * 
     */
    function getQuoteAuthorHtmlElement() {
        const qouteAuthorSelector = '.quote__blockquote cite';
        
        return getElementBySelector(qouteAuthorSelector);
    } 

    // data-rendering helpers:

    /**
      *
      * @param {{text:string, author:string}} quote
      */
    function renderQuoteText(quote) {
        const quoteTextContainer = getQuoteTextHtmlElement();
        
        if (!quoteTextContainer) {
            return; // or throw an Error
        }

        quoteTextContainer.innerHTML = quote.text;
    }

    /**
      *
      * @param {{text:string, author:string}} quote
      */
    function renderQuoteAuthor(quote) {
        const quoteAuthorContainer = getQuoteAuthorHtmlElement();

        if (!quoteAuthorContainer) {
            return; // or throw an Error
        }
     
        quoteAuthorContainer.innerHTML = quote.author;
    }

    /**
      *
      * @param {{text:string, author:string}} quote
      */
     function renderQuoteData(quote) {
        renderQuoteText(quote);
        renderQuoteAuthor(quote);
    }

    /**
     * 
     */
    function renderRandomQuoteData() {
        renderQuoteData(getRandomQuote())
    }

    // user-interaction

    /**
     * Handles click event on RefreshQuoteBtn.
     */
    function handleRefreshQuoteBtnClick() {
        const toggleClass = 'rotate';
        const refreshQuoteBtn = getRefreshQuoteBtnHtmlElement();
        
        if (!refreshQuoteBtn) {
            return; // or throw an Error
        }


        // prevent from re-rendering data before it updated and class is removed
        if (refreshQuoteBtn.classList.contains(toggleClass)) {
            return; 
        }

        // add proper class to enforce rotation animation
        refreshQuoteBtn.classList.toggle(toggleClass);
        
        setTimeout(() => {
            refreshQuoteBtn.classList.remove(toggleClass);
            renderRandomQuoteData(); // show quote data when btn rotation ended.
        }, 300);
    }

    /**
     * 
     */
    function initRefreshQuoteBtnClickHandler() {
        const refreshQuoteBtn = getRefreshQuoteBtnHtmlElement();
        
        if (!refreshQuoteBtn) {
            return; // or throw an Error
        }

        refreshQuoteBtn.addEventListener('click', handleRefreshQuoteBtnClick);
    }


    /**
     * 
     */
    function removeRefreshQuoteBtnClickListener() {
        const refreshQuoteBtn = getRefreshQuoteBtnHtmlElement();
        
        if (!(refreshQuoteBtnClickListener && refreshQuoteBtn)) {
           return; 
        }

        refreshQuoteBtn.removeEventListener('click', handleRefreshQuoteBtnClick);
    }

    // initiation

    /**
     *
     */
    function initQuoteGenerator() {
        // 1. Render initial quote data
        renderRandomQuoteData();

        // 2. add event listener on the RefreshQuoteBtn
        initRefreshQuoteBtnClickHandler();
    }

    // listen window events

    window.onload = function () {
        initQuoteGenerator();
    }

    window.onunload = function() {
        // clean up
        removeRefreshQuoteBtnClickListener();
    }

})()  