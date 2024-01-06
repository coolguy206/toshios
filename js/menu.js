import $ from "jquery";

$(document).ready(function() {
  var teriyaki = [{
      num: 1,
      name: "Chicken Teriyaki",
      price: "$12.59"
    },
    {
      num: 2,
      name: "Beef Teriyaki",
      price: "$16.49"
    },
    {
      num: 3,
      name: "Pork Teriyaki",
      price: "$16.19"
    },
    {
      num: 4,
      name: "Short Ribs",
      price: "$18.79"
    },
    {
      num: 5,
      name: "Salmon Teriyaki",
      price: "$16.29"
    },
    {
      num: 6,
      name: "Tonkatsu",
      price: "$16.19"
    },
    {
      num: 7,
      name: "Chicken Katsu",
      price: "$16.39"
    },
  ];

  var comboTeriyaki = [{
      num: 8,
      name: "Chicken Teri &amp; Gyoza",
      price: "$15.59"
    },
    {
      num: 9,
      name: "Chicken &amp; Beef",
      price: "$17.39"
    },
    {
      num: 10,
      name: "Chicken &amp; Pork",
      price: "$17.19"
    },
    {
      num: 11,
      name: "Beef &amp; Pork",
      price: "$18.79"
    },
    {
      num: 12,
      name: "Chicken &amp; Short Ribs",
      price: "$20.49"
    },
  ];

  var tempura = [{
      num: 13,
      name: "Shrimp Tempura",
      price: "$15.59"
    },
    {
      num: 14,
      name: "Vegetable Tempura",
      price: "$13.19"
    },
    {
      num: 15,
      name: "Chicken Teriyaki &amp; Vegetable Tempura",
      price: "$15.79"
    },
    {
      num: 16,
      name: "Beef Teriyaki &amp; Vegetable Tempura",
      price: "$19.19"
    },
    {
      num: 17,
      name: "Pork Teriyaki &amp; Vegetable Tempura",
      price: "$18.99"
    },
  ];

  var donburi = [{
      num: 18,
      name: "Chicken Donburi",
      price: "$13.19"
    },
    {
      num: 19,
      name: "Beef Donburi",
      price: "$16.59"
    },
    {
      num: 20,
      name: "Katsu Donburi",
      price: "$15.99"
    },
  ];

  var noodles = [{
      num: 21,
      name: "Chicken Yakisoba",
      price: "$16.19"
    },
    {
      num: 22,
      name: "Beef Yakisoba",
      price: "$17.39"
    },
    {
      num: 23,
      name: "Pork Yakisoba",
      price: "$16.99"
    },
    {
      num: 24,
      name: "Vegetable Yakisoba",
      price: "$15.59"
    },
    {
      num: 25,
      name: "Shrimp Yakisoba",
      price: "$17.39"
    },
    {
      num: 26,
      name: "Udon",
      price: "$12.59"
    },
    {
      num: 27,
      name: "Chicken Udon",
      price: "$13.19"
    },
    {
      num: 28,
      name: "Beef Udon",
      price: "$16.19"
    },
    {
      num: 29,
      name: "Tempura Udon",
      price: "$16.19"
    },
    {
      num: 30,
      name: "Gyoza Dinner (8 pieces)",
      price: "$13.19"
    },
  ];

  var sides = [{
      num: 31,
      name: "Gyoza (8 pieces)",
      price: "$4.99"
    },
    {
      num: 32,
      name: "Shrimp Tempura(3)",
      price: "$5.39"
    },
    {
      num: 33,
      name: "Egg Roll(2)",
      price: "$3.79"
    },
    {
      num: 34,
      name: "Sauteed Vegetable",
      price: "$12.99"
    },
    {
      num: 35,
      name: "Vegetable Tempura (A)",
      price: "$10.99"
    },
    {
      num: 35,
      name: "Vege Tempura Combo (B)",
      price: "$12.99"
    },
    {
      num: 36,
      name: "Miso Soup",
      price: "$2.19"
    },
    {
      num: 37,
      name: "Kim Chee",
      price: "$3.49"
    },
    {
      num: 38,
      name: "Steamed Rice",
      price: "$0.99"
    },
    {
      num: 39,
      name: "Side Salad small",
      price: "$4.99"
    },
    {
      num: 39,
      name: "Side Salad large",
      price: "$9.99"
    },
  ];

  var specials = [{
      num: 0,
      name: "Chicken Curry",
      price: "$13.19"
    },
    {
      num: 0,
      name: "Beef Curry",
      price: "$15.99"
    },
  ];

  var extras = [{
      num: 0,
      name: "Teriyaki Sauce",
      price: "$0.50"
    },
    {
      num: 0,
      name: "Dressing",
      price: "$0.50"
    },
    {
      num: 0,
      name: "Hot Sauce",
      price: "$0.25"
    },
  ];

  var beverages = [{
      num: 0,
      name: "Large",
      price: "$2.29"
    },
    {
      num: 0,
      name: "Medium",
      price: "$1.99"
    },
    {
      num: 0,
      name: "Small",
      price: "$1.69"
    },
  ];

  var loop = function(arr, elem) {
    var html = '';
    $.each(arr, function(i, val) {
      var li = '<li><span>' + val.num + '.</span> ' + val.name + ' <b>' + val.price + '</b></li>';
      html = html + li;
    });
    $(elem).append(html);
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