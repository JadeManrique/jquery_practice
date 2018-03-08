$(document).ready(function() {


  var box = $("#box");
  var testBox = $("#testBox");
  var colorString = "rgb(";

  $("#text").click( function () {

    colorString = "rgb(";

    colorString = colorString + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

    $("h1").css("color", colorString);

  });



// random test material

  var loopingColor = setInterval(function () {

    colorString = "rgb(";

    colorString = colorString + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

  }, 25);

  var loopingColor = setInterval(function () {

    colorString = "rgb(";

    colorString = colorString + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

      $("#body").css("background-color", colorString);

  }, 25);

  $( "#target" ).keypress(function() {

    $( this ).hide( "slow ");

  });

  $( "a" ).click(function( event ) {

    event.preventDefault();

    $( this ).hide( "slow" );

    });

  $("#colorChange").click(function() {

    clearInterval(loopingColor);

    colorString = "rgb(";

    colorString = colorString + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

    $("#box").css("background-color", colorString);


  });

  $("#testBox").scroll(function() {

    $( "div" ).clone().appendTo( document.body );
    testBox.css("color", "red").fadeOut("slow");

  });




});

function randomNumber() {

  var number = Math.random() * 255;
  number = Math.floor(number);

  return number;

}

for (var i = 0; i < 12; i++) {
  console.log("hello");
}
