
// (function($){
//   $(function() {
//     $('.menu__icon').on('click', function() {
//       $(this).closest('.menu')
//         .toggleClass('menu_state_open');
//     });
    
//     $('.menu__links-item').on('click', function() {
//       // do something

//       $(this).closest('.menu')
//         .removeClass('menu_state_open');
//     });
//   });
// })(jQuery);

$(document).ready(function() {
  $('.menu__icon').on('click', function() {
    $(this).closest('.menu').toggleClass('menu_state_open');
  });
  
  $('.menu__links-item').on('click', function() {
    $(this).closest('.menu').removeClass('menu_state_open');
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

