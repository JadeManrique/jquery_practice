$(document).ready(function() {


  var box = $("#box");
  var testBox = $("#testBox");

  $("#text").click( function () {

    var currentColor = $("#header").css("color");

    if (currentColor == "rgb(0, 0, 0)") {

      $("#header").css("color", "gold");

    } else {

      $("#header").css("color", "rgb(0, 0, 0)");

    }

  });

// random test material

  $( "#target" ).keypress(function() {

    $( this ).hide( "slow ");

  });

  $( "a" ).click(function( event ) {

    event.preventDefault();

    $( this ).hide( "slow" );

    });

  $("#colorChange").click(function() {

    box.show( "slow" );

  });

  $("#testBox").scroll(function() {

    testBox.css("color", "red");

  });




});

function randomNumber() {

  var number = Math.random() * 255;
  number = Math.floor(number);

  return number;

}
