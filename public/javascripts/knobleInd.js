/**
 * Created by yeoman generator-makrina 0.4.1 on 2/12/2016.
 */
// new WOW().init();

$(document).ready(function () {
  // Loader
  // hide scroll and show on window.load
  var loader = $('#loader');
  if (loader.length && loader.css('display') != 'none') $('body').css({overflow: 'hidden'});
});

$(window).load(function () {
  // Loader
  // hide loader and show scrollbars (hidden in document.ready)
  $('#loader, #loader-container').fadeOut('slow');
  $('body').css({'overflow': 'visible'});
});
