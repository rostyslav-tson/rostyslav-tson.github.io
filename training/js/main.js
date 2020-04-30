$(document).ready(function(){
    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        draggable: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
            }
        ]
        
    });
  });

  $(document).ready(function(){
    $('.reviews_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        draggable: false,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
            }
        ]
    });
  });

  $(document).ready(function(){
    // Фикмированная шапка при скролле
    $("#header").removeClass("default");
    $(window).scroll(function(){
      if ($(this).scrollTop() > 20) {
        $("#header").addClass("default").fadeIn('fast');
      } else {
        $("#header").removeClass("default").fadeIn('fast');
      };
    });
  });

  $("#one").click(function(){
    $("#script").toggleClass("hide_text");
  });
  