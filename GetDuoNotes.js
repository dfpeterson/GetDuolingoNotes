String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
var x = ""; 
var t = $(".tips-notes"); 
for(i = 0; i < t.length; i++) { 
  var e = t[i]; 
  e.click(); 
  var p = $(".tips-notes-panel"); 
  var c = p[p.length - 1].innerHTML;
  c = c.replaceAll('<h3>', '</div><h3 class="p-2 mt-5 mb-2 bg-info text-white">');
  c = c.replaceAll('</h3>', '</h3><div>');
  c = c.replaceAll('<h4>', '</div><h4 class="p-2 mt-5 mb-2 bg-info text-white">');
  c = c.replaceAll('</h4>', '</h4><div>');
  c = c.replaceAll('<table>', '<table class="table">');
  x = x + '<div class="row d-block">' + c + '</div></div>'; 
}
x = x.replaceAll('<div class="row d-block"></div><h3', '<div class="row d-block"><h3');
x = x.replaceAll('<div class="row d-block"></div><h4', '<div class="row d-block"><h4');
x = '<!DOCTYPE html><html dir="ltr"><head><meta charset="UTF-8"><title>Duolingo Tips and Notes</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"></head><body class="container">' + x + '</body></html>'
document.open();
document.write(x);
document.close();
