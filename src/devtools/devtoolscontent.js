(function() {
    "use strict";

    $(document).ready(function () {
        var port = chrome.extension.connect({name: "color-divs-port"});

        $("button").on('click', function () {
            port.postMessage({type: "color-divs"});
        });
    });
})();
