// ==UserScript==
// @name         OffMP3 + 9xBuddy Cleaner
// @namespace    https://gist.github.com/gmastergreatee/27308f6587868ccae37fe5a3aaf301ab
// @version      0.1
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *offmp3.app*
// @include      *9xbuddy.app*
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
        remove('.night-banner');
    }

    doLoop(0, 200)
});