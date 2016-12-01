$(document).ready(function () {
  var rand = Math.floor(Math.random() * 10);

  switch (rand) {
    case 0:
      $(".fancy-home-page").html("the FANCY home page thx");
      break;
    case 1:
      $(".fancy-home-page").html("The top floor, please!");
      break;
    case 2:
      $(".fancy-home-page").html("Daniel Starner");
      break;
    case 3:
      $(".fancy-home-page").html("According to all known laws of...");
      break;

  }
});
