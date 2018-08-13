// ==UserScript==
// @name         Kissanime + Kissmanga Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.1
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *kissanime.ru*
// @include      *kissmanga.com*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

$(document).ready(function () {
    function doLoop(counter, maxCounter) {
        setTimeout(function () {
            if (counter < maxCounter) {
                doWork();
                doLoop(counter + 1, maxCounter);
            }
        }, 500)
    }

    function remove(el) {
        try {
            var $elm = $(el);
            if ($elm) {
                $elm.remove();
            }
        } catch (err) {}
    }

    function doWork() {
        // write anything below to remove from the DOM
        if (!document.title.includes('Please wait 5'))
            remove('iframe:not(#ifrmVast),#adsIfrme7,#adsIfrme6,#adsIfrme5,#adsIfrme4,#adsIfrme3,#adsIfrme2,#adsIfrme8,#adsIfrme9,body>div:not([class],[id]),body>div>div>a');
    }

    doLoop(0, 200)
});