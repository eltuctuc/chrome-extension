(function(){
    "use strict";

    chrome.extension.onMessage.addListener(function (message) {
        switch (message.type) {
            case "colors-div":
                var divs = document.querySelectorAll("div");
                divs = Array.prototype.slice.call(divs,0);
                if (divs.length === 0) {
                    window.alert("There are no any divs in the page.");
                } else {
                    divs.forEach(function(div){
                        div.style.backgroundColor = message.color;
                    });
                    setTimeout(function() {
                        divs.forEach(function(div){
                            div.removeAttribute('style');
                        });
                    }, 2000);
                }
                break;
        }
    });
})();
