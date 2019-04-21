$(document).ready(function(){

  $('.hospital-carousel').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      centerMode: true,
      responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 900,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
        },
        {
            breakpoint: 640,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
        }
    ]
    });
  	
  	
});


$(window).resize(function() {
  $('.hospital-carousel').slick('resize');
})

$(window).on('orientationchange', function() {
  $('.hospital-carousel').slick('resize');
});
