$(document).ready(function () {
  $(".slide .p0").fadeIn(500);
  $(".menu .p0").addClass("active");

  $(".menu a").click(function () {
    var active = $(this).attr("class");
    $(".menu a").removeClass("active");

    $(this).addClass("active");

    $(".slide .item").fadeOut();
    $(".slide .item." + active).fadeIn(500);
  });

  $(".box .cd-single-point").hover(function () {
    $(this).parent().parent().parent().addClass("active");
  });

  $(".box .cd-single-point").mouseleave(function () {
    $(this).parent().parent().parent().removeClass("active");
  });
});

// AOS.init({
//   disable: "mobile",
//   once: false,
// });
