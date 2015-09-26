(function() {
    "use strict";

    /**
     * listening for an event / one-time requests
     * coming from the popup
     */
    chrome.extension.onMessage.addListener(function (request) {
        switch (request.type) {
            case "color-divs":
                colorDivs({
                    text: "blue!",
                    color: "#00F"
                });
                break;
        }
        return true;
    });

    /**
     * send a message to the content script
     * @param {Object} msg
     * @param {String} msg.text
     * @param {String} msg.color
     */
    var colorDivs = function (msg) {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: msg.color});
        });
    };

    /**
     * listening for an event / long-lived connections
     * coming from devtools
     */
    chrome.extension.onConnect.addListener(function (port) {
        port.onMessage.addListener(function () {
            switch (port.name) {
                case "color-divs-port":
                    colorDivs({
                        text: "red!",
                        color: "#F00"
                    });
                    break;
            }
        });
    });
})();
