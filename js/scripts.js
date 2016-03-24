$(document).ready(function() {

  $("button.pan").click(function() {
    $(".panda").show();
    $(".panda").siblings().hide();

  });

  $("button.turt").click(function() {
    $(".turtle").show();
    $(".turtle").siblings().hide();
  });

  $("button.wild").click(function() {
    $(".cat").show();
    $(".cat").siblings().hide();
  });

  $("button.all").click(function() {
    var animal = prompt("Type one: Panda, Turtle, Cat");

    if (animal === "panda") {
      $(".panda").show();
    } else if (animal === "turtle") {
      $(".turtle").show();
    } else {
      $(".cat").show();
    }
  });
});
