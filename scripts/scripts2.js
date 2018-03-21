$(document).ready( function () {

  var box = $("#box");
  var testBox = $("#testBox");
  var colorString = "rgb(";

  function randomNumber() {

    var number = Math.random() * 255;
    number = Math.floor(number);

    return number;

  }

  $("#text").click( function () {

    colorString = "rgb(";

    colorString = colorString + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

    $("h1").css("color", colorString);

  });

  var loopingColor = setInterval(function () {

    colorString = "rgb(";

    colorString = colorString + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

      $("#body").css("background-color", colorString);

  }, 25);

  var loopingColor = setInterval(function () {

    colorString = "rgb(";

    colorString = colorString + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

      $("h1").css("color", colorString);

  }, 25);


  $("#submit").click( function () {

    var emailText = $("#email").val();

    var isEmail = validateEmail(emailText);

    if (isEmail == true) {

      var message = "This is a valid Email.";

      $("#error").html(message);

    } else {
      var errorMessage = "This is not a valid Email.";

      $("#error").html(errorMessage);

    }

  });



});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

/* var emailText = $("#email").val();

var isEmail = validateEmail(emailText);

if (isEmail == true) {

  var message = "This is a valid Email.";

  $("#error").html(message);

} else {
  var errorMessage = "This is not a valid Email.";

  $("#error").html(errorMessage);

}

*/
