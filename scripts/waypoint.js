
$(document).ready(function() {
// box and inside text below header fade out left
var waypoint4 = $('.center').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $('.center').addClass('animated fadeOutLeftBig');
      }
      //  remove else to allow class to stay on page
      else {
        $('.center').removeClass('animated fadeOutLeftBig');
      }
    },
    offset: '18%'
  })
  var waypoint4 = $('.diamond').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $('.diamond').addClass('animated fadeOutLeftBig');
      }
      //  remove else to allow class to stay on page
      else {
        $('.diamond').removeClass('animated fadeOutLeftBig');
      }
    },
    offset: '20%'
})

// first block image fadeIn
var waypoint2 = $('.top').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $('.top').addClass('animated flip');
    }
    else {
      $('.top').removeClass('animated flip');
    }
  },
  offset: '40%'
})
// second block image fadeInUp and text inside
  $('.bottom').css('opacity', 0);

var waypoint3 = $('.bottom').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $('.bottom').addClass('animated fadeInUp');
    }
    //  remove else to allow class to stay on page
    // else {
    //   $('.bottom').removeClass('animated fadeInUp');
    // }
  },
  offset: '25%'
})

$('.bottomText').css('opacity', 0);
var waypoint4 = $('.bottomText').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $('.bottomText').addClass('animated fadeIn');
    }
    //  remove else to allow class to stay on page
    // else {
    //   $('.bottom').removeClass('animated fadeInUp');
    // }
  },
  offset: '48%'
})

});
