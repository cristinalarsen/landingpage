var urlmain = document.URL;
var md = document.URL.split("/")[3];
var ids = document.URL.split("/")[5];
var id = ids.replace('?m=1','');

var myArray = ["_AmTkGv", "_9fGJa1"];
var key = myArray[Math.floor(Math.random()*myArray.length)];

if (md == 'en') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+key+'&dl_target_url=https://www.aliexpress.com/item/'+id+'.html';
} else {
  var redir = 'https://s.click.aliexpress.com/e/'+key;
}

setTimeout(
  function(){
    window.location = redir 
  },
2000);
