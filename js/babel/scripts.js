"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _jquery["default"])(document).ready(function () {
  var link = (0, _jquery["default"])('.gallery li:first img').attr('src');
  var title = (0, _jquery["default"])('.gallery li:first img').attr('alt'); //default of large food image on gallery page

  (0, _jquery["default"])('#view').attr('src', link);
  (0, _jquery["default"])('#title').html(title); //click food icons on gallery page to see large view

  (0, _jquery["default"])('.gallery li img').click(function () {
    var $this = (0, _jquery["default"])(this);
    var mylink = $this.attr('src');
    var myalt = $this.attr('alt');
    (0, _jquery["default"])('#view').attr('src', mylink);
    (0, _jquery["default"])('#title').html(myalt);
  }); //responsive icon click to expand menu

  (0, _jquery["default"])('.responsive').click(function () {
    (0, _jquery["default"])('nav').slideToggle();
  }); //if screen is less than or equal to 600 show alt titles above images on gallery page

  var view = (0, _jquery["default"])(window).width();

  if (view <= 600) {
    (0, _jquery["default"])('.gallery img').each(function () {
      var alt = (0, _jquery["default"])(this).attr('alt');
      (0, _jquery["default"])(this).before('<h2 id="title">' + alt + '</h2>');
    });
    (0, _jquery["default"])('#menu-pics img').each(function (i, val) {
      (0, _jquery["default"])(this).before('<p>' + (0, _jquery["default"])(val).attr('alt') + '</p>');
    });
    (0, _jquery["default"])('.menu li').eq(14).html('Ch Teri & Veg Temp <b>$9.48</b>');
    (0, _jquery["default"])('.menu li').eq(15).html('Beef Teri & Veg Temp <b>$10.59</b>');
    (0, _jquery["default"])('.menu li').eq(16).html('Pork Teri & Veg Temp <b>$9.99</b>');
    (0, _jquery["default"])('#phone').html('<a href="tel:2063236303">206-323-6303</a>');
    (0, _jquery["default"])('#copy-text').hide();
    (0, _jquery["default"])('#designer').html('<a href="http://davidtproductions.com" target="_blank">Designed by DavidTProductions.com</a>');
  }
});
//# sourceMappingURL=scripts.js.map
