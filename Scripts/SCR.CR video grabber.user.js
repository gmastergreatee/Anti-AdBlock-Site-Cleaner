// ==UserScript==
// @name         scr.cr video grabber
// @namespace    https://github.com/gmastergreatee/Anti-AdBlock-Site-Cleaner
// @version      0.1
// @description  try to take over the world!
// @author       gmastergreatee
// @run-at       context-menu
// @include      *scr.cr/watch*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      http://s3.spruto.org/embed/player.js
// @grant        none
// ==/UserScript==

$(document).ready(function () {

    let videoDataList = $('.wpbc-server .ulclear a');
    let main_playlist480 = [];
    let main_playlist1080 = [];
    let main_playlist720 = [];
    let t_value = $('html').html().trim().substr($('html').html().trim().indexOf('&t=') + 3, $('html').html().trim().substr($('html').html().trim().indexOf('&t=') + 3).indexOf('\''));

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text);
    }

    function getLink(index) {
        if (index < videoDataList.length) {
            $.get(atob('aHR0cHM6Ly9hamF4Mi5zY3IuY3IvV2VEb05vdFdpc2hUb0JlSG90bGlua2VkLVBsZWFzZVJlc3BlY3RPdXJEZWNpc2lvbi5waHA/ZWlkPQ==') + $(videoDataList[index]).data('eid') + '&t=' + t_value)
                .done(function (response) {

                    if (response.indexOf('<title>Error</title>') >= 0) {
                        alert('Video could not be loaded');
                        return;
                    }

                    let videoData = JSON.parse(response);

                    for (let i = 0; i < videoData.sources.length; i++) {
                        if (videoData.sources[i].label.includes('480')) {
                            main_playlist480.push(videoData.sources[i].file);
                        }
                        if (videoData.sources[i].label.includes('720')) {
                            main_playlist720.push(videoData.sources[i].file);
                        }
                        if (videoData.sources[i].label.includes('1080')) {
                            main_playlist1080.push(videoData.sources[i].file);
                        }
                    }

                    index++;
                    if (index < videoDataList.length) {
                        getLink(index);
                    } else {
                        console.log(main_playlist480);
                        console.log(main_playlist720);
                        console.log(main_playlist1080);
                        let text = '';
                        if (main_playlist480.length > 0) {
                            text += '<b><u>Videos (480px):-</u></b><br><br>';
                        }
                        $.each(main_playlist480, function (index, obj) {
                            text += obj + '<br>';
                        });
                        if (main_playlist720.length > 0) {
                            text += '<br><b><u>Videos (720px):-</u></b><br><br>';
                        }
                        $.each(main_playlist720, function (index, obj) {
                            text += obj + '<br>';
                        });
                        if (main_playlist1080.length > 0) {
                            text += '<br><b><u>Videos (1080px):-</u></b><br><br>';
                        }
                        $.each(main_playlist1080, function (index, obj) {
                            text += obj + '<br>';
                        });
                        copyTextToClipboard(text);
                        let buttons = '<button id="close-gm-links" style="float:right;user-select:none;">x</button><button id="copy-gm-links-1080" style="float:right;user-select:none;">Copy all 1080</button><button id="copy-gm-links-720" style="float:right;user-select:none;">Copy all 720</button><button id="copy-gm-links-480" style="float:right;user-select:none;">Copy all 480</button><span style="float:right;color:white;">Paste links <a href="#" onclick="window.open(\'https://gmastergreatee.github.io/OnlineVideoPlayer/index.html\', \'_blank\')">here</a> to view all videos</span>';
                        $('body').append(`<div id="gm-url-viewer" style="position:absolute;top:0;left:0;right:0;bottom:0;z-index:9999;">
                        <div style="background-color:black;">
                        <table style="width:100%;">
                        <tr><td style="font-size:18px;color:black;">`+ buttons + `</td></tr>
                        <tr><td><div style="background-color:white;color:black;font-size:18px;max-height:500px;overflow:auto;">` + text + `</div></td></tr></table></div></div>`);

                        $('#close-gm-links').click(function () {
                            $('#gm-url-viewer').remove();
                        });

                        $('#copy-gm-links-480').click(function () {
                            copy480();
                        });

                        $('#copy-gm-links-720').click(function () {
                            copy720();
                        });

                        $('#copy-gm-links-1080').click(function () {
                            copy1080();
                        });
                    }
                });
        }
    }

    function copy480() {
        let text = '';
        $.each(main_playlist480, function (index, obj) {
            text += obj + '\n';
        });
        copyTextToClipboard(text);
    }

    function copy720() {
        let text = '';
        $.each(main_playlist720, function (index, obj) {
            text += obj + '\n';
        });
        copyTextToClipboard(text);
    }

    function copy1080() {
        let text = '';
        $.each(main_playlist1080, function (index, obj) {
            text += obj + '\n';
        });
        copyTextToClipboard(text);
    }

    getLink(0);
    alert('scr.cr video-extractor loaded. Please wait for a bit for the links to load.');
});