var openCatalogSlider = false;

$(document).on("click", ".catalog__cart-btn", function (event) {
  event.stopPropagation();
  event.preventDefault();
});

$(".slider").slick({
  slidesToShow: 1,
  arrows: true,
  dots: true,
});

$(".catalog__btn").on("click", function () {
  $(".catalog__btn").toggleClass("catalog__btn--active");
});

$(".catalog__item, .catalog-slider__btn").on("click", function () {
  if (!openCatalogSlider) {
    var imagesCount = $(this).data("count");
    var itemId = $(this).attr("id");
    itemId = itemId.split("-")[1];

    console.log(itemId);

    for (var i = 1; i < imagesCount + 1; i++) {
      $(".catalog-slider__list").append(
        `<li class="catalog-slider__item">
       <img class="catalog-slider__img" src="images/catalog/item_${itemId}/image_${i}.png" alt="">
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

$(".catalog__options, .filter__btn").on("click", function () {
  $(".filter").toggleClass("filter--active");
});

$(".header__dropdown, .header__close").on("click", function () {
  $(".menu__list").toggleClass("menu__list--active");
});
