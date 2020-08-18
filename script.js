// init tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// back to top button function
$(window).scroll(function () {
  if ($(this).scrollTop() > 75) {
    $("#btotop").css("opacity", 1);
  } else {
    $("#btotop").css("opacity", 0);
  }
});

// hamburger
$(".hamburger").on("click", function (e) {
  $(".hamburger").toggleClass("is-active");
});

// navbar hamburger close
$("#navbarSupportedContent > ul > li > a").click(function () {
  $("#navbarSupportedContent").toggleClass("show");
  $("#top > nav > button").toggleClass("is-active");
});
