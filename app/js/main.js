var openCatalogSlider = false;

$(document).on("click", ".catalog__cart-btn", function (event) {
  event.stopPropagation();
  event.preventDefault();
});

$(".slider").slick({
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "120px",
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: "20px",
      },
    },
  ],
});

$(".catalog__btn").on("click", function () {
  $(".catalog__btn").toggleClass("catalog__btn--active");
});

$(".catalog__item, .catalog-slider__btn").on("click", function () {
  if (!openCatalogSlider) {
    var imagesCount = $(this).data("count");

    for (var i = 1; i < imagesCount + 1; i++) {
      $(".catalog-slider__list").append(
        `<li class="catalog-slider__item">
       <img class="catalog-slider__img" src="images/slider/item_01/image_0${i}.png" alt="">
     </li>`
      );
    }

    $(".catalog-slider__list").slick({
      slidesToShow: 1,
      arrows: true,
      dots: true,
    });

    openCatalogSlider = true;
  } else {
    $(".catalog-slider__list").empty();
    $(".catalog-slider__list").removeClass("slick-initialized slick-slider");

    openCatalogSlider = false;
  }

  $(".catalog-slider").toggleClass("catalog-slider--active");
});
