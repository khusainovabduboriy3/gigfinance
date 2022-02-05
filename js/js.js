$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
        $("nav").addClass("active");
        $("header").addClass("active");
        $(".toup").addClass("active");
    }
    else{
        $("nav").removeClass("active");
        $("header").removeClass("active");
        $(".toup").removeClass("active");
    }
  });


  $('.menu').click(function(){
  $('.for-flex').toggleClass('active');
  $('.line').toggleClass('active');
  $('.menu2').toggleClass('opened');
  });
  $('.menu2').click(function(){
    $('.menu').toggleClass('opened');
    });



  var typed = new Typed('.element', {
    strings: $(".element").attr('data-elements').split(','),
    typeSpeed: 80,
    onStop: (_, self) => {
      clearInterval(self.timeout)
     },
  });


