$(document).ready(function () {
  InitModal();
  InitBurgers();
  InitSideNavigation();
  InitOwlCarousel();
});

function InitModal(){
  $('.modal__close').click(function(){
    $('.modal').removeClass('active');
  });
}

function InitBurgers() {
  $("#mobile-burger").click(function () {
    $("#mobile-burger").toggleClass('close')
    $(".header__bottom").toggleClass("open");

    let body = $("body");
    if (body.attr("style") === "overflow: hidden;") body.removeAttr("style");
    else $("body").css("overflow", "hidden");
  });
}

function InitSideNavigation() {
  const toggleSideNav = () => $(".side-nav").toggleClass("open");
  const closeSideNav = () => $(".side-nav").removeClass("open");
  const openSideNav = () => $(".side-nav").addClass("open");

  $(".side-nav__inner").mouseenter(openSideNav);
  $(".side-nav__inner").mouseleave(closeSideNav);

  $("#category").click(function (e) {
    e.preventDefault();
    toggleSideNav();
  });

  $("#burger-close__catalog").click(closeSideNav);
}

function InitOwlCarousel() {
  $(".slider-sect__carousel").owlCarousel({
    //loop:true,
    margin: 90,
    nav: true,
    dots: true,
    navText: ["<img src='img/l-arrow.png'>", "<img src='img/r-arrow.png'>"],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
     /* 768: {
        items: 2,
      },*/
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
}
