var headerNav =document.getElementById('header-nav')
var menuBar =document.getElementById('menu-bar')
var menuBarClose =document.getElementById('menu-bar__close')
menuBar.onclick = function(){
  headerNav.style.display="block"
  menuBar.style.display="none"
  menuBarClose.style.display="block"
}
menuBarClose.onclick= function(){
  headerNav.style.display="none"
  menuBar.style.display="block"
  menuBarClose.style.display="none"
}
//animation
var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,         
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
     
     
    },
    scrollContainer: null 
  }
);
wow.init();