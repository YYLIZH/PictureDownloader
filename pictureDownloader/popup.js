

document.querySelector("button").onclick = function () {
    chrome.tabs.query({active: true,currentWindow: true}, function (tabs) {
        if (document.getElementById("jpg").checked) {
            var message = ["hello", "jpg"];
        } else if (document.getElementById("png").checked) {
            var message = ["hello", "png"];
        } else if (document.getElementById("jpeg").checked) {
            var message = ["hello", "jpeg"];
        }   
        chrome.tabs.sendMessage(tabs[0].id, {greeting: message});
    });
};



chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.img !== undefined){
            var Grab = document.getElementById("Grab");
            Grab.style.display = "none";
            parent = document.getElementById("result");
            for (var i = 0;i < request.img.length;i++){
                parent.appendChild(createBlock(request.img[i]));
            }
            var Download = document.getElementById("Download");
            Download.style.display="block"
        }
    });


var downloadButton = document.getElementById("Download");
downloadButton.addEventListener("click",function(){
    var checkboxs = document.querySelectorAll("input");
    for (var i = 0; i < checkboxs.length;i++){
        if (checkboxs[i].checked){
            var url = checkboxs[i].parentElement.firstElementChild.src;
            var downloadOptions = {
                "url" : url,
                "saveAs" : false
            };
            chrome.downloads.download(downloadOptions,function(id){});
            
        }
    }
});









function createBlock(url){
    var div = document.createElement("div");
    $(div).attr({
        class:"block"
    });
    var img = document.createElement("img");
    $(img).attr({
        class:"image",
        src:url
    });
    var input = document.createElement("input");
    $(input).attr({
        type:"checkbox",
        id:"status"
    });
    div.appendChild(img);
    div.appendChild(input);
    return div
}