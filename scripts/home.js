var revealPoint = function() {
  navbar.style.opacity = 0.9;
  navbar.style.transform = "scaleX(1) translateY(0)";
  navbar.style.msTransform = "scaleX(1) translateY(0)";
  navbar.style.WebkitTransform = "scaleX(1) translateY(0)";

}

var center = document.getElementsByClassName('diamond');
var dText = document.getElementsByClassName('d3');
var dHead = document.getElementsByClassName('d2');
$(document).ready(function() {
$( center ).click(function( event ) {
    $( dText ).toggle('slow');
});

//cursor: pointer
// $(document).ready(function() {
// $( center ).click(function( event ) {
//     ß$( this ).hide('slow');
    // display: none && visibilty: none
    // different *z-index
// });
// keep full size background after click.

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

});
