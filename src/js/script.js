$(document).ready(function() {
  //mobile menu
  $('.menu__icon').on('click', function() {
    $(this).closest('.menu').toggleClass('menu_state_open');
  });
  
  $('.menu__links-item').on('click', function() {
    $(this).closest('.menu').removeClass('menu_state_open');
  });

  $(".menu__links").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  //slick slider
  $('.regular').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    arrows:false,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// $(document).on('ready', function() {
//   $('.regular').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });
// });

