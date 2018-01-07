/*
//Request for latest progress trend graph and load
$.ajax({
 type: 'POST',
 dataType: 'json',
 url: ‘linktoprocessingscript.php’,
 data: variableGoesHere,
 success: function (results) {
 // do something
 }
 error: function (results) {
 // do something else
 }
});


$(document).ready(function(){
    $("a").click(function(e) {
        e.preventDefault();
        $("#someFrame").attr("src", $(this).attr("href"));
    })
});
*/


//Trend graph carousel
$('.main-carousel').flickity({
  // options

});
