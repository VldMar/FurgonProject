$(document).ready(function () {
  InitModal();
  InitBurgers();
  InitSideNavigation();
  InitOwlCarousel();
  InitGallerySlider();
  InitLightBox();
  InitSlick();
});

function InitModal() {
  $(".modal__close").click(function () {
    $(".modal").removeClass("active");
  });
}

function InitBurgers() {
  $("#mobile-burger").click(function () {
    let body = $("body");
    if (body.attr("style") === "overflow: hidden;") body.removeAttr("style");
    else $("body").css("overflow", "hidden");

    $("#mobile-burger").toggleClass("close");
    $(".header__bottom").toggleClass("open");
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

function InitGallerySlider() {
  let inner = $(".thumbnails__inner");
  let thumbItems = $(".thumbnails__inner .item");
  let mainItems = $(".gallery__main .item");
  let activeThumbItem = thumbItems[0];
  let activeMainItem = mainItems[0];
  //let lightBox = $('.gallery-main-lightbox').simpleLightbox(); 

  const setItemActive = (item) => {
    // следующий элемент делаем активным
    $(activeThumbItem).removeClass('active');
    activeThumbItem = item;
    $(activeThumbItem).addClass('active');

    let index = thumbItems.index(item);

    $(activeMainItem).removeClass('active');
    activeMainItem = mainItems[index];
    $(activeMainItem).addClass('active');
  };


  $('.thumbnails__inner .item').on('click',function(){
    setItemActive($(this));
  });
}

function InitSlick(){
  let isMobile = $(window).innerWidth() < 577;
  let isVertical = isMobile ? false : true;

  let slickOptions = {
    vertical: isVertical,
    verticalSwiping: isVertical,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable:true,
    dots: true,
    infinite: false,
    speed: 200,
    centerMode:true,
    focusOnSelect: true,
    centerPadding: 0
  };

  let slider = $('.thumbnails__inner');
  slider.slick(slickOptions);

  // костыль для скрола мышкой
  slider.on('wheel', (function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));
}

function InitLightBox(){
  let lightBoxItems =  $('.gallery__main .item');
  if(lightBoxItems.length == 0)
    return;
  $(lightBoxItems).simpleLightbox();
}
