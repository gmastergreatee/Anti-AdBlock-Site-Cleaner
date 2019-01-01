// ==UserScript==
// @name         FreeTutorials Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.4
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *freetutorials.us*
// @include      *freetutorials.eu*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
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
            if ($elm.length > 0) {
                $elm.remove();
            }
        } catch (err) {}
    }

    function display(el) {
        try {
            var $elm = $(el);
            if ($elm.length > 0) {
                $elm.css('display', 'inherit');
            }
        } catch (err) {}
    }

    function html(el, txt) {
        try {
            var $elm = $(el);
            if ($elm.length > 0) {
                $elm.html(txt);
            }
        } catch (err) {}
    }

    function doWork() {
        // write anything below to remove from the DOM
        remove('.adsbygoogle');
    }

    doLoop(0, 200);
});
