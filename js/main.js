$(document).ready(function(){
  $('.main__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          autoplay: true,
          dots: true
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); // main slider

  $('.aside__license--slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: ".aside__license--arrow",
    prevArrow: '<button class="aside__license--arrow-prev"><img src="/img/arrow-left.png" alt="" /></button>',
    nextArrow: '<button class="aside__license--arrow-next"><img src="/img/arrow-right.png" alt="" /></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          autoplay: false,
          dots: false
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); // aside licence slider

   $('.gallery__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: ".gallery__arrow",
    prevArrow: '<button class="gallery__arrow-prev"><img src="/img/arrow-left.png" alt="" /></button>',
    nextArrow: '<button class="gallery__arrow-next"><img src="/img/arrow-right.png" alt="" /></button>',
    responsive: [
      // {
      //   breakpoint: 1600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     autoplay: false,
      //     arrows: true,
      //     dots: false
      //   }
      // },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      },
       {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
       {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); // gallery slider

  $(".aside__special").on("click", function() {
    $(".aside__special--list").slideToggle(500);
  });  // aside specialization submenu

  // $(".main__item").mouseover(function() {
  //   $(".main__item--submenu").toggle(300);
  // });

   $(".menu__toggle").click(function() {
   $(".main__menu--wrapper ul").toggleClass("main__menu-flex");
    $('.menu__toggle').toggleClass('menu__toggle-active');
  });

    if($(window).width() > 577 ){
          console.log("true");
          $(".main__item-1").hover(function() {
            $(".main__item--submenu-1").fadeToggle(50);
          });
          $(".main__item-2").hover(function() {
            $(".main__item--submenu-2").fadeToggle(50);
          });
          $(".main__item-3").hover(function() {
            $(".main__item--submenu-3").fadeToggle(50);
          });
          $(".main__item-4").hover(function() {
            $(".main__item--submenu-4").fadeToggle(50);
          });
          $(".main__item-5").hover(function() {
            $(".main__item--submenu-5").fadeToggle(50);
          });
          $(".main__item-6").hover(function() {
            $(".main__item--submenu-6").fadeToggle(50);
          });
      }
      else {
        console.log("false");
          $(".main__item-1").hover(function() {
            $(".main__item--submenu-1").slideToggle(250);
          });
          $(".main__item-2").hover(function() {
            $(".main__item--submenu-2").slideToggle(250);
          });
          $(".main__item-3").hover(function() {
            $(".main__item--submenu-3").slideToggle(250);
          });
          $(".main__item-4").hover(function() {
            $(".main__item--submenu-4").slideToggle(250);
          });
          $(".main__item-5").hover(function() {
            $(".main__item--submenu-5").slideToggle(250);
          });
          $(".main__item-6").hover(function() {
            $(".main__item--submenu-6").slideToggle(250);
          });
      }
});


function fakultet(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

