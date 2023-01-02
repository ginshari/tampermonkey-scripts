// ==UserScript==
// @name         HideTweetDeckPreviewButton
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide the TweetDeck Preview Button that appears on the web version of TweetDeck.
// @author       ginshari
// @match        https://tweetdeck.twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strct';

    // Set the style to be hidden in advance.
    const hidden = `
      .js-gryphon-beta-btn {
          visibility: hidden;
      }
    `
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = hidden;
    document.head.appendChild(style);

})();

