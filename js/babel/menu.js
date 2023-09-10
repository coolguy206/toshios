"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _jquery["default"])(document).ready(function () {
  var teriyaki = [{
    num: 1,
    name: "Chicken Teriyaki",
    price: "$11.99"
  }, {
    num: 2,
    name: "Beef Teriyaki",
    price: "$15.69"
  }, {
    num: 3,
    name: "Pork Teriyaki",
    price: "$15.39"
  }, {
    num: 4,
    name: "Short Ribs",
    price: "$17.99"
  }, {
    num: 5,
    name: "Salmon Teriyaki",
    price: "$15.69"
  }, {
    num: 6,
    name: "Tonkatsu",
    price: "$15.39"
  }, {
    num: 7,
    name: "Chicken Katsu",
    price: "$15.69"
  }];
  var comboTeriyaki = [{
    num: 8,
    name: "Chicken Teri &amp; Gyoza",
    price: "$14.99"
  }, {
    num: 9,
    name: "Chicken &amp; Beef",
    price: "$16.79"
  }, {
    num: 10,
    name: "Chicken &amp; Pork",
    price: "$16.39"
  }, {
    num: 11,
    name: "Beef &amp; Pork",
    price: "$17.99"
  }, {
    num: 12,
    name: "Chicken &amp; Short Ribs",
    price: "$19.59"
  }];
  var tempura = [{
    num: 13,
    name: "Shrimp Tempura",
    price: "$14.99"
  }, {
    num: 14,
    name: "Vegetable Tempura",
    price: "$12.39"
  }, {
    num: 15,
    name: "Chicken Teriyaki &amp; Vegetable Tempura",
    price: "$15.79"
  }, {
    num: 16,
    name: "Beef Teriyaki &amp; Vegetable Tempura",
    price: "$18.39"
  }, {
    num: 17,
    name: "Pork Teriyaki &amp; Vegetable Tempura",
    price: "$17.99"
  }];
  var donburi = [{
    num: 18,
    name: "Chicken Donburi",
    price: "$12.39"
  }, {
    num: 19,
    name: "Beef Donburi",
    price: "$15.99"
  }, {
    num: 20,
    name: "Katsu Donburi",
    price: "$15.59"
  }];
  var noodles = [{
    num: 21,
    name: "Chicken Yakisoba",
    price: "$15.59"
  }, {
    num: 22,
    name: "Beef Yakisoba",
    price: "$16.49"
  }, {
    num: 23,
    name: "Pork Yakisoba",
    price: "$16.29"
  }, {
    num: 24,
    name: "Vegetable Yakisoba",
    price: "$14.39"
  }, {
    num: 25,
    name: "Shrimp Yakisoba",
    price: "$16.79"
  }, {
    num: 26,
    name: "Udon",
    price: "$11.49"
  }, {
    num: 27,
    name: "Chicken Udon",
    price: "$12.39"
  }, {
    num: 28,
    name: "Beef Udon",
    price: "$15.39"
  }, {
    num: 29,
    name: "Tempura Udon",
    price: "$15.39"
  }, {
    num: 30,
    name: "Gyoza Dinner (8 pieces)",
    price: "$12.39"
  }];
  var sides = [{
    num: 31,
    name: "Gyoza (8 pieces)",
    price: "$4.95"
  }, {
    num: 32,
    name: "Shrimp Tempura(3)",
    price: "$5.39"
  }, {
    num: 33,
    name: "Egg Roll(2)",
    price: "$3.79"
  }, {
    num: 34,
    name: "Sauteed Vegetable",
    price: "$10.99"
  }, {
    num: 35,
    name: "Vegetable Tempura (A)",
    price: "$9.99"
  }, {
    num: 35,
    name: "Vege Tempura Combo (B)",
    price: "$11.99"
  }, {
    num: 36,
    name: "Miso Soup",
    price: "$2.19"
  }, {
    num: 37,
    name: "Kim Chee",
    price: "$3.49"
  }, {
    num: 38,
    name: "Steamed Rice",
    price: "$0.99"
  }, {
    num: 39,
    name: "Side Salad small",
    price: "$4.99"
  }, {
    num: 39,
    name: "Side Salad large",
    price: "$9.99"
  }];
  var specials = [{
    num: 0,
    name: "Chicken Curry",
    price: "$12.39"
  }, {
    num: 0,
    name: "Beef Curry",
    price: "$15.39"
  }];
  var extras = [{
    num: 0,
    name: "Teriyaki Sauce",
    price: "$0.50"
  }, {
    num: 0,
    name: "Dressing",
    price: "$0.50"
  }, {
    num: 0,
    name: "Hot Sauce",
    price: "$0.25"
  }];
  var beverages = [{
    num: 0,
    name: "Large",
    price: "$2.29"
  }, {
    num: 0,
    name: "Medium",
    price: "$1.99"
  }, {
    num: 0,
    name: "Small",
    price: "$1.69"
  }];

  var loop = function loop(arr, elem) {
    var html = '';

    _jquery["default"].each(arr, function (i, val) {
      var li = '<li><span>' + val.num + '.</span> ' + val.name + ' <b>' + val.price + '</b></li>';
      html = html + li;
    });

    (0, _jquery["default"])(elem).append(html);
  };

  loop(teriyaki, '.teriyaki ul');
  loop(comboTeriyaki, '.combo-teriyaki ul');
  loop(tempura, '.tempura ul');
  loop(donburi, '.donburi ul');
  loop(noodles, '.noodles ul');
  loop(sides, '.sides ul');
  loop(specials, '.specials ul');
  loop(extras, '.extras ul');
  loop(beverages, '.beverages ul');
});
//# sourceMappingURL=menu.js.map
