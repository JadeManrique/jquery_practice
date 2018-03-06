$(document).ready(function() {

  $( "a" ).click(function( event ) {

    event.preventDefault();

    $( this ).hide( "slow" );

    });



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


});
