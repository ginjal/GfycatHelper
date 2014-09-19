// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: '1.js'
  });
});

function contextMenuOnClick(info, tab){
    var linkUrl = info["linkUrl"];
    var gfycatUrl = "http://www.gfycat.com/fetch/" + linkUrl;
    chrome.tabs.create({"url":gfycatUrl});
}

var id = chrome.contextMenus.create({"title": "Fetch Gfycat", "contexts":["link"],
"onclick": contextMenuOnClick});
