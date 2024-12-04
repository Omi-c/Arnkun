const specialCarousel = document.querySelector("#special #productCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(specialCarousel, {
    interval: false,
  });

  var carouselWidth = $("#special .carousel-inner")[0].scrollWidth;
  var cardWidth = $("#special .carousel-item").width();

  var scrollPosition = 0;

  $("#special .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition = scrollPosition + cardWidth;
      $("#special .carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });

  $("#special .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $("#special .carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(specialCarousel).addClass("slide");
}


