// ==UserScript==
// @name         FreeTutorials Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.2
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *freetutorials.us*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    var items = $('.readmore');
    $.each(items,function(index,obj){
        $(obj).removeClass('readmore');
        $(obj).removeClass('alignnone');
    });
})();
