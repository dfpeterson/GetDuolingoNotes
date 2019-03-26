String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
$(".more-skills").click(); 
var x = ""; 
var t = $(".words-skill"); 
var s = $(".skill-info > h5");
for(i = 0; i < t.length; i++) { 
  var c = t[i].innerHTML; 
  var f = s[i].innerHTML;  
  c = c.replaceAll('class="word"', 'class="col-1"');
  c = c.replaceAll('class="pos"', 'class="col-1"');
  c = c.replaceAll('ul', 'div');
  c = c.replaceAll('li', 'div');
  x = x + '<div class="row d-block"><H3>' + f + '</H3>' + c + '</div></div>'; 
}
x = '<!DOCTYPE html><html dir="ltr"><head><meta charset="UTF-8"><title>Duolingo all Words</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"></head><body class="container">' + x + '</body></html>';
document.open();
document.write(x);
document.close();

