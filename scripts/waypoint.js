
$(document).ready(function() {
var waypoints = $('#second').waypoint({
  handler: function(direction) {
    // alert(this.element.id + ' hit')
  },
  offset: '25%'
})

var waypoint2 = $('.top').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $('.top').addClass('animated fadeIn');
    }
    else {
      $('.top').removeClass('animated fadeIn');
    }
  },
  offset: '40%'
})

  $('.bottom').css('opacity', 0);

var waypoint3 = $('.bottom').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $('.bottom').addClass('animated fadeInUp');
    }
    else {
      $('.bottom').removeClass('animated fadeInUp');
    }
  	// $(this).toggleClass($(this).data('animated'));
  },
  offset: '20%'
})


});