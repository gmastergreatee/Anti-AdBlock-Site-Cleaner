// ==UserScript==
// @name         KissAsian + KimCartoon Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.5
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *kissasian.sh*
// @include      *kimcartoon.me*
// @include      *yucloud.co/direct/embed.php*
// @include      *mp4upload.com*
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
            if ($elm) {
                $elm.html(txt);
            }
        } catch (err) {}
    }

    function doWork() {
        // write anything below to remove from the DOM
        remove('iframe:not([allowfullscreen=true]),.mgbox,.divCloseBut');
        if (window.location.href.includes('mp4upload.com/'))
            remove('#overlay');
        if (window.location.href.includes('kimcartoon.me/'))
            remove('.kcAds1,#hideAds');
        display('#divContentVideo>iframe:first-child(),video,#divContentVideo>div');
        html('#divDownload', '<b>Use <a href="http://www.eagleget.com/">EagleGet</a>/<a href="https://9xbuddy.app/">9xbuddy</a> to get download links</b>');
    }

    doLoop(0, 200);
});