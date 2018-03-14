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


// accordion

$("#biography dt").click( function (e) {

  $("#biography dd").css("display", "none");

  if ( $(this).next().css("display") == "none" ) {

    $(this).next().css("display", "block");

  } else {

    $(this).next().css("display", "none");

  }

});

/* html use <dt> <dd> */


//password loginPrompt

$(document).ready(function () {

    $("#submit").click( function () {

    var emailLog = $("#email").val();
    var passwordLog = $("#password").val();

    console.log( validateEmail(emailLog), passwordLog);

    if (emailLog == "jade.a.manrique@gmail.com") {
      if (passwordLog == "12345678") {
        console.log("Correct");
      } else {
        $("#error").css({"visibility": "visible", "display": "block"})
      }

    } else {
        $("#error").css({"visibility": "visible", "display": "block"})
      }

    });

  });


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

//html part
/*

<div class="loginPrompt">

  <form action="#" method="post">

    <input type="text" id="email" placeholder="example@email.com" />

    <input type="password" id="password" placeholder="Password" />

    <button type="button" id="submit"> ENTER </button>

    <div id="error">

      <p> No account found </p>

    </div>

  </form>

</div>

*/

// end password loginPrompt
