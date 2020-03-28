var sPath = window.location.href;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
var cnt = 0
sPage = /^sub.*.html$/.exec(sPage);
if(sPage != null){
    document.write('<p id="test" onclick="myFunction()">눌러라 임마 0</p>');
    
}
else{
    alert(sPath);
}

function myFunction(){
    cnt+=1;
    document.getElementById("test").outerHTML = '<p id="test" onclick="myFunction()">눌러라 임마 ' + cnt.toString()+'</p>';
}