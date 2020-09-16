chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting[0] == "hello"){            
            chrome.runtime.sendMessage({img : retrieveImgUrl(request.greeting[1])});
        }
    });

function retrieveImgUrl(format) {
    var pictureURLs = [];
    var imgs = document.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
        var url = imgs[i].src;
        if (url.indexOf(format) !== -1) {
            pictureURLs.push(url.slice(0,url.indexOf(format)+3));
        }
    }
    return pictureURLs;
}