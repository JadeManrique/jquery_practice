$(document).ready(function() {



  $("#text").click( function () {

    var currentColor = $("#header").css("color");

    if (currentColor == "rgb(0, 0, 0)") {

      $("#header").css("color", "gold");

    } else {

      $("#header").css("color", "rgb(0, 0, 0)");

    }

  });



});
