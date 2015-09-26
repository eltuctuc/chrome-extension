(function() {
    "use strict";

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
})();
