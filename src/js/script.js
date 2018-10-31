$(document).ready(function() {
  //mobile menu
  $('.menu__icon').on('click', function() {
    $(this).closest('.menu').toggleClass('menu_state_open');
  });
  
  $('.menu__links-item').on('click', function() {
    $(this).closest('.menu').removeClass('menu_state_open');
  });
//scroll for main menu
  $(".menu__links").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
//scroll for footer links
  $(".footer-links").on("click","a", function (event) {
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

  // change text for service block

  var serviceText;
  $.get("text.json", function(data){
    serviceText = data;
  });

  $(".service-block").on("click", function (event) {
    event.preventDefault();
    var click = event.target;
    
    if ($(click).attr('atr') == 'design') {
      $('.dynamic-text').html(serviceText.design);
    }
    if ($(click).attr('atr') == 'mobile_dev') {
      $('.dynamic-text').html(serviceText.mobile_dev);
    }
    if ($(click).attr('atr') == 'web_dev') {
      $('.dynamic-text').html(serviceText.web_dev);
    }
    if ($(click).attr('atr') == 'testing') {
      $('.dynamic-text').html(serviceText.testing);
    }
    if ($(click).attr('atr') == 'server') {
      $('.dynamic-text').html(serviceText.server);
    }
    if ($(click).attr('atr') == 'copywriting') {
      $('.dynamic-text').html(serviceText.copywriting);
    }
  });

  // init google maps
  // function initMap() {
  //   var coordinates = {lat: 48.458917, lng: 35.051833},
    
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: coordinates,
  //     zoom: 4
  //   });
  // };
  // initMap();

  //about us - slide show 
var imgs = ["./img/about-us-img1.png","./img/about-us-img1.png","./img/about-us-img1.png","./img/about-us-img1.png"];
var n=0;
var chgImg = setInterval(function() {
  $('#slide_show').fadeOut(1500, function() {
    $(this).css("background-image", "url(" + imgs[n] + ")").fadeIn(1500)
  });
  n++;
  if (n>=imgs.length) n=0;
}, 6000);

});

