$(document).ready(function(event) {

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
    var animal = prompt("Type one: Panda, Turtle, Cat").val;

    if (animal === Panda) {
      $(".panda").show();
    } else if (animal === Turtle) {
      $(".turtle").show();
    } else {
      $(".cat").show();
    }

    event.preventDefalt();
  });
});
