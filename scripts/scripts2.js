$(document).ready(function () {

    $("#submit").click( function () {

    var emailLog = $("#email").val();
    var passwordLog = $("#password").val();

    console.log( validateEmail(emailLog), passwordLog);

    if (emailLog == "jade.a.manrique@gmail.com") {
      if (passwordLog == "12345678") {
        console.log("Correct");
      } else {
        $("#error").css("display", "block", "visibility", "visible")
      }

    } else {
        $("#error").css("display", "block", "visibility", "visible")
      }

    });

  });


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
