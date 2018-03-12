$(document).ready(function () {



  $("#biography dt").click(function (e) {

    var isItHidden = false;

    if ( $("#biography dd").css("display") == "none" ) {

    $("#biography dd").css("display", "block"); } else {

      $("#biography dd").css("display", "none");

    }

  });



});
