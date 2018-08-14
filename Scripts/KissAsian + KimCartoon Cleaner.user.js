// ==UserScript==
// @name         KissAsian + KimCartoon Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.2
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *kissasian.sh*
// @include      *kimcartoon.me*
// @include      *yucloud.co/direct/embed.php*
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

    function display(el) {
        try {
            var $elm = $(el);
            if ($elm) {
                $elm.css('display', 'inherit');
            }
        } catch (err) {}
    }

    function html(el, txt) {
        try {
            var $elm = $(el);
            if ($elm && $elm.html() != txt) {
                $elm.html(txt);
            }
        } catch (err) {}
    }

    function doWork() {
        // write anything below to remove from the DOM
        remove('iframe:not(#divContentVideo>iframe:first-child()),.mgbox,.divCloseBut,.kcAds1,#hideAds,.fluid_nonLinear_middle');
        display('#divContentVideo>iframe:first-child()');
        html('#divDownload', '<b>Use EagleGet/9xbuddy to get download links</b>');
    }

    doLoop(0, 200);
});