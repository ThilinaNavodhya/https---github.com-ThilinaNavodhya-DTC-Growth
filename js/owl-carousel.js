$(document).ready(function () {
  $('.nowshowing-owl').owlCarousel({
    loop: true,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    center: true,
    items: 3,
    responsive: {
      320: {
        items: 4,
        margin: 25,
        center: false,
      },
      700: {
        items: 4,
       
        
      },
      1000: {
        items: 5,
        

        
      }
    }
  })
});





$(document).ready(function ($) {
	$(".owl-carousel1").owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
    autoplay: true,
		nav: false,
		items: 1
	});
	var owl = $(".owl-carousel1");
	owl.owlCarousel();
	$(".next-btn").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".prev-btn").click(function () {
		owl.trigger("prev.owl.carousel");
	});
	
	});
;
