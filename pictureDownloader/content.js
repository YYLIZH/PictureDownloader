chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting == "hello"){            
            chrome.runtime.sendMessage({"img":retrieveImgUrl()});
        }
    });

function retrieveImgUrl() {
    var pictureURLs = [];
    var imgs = document.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
        var url = imgs[i].src;
        if (url.indexOf("jpg") !== -1) {
            pictureURLs.push(url.slice(0,url.indexOf("jpg")+3));
        }
    }
    return pictureURLs;
}