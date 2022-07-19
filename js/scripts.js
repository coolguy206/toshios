import $ from "jquery";

$(document).ready(function() {
  var link = $('.gallery li:first img').attr('src');
  var title = $('.gallery li:first img').attr('alt');

  //default of large food image on gallery page
  $('#view').attr('src', link);
  $('#title').html(title);


  //click food icons on gallery page to see large view
  $('.gallery li img').click(function() {
    var $this = $(this);
    var mylink = $this.attr('src');
    var myalt = $this.attr('alt');
    $('#view').attr('src', mylink);
    $('#title').html(myalt);
  });

  //responsive icon click to expand menu
  $('.responsive').click(function() {
    $('nav').slideToggle();

  });

  //if screen is less than or equal to 600 show alt titles above images on gallery page
  var view = $(window).width();
  if (view <= 600) {
    $('.gallery img').each(function() {
      var alt = $(this).attr('alt');
      $(this).before('<h2 id="title">' + alt + '</h2>');
    });

    $('#menu-pics img').each(function(i, val) {
      $(this).before('<p>' + $(val).attr('alt') + '</p>');
    });

    $('.menu li').eq(14).html('Ch Teri & Veg Temp <b>$9.48</b>');
    $('.menu li').eq(15).html('Beef Teri & Veg Temp <b>$10.59</b>');
    $('.menu li').eq(16).html('Pork Teri & Veg Temp <b>$9.99</b>');

    $('#phone').html('<a href="tel:2063236303">206-323-6303</a>');
    $('#copy-text').hide();
    $('#designer').html('<a href="http://davidtproductions.com" target="_blank">Designed by DavidTProductions.com</a>');
  }
});