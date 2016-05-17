$(document).ready(function() {

  $("body").fadeIn();

  var $p = $("p");

  $p.on("mouseenter", function() {
    $(this).css("background-color", "yellow");
  });

  $p.on("mouseleave", function() {
    $(this).removeAttr("style");
  });

  $("h2").on("click", function() {
    $(this).animate({
      "opacity": "0.25",
      "margin-left": "20px"
    }, 400, "swing", function() {
      $(".speech").animate({
        "opacity": "0.5"
      });
    });
  });

  $("#switcher-default").on("click", function() {
    $("body").css("font-size", "62.5%");
  });

  $("#switcher-large").on("click", function() {
    $("body").css("font-size", "80%");
  });

  $("#switcher-small").on("click", function() {
    $("body").css("font-size", "50%");
  });

});
