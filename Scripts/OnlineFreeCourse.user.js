// ==UserScript==
// @name         OnlineFreeCourse Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.3
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *onlinefreecourse.net*
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
        remove('.bsac,.wrapper-sticky,.adsbygoogle');
        let mainCol = $('.col-sm-8.content-column');
        if (mainCol) {
            mainCol.removeClass();
        }
    }

    $(document).on('click', '.downloadbtn', function () {
        doLoop(0, 200);
    });

    doLoop(0, 200)
});