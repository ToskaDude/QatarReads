$(document).ready(function(){
	$('.home-slider').slick({
    	dots: true,
    	arrows: false
  	});

	$('.home-partners-carousel').slick({
    	dots: false,
    	slidesToShow: 4,
  		slidesToScroll: 3,
  		arrows: true,
  		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        centerMode: true,

		      }
    		},
    		{
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,

		      }
    		},
    	]
  	});

  	$('.home-share-carousel').slick({
    	dots: false,
    	slidesToShow: 4,
  		slidesToScroll: 3,
  		arrows: true,
  		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        centerMode: true,

		      }
    		},
    		{
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: true,

		      }
    		},

    	]
  	});

  	
  	
});