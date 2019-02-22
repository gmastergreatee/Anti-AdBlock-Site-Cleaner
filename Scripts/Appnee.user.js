// ==UserScript==
// @name         Appnee Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.1
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *appnee.com*
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
        } catch (err) { }
    }

    function doWork() {
        // write anything below to remove from the DOM
        remove('#adswidget2-quick-adsense,.adsbygoogle');
        //page-width fixations
        $('.site,.site-header,.hentry,.entry-header,.entry-content,.entry-meta').css('max-width', '100%');
        $('#super_rss_reader-2').css('left', '0');
        $('#super_rss_reader-4').css('left', '25%');
        $('#super_rss_reader-5').css('left', '50%');
        $('#custom_html-3').css('left', '75%');
    }

    doLoop(0, 200)
});