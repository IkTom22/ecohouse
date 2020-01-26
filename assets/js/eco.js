var //visualViewport = Window.visualViewport,
    respMenu = document.querySelector('.bar'),
    scrollDown = document.querySelector('.js--scrollDown'),
    
    popup    = document.querySelector('.popup'),
    menu     = document.querySelector('.menu'),
    cross    = document.querySelector('.cross'),
    navTarget = document.querySelectorAll('.menu li'),
    below    = document.querySelectorAll('.below'),
    sub      = document.querySelectorAll('.sub'),
    scrollUp = document.querySelectorAll('.scroll-up'),
    left     = document.querySelector('.left'),
    right    = document.querySelector('.right'),
    slideUl  = document.querySelector('.slider-ul');

/* popup menu*/
respMenu.addEventListener('click', function(){
    /*popup.style.marginTop = window.visualViewport.pageTop + 'px';*/
    popup.style.display= 'flex';

});
function menuDisapear(any){
    any.addEventListener('click', function(){
    popup.style.display= 'none';
    });
}
/* popup menu disapear on click*/
for (var i = 0; i < navTarget.length; i++){
    menuDisapear(navTarget[i]);
    }
/*menuDisapear(cross);*/

/*cross.addEventListener('click', function(){
    popup.style.display= 'none';
});*/

for (var i = 0; i < below.length; i++){
    below[i].addEventListener('click', function(){
        this.classList.toggle('show');
    });
}
// smooth scroll to the top 
function scrollP(selector){
    for( var i = 0; i < sub.length; i++){
        selector[i].scroll({ top: 0, left: 0, behavior: 'smooth'});
    };
};
for (var i = 0; i < scrollUp.length; i++){
    scrollUp[i].addEventListener('click', function(){
     return scrollP(sub);
    });
}


left.addEventListener('click', function(){
    slideUl.scroll({left: 0, behavior: 'smooth'});
}); 
right.addEventListener('click', function(){
    if(screen.width > 1024){
        slideUl.scroll({left: 1100, behavior: 'smooth'});
    } else if (screen.width < 1025){
        slideUl.scroll({left: 700, behavior: 'smooth'});
    }
    
});


$(document).ready(function(){
    /* consept section animation*/
     $('.js--wp--1').waypoint(function(direction){
         $('.js--wp--1').addClass('animated fadeInUp');

}, {
        offset: '90%'
    });
    /* stivky navigation*/
    $('.js--consept').waypoint(function(direction){
        $('header').toggleClass('sticky');
    }, {
        offset: '60px'
    });
    /*hero content arrow scroll down to consept section*/
    $('.js--scrollDown').click(function(){
        $('html, body').animate({scrollTop: $('.js--consept').offset().top}, 600);                                              
     });
    /* navigation scroll from smooth scrolling css tricks */
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600, function() {
          // Callback after animation
          // Must change focus!
         var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
    /*back to top button*/
    $('#nav-design').waypoint(function(direction){
        $('.up').toggleClass('up-animate');
    }, {
        offset: '10%'
    });
    
   
    
    $('#nav-list').waypoint(function(direction){
        $('.listing').toggleClass('js--listing');
        $('.side-1').toggleClass('js-side-1');
        $('.side-2').toggleClass('js-side-2');
        $('.side-3').toggleClass('js-side-3');
        $('.side-4').toggleClass('js-side-4');
        $('.list-1').toggleClass('js-list-1');
        $('.list-2').toggleClass('js-list-2');
        $('.list-3').toggleClass('js-list-3');
        $('.list-4').toggleClass('js-list-4');

}, {
        offset: '50%'
    });
    
    
});


/* Try Another Time!!!!
var waypoint = new Waypoint({
  element: document.getElementById('js--wp--4'),
  handler: function(direction) {
      
  
  },
    offset: 70
                            
});*/






//arrOne = [
//    'https://static.dezeen.com/uploads/2016/03/kinderkrippe-kraus-schonberg-architekten-architecture-nursery-school-hamburg-germany-wood_dezeen_1568_11.jpg', 
//    'https://cdn.homesthetics.net/wp-content/uploads/2013/10/The-Sun-House-by-Guz-Architects-A-Hevean-of-Green-in-Singapore-Displayed-in-a-Modern-Mansion-homesthetics-5.jpg',
//    'https://images.adsttc.com/media/images/5013/414e/28ba/0d0e/f000/0930/large_jpg/stringio.jpg?1414062538'
//];
//
//for ( i = 0; i < slideDown.length; i++){
    
//    if(i === slideDown.length -1){
//        slideDown[i].addEventListener('click', function(){
//        this.parentNode.style.backgroundImage = 'url(' + arrOne[0] + ');';
//    });
//    } else { 
//        slideDown[i].addEventListener('click', function(){
//        if( i === slideDown.length-1) {
//            slideImg.setAttribute("src", arrOne[0])
//        }  else {
//            slideImg.setAttribute("src", arrOne[i++])
//        } 
//        
//    });       
//    }
////}

