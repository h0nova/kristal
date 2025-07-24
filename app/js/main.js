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
