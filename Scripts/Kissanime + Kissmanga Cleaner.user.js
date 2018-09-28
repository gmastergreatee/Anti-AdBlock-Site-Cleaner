// ==UserScript==
// @name         Kissanime + Kissmanga Cleaner
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1.0.7
// @description  try to take over the world!
// @author       gmastergreatee
// @include      *kissanime.ru*
// @include      *kissmanga.com*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

$(document).ready(function () {

    let doneOnce = 0;

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
            remove('iframe:not(#ifrmVast,#my_video_1),#adsIfrme7,#adsIfrme6,#adsIfrme5,#adsIfrme4,#adsIfrme3,#adsIfrme2,#adsIfrme8,#adsIfrme9,body>div:not([class],[id]),body>div>div>a,.adsPositioning');

        if (window.location.href.indexOf('rapidvideo') > 0) {
            $prevVid = $($('[src="/Content/images/previous.png"]').parents('a')[0]);
            $nextVid = $($('[src="/Content/images/next.png"]').parents('a')[0]);
            if ($nextVid) {
                if (!$nextVid.attr('href').endsWith('rapidvideo'))
                    $nextVid.attr('href', $nextVid.attr('href') + '&s=rapidvideo');
            }
            if ($prevVid) {
                if (!$prevVid.attr('href').endsWith('rapidvideo'))
                    $prevVid.attr('href', $prevVid.attr('href') + '&s=rapidvideo');
            }

            $episode_picker = $('#selectEpisode');
            if ($episode_picker) {
                $episode_picker.attr('id', 'selectEpiside_modified');
                $('#selectEpiside_modified').change(function () {
                    location.href = 'http://kissanime.ru/Anime/Dragon-Ball-Kai-2014-Dub/' + $('#selectEpiside_modified').val() + '&s=rapidvideo';
                });
            }

            if (doneOnce <= 3) {
                $video = $('#my_video_1');
                if ($video.length > 0) {
                    doneOnce++;
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#my_video_1").offset().top
                    }, 100);
                    $([document.documentElement, document.body]).animate({
                        scrollLeft: $("#my_video_1").offset().left
                    }, 100);
                }
            }
        }

        $ep_list = $('table.listing').find('a');
        if ($ep_list.length > 0) {
            for (let inc = 0; inc < $ep_list.length; inc++) {
                $hyperlink = $($ep_list[inc]);
                $link = $hyperlink.attr('href');
                if (!$link.endsWith('rapidvideo')) {
                    $hyperlink.attr('href', $link + '&s=rapidvideo');
                }
            }
        }
    }

    doLoop(0, 200);
});