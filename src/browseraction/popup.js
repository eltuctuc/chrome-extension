$(document).ready(function () {
    "use strict";

    $('button').on('click', function () {
        chrome.extension.sendMessage({
            type: 'color-divs'
        });
        window.close();
    });
});
