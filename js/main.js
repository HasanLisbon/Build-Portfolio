$(document).ready(function(){
    $(".title").addClass("animated infinite swing");
    var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('.header_right');

      menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        drawer.classList.remove('open');
      });
    
});
