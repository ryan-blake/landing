
$(document).ready(function() {
// box and inside text below header fade out left
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
// var waypoint2 = $('#image-box-top').waypoint({
//   handler: function(direction) {
//     if (direction === 'down') {
//       $('#image-box-top').addClass('animated bounce');
//     }
//     else {
//       $('#image-box-top').removeClass('animated bounce');
//     }
//   },
//   offset: '40%'
// })

//  columns fade in image-box-top
$('span').css('opacity', 0);
var waypoint3 = $('#text-span').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $('span').addClass('animated fadeInUp');
    }
    else {
      $('span').removeClass('animated fadeInUp');
    }
  },
  offset: '70%'
})


// text in second block.
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
  offset: '45%'
})

});
