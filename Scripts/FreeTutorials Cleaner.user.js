// ==UserScript==
// @name         FreeTutorials/FTUForum Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.8
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *ftuudemy.com*
// @include      *freetutorialseu.com*
// @include      *ftuforum.com*
// @include      *ftuforums.com*
// @include      *freetutorialsus.com*
// @include      *freecoursessites.com*
// @include      *courseforfree.com*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    let cc = 0;
    function rem() {
        setTimeout(() => {
            let ads = document.querySelectorAll('.adsbygoogle');
            for (let ii = 0; ii < ads.length; ii++) {
                ads[ii].remove();
            }
            cc++;
            if (cc < 40) {
                rem();
            }
        }, 500);
    }
    rem();

    let downloadPageLink = document.getElementById('download');
    let downloadLinkObj = document.querySelector('meta[http-equiv="refresh"]');
    let p = document.createElement('p');
    p.style = 'position:fixed;z-index:99;top:0;right:0;background-color:#eee;padding:10px;';

    if (downloadPageLink != null) {
        let d_url = downloadPageLink.attributes['href'].value;
        let b = document.createElement('button');
        b.addEventListener('click', function(){
            window.location.href = d_url;
        });
        p.innerHTML = '<button type="button" onclick="window.location.href=\'' + d_url + '\'">Go to Download Page</button>';
    } else if (downloadLinkObj != null) {
        let d_url = downloadLinkObj.attributes["content"].value.replace('20; url=', '');
        p.innerHTML = '<h3 style="display:inline">Download Link : </h3><input type="text" value="' + d_url + '" style="display:inline" readonly><a href="' + d_url + '" style="padding-left:10px">Download (Alt+Click)</a>';
    }
    document.querySelector('body').append(p);
})();
