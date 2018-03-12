$(document).ready(function () {



  $("#biography dt").click(function (e) {

    $("#biography dd").css("display", "none");

    if ( $(this).next().css("display") == "none" ) {

    $(this).next().css("display", "inline-block"); } else {

      $(this).next().css("display", "none");

    }

  });



});
