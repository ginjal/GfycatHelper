var arr = document.getElementsByTagName('a');
for(var i=0;i<arr.length;i++){
    var a = arr[i]
    var href = a.getAttribute('href');
    var gfycat = 'http://www.gfycat.com/fetch/'
    if(href && href.indexOf('.gif')>-1){
        a.setAttribute('href', gfycat+href);
    }
}
