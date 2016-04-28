var revealPoint = function() {
  navbar.style.opacity = 0.9;
  navbar.style.transform = "scaleX(1) translateY(0)";
  navbar.style.msTransform = "scaleX(1) translateY(0)";
  navbar.style.WebkitTransform = "scaleX(1) translateY(0)";

}
var center = document.getElementsByClassName('diamond');

$(document).ready(function() {
$( center ).click(function( event ) {
    event.preventDefault();
    $( this ).hide( "slow" );

});

});
