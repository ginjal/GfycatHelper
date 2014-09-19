// Gfycat Helper - Chrome Extention
// Copyright (C) 2014  Stefan Vosloo

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or any later version.

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
