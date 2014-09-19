// Gfycat Helper - Chrome Extention
// Copyright (C) 2014  Stefan Vosloo

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or any later version.

var arr = document.getElementsByTagName('a');
for(var i=0;i<arr.length;i++){
    var a = arr[i]
    var href = a.getAttribute('href');
    var gfycat = 'http://www.gfycat.com/fetch/'
    if(href && href.indexOf('.gif')>-1){
        a.setAttribute('href', gfycat+href);
    }
}
