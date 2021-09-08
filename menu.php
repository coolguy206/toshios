<?php include('header.php'); ?>
<div class="box460">
<h1 id="menu-title">Toshio's Teriyaki Menu</h1>
<h2 id="price">Prices Subject to Change</h2>
<div class="menu">
<div class="teriyaki">
<h2>Teriyaki</h2>
<p>Served with rice and salad</p>
<ul></ul>
</div>

<div class="combo-teriyaki">
<h2>Combination Teriyaki</h2>
<p>Served with rice and salad</p>
<ul></ul>
</div>

<div class="tempura">
<h2>Tempura &amp; Combinations</h2>
<p>Served with rice and salad</p>
<ul></ul>
</div>

<div class="donburi">
<h2>Donburi</h2>
<ul></ul>
</div>

<div class="noodles">
<h2>Noodles</h2>
<ul></ul>
</div>

<div class="sides">
<h2>Side Dishes</h2>
<ul></ul>
</div>

<div class="specials">
<h2>House Special</h2>
<ul></ul>
</div>

<div class="extras">
<h2>Extras</h2>
<ul></ul>
</div>

<div class="beverages">
<h2>Beverages</h2>
<p>Diet Coke, Coke, Sprite, Minute Maid Lemonade, Barq's Root Beer</p>
<ul></ul>
</div>
</div>
</div>

<div class="box460" id="menu-pics">
<img src="images/chicken-vegetable-tempura.jpg" alt="Chicken Teriyaki & Vegetable Tempura" title="Chicken Teriyaki & Vegetable Tempura">
<img src="images/chicken-shrimp-combo.jpg" alt="Chicken Teriyaki & Shrimp Tempura" title="Chicken Teriyaki & Shrimp Tempura">
<img src="images/short-ribs.jpg" alt="Short Ribs Teriyaki" title="Short Ribs Teriyaki">
<img src="images/side-gyoza.jpg" alt="Gyoza Sides" title="Gyoza Sides">
<img src="images/side-shrimp.jpg" alt="Shrimp Tempura Sides" title="Shrimp Tempura Sides">
<img src="images/egg-roll.jpg" alt="Egg Roll Sides" title="Egg Roll Sides">
<img src="images/miso.jpg" alt="Miso Soup Sides" title="Miso Soup Sides">

</div><!--.box460-->

<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
<script>
$(document).ready(function(){
  var teriyaki = [
  {num:1, name: "Chicken Teriyaki", price: "$10.59"},
  {num:2, name: "Beef Teriyaki", price: "$13.59"},
  {num:3, name: "Pork Teriyaki", price: "$13.29"},
  {num:4, name: "Short Ribs", price: "$15.49"},
  {num:5, name: "Salmon Teriyaki", price: "$13.59"},
  {num:6, name: "Tonkatsu", price: "$13.29"},
  {num:7, name: "Chicken Katsu", price: "$13.59"},
  ];

  var comboTeriyaki = [
  {num:8, name: "Chicken Teri &amp; Gyoza", price: "$12.99"},
  {num:9, name: "Chicken &amp; Beef", price: "$14.99"},
  {num:10, name: "Chicken &amp; Pork", price: "$14.09"},
  {num:11, name: "Beef &amp; Pork", price: "$15.79"},
  {num:12, name: "Chicken &amp; Short Ribs", price: "$17.79"},
  ];

  var tempura = [
  {num:13, name: "Shrimp Tempura", price: "$12.99"},
  {num:14, name: "Vegetable Tempura", price: "$10.59"},
  {num:15, name: "Chicken Teriyaki &amp; Vegetable Tempura", price: "$12.99"},
  {num:16, name: "Beef Teriyaki &amp; Vegetable Tempura", price: "$15.79"},
  {num:17, name: "Pork Teriyaki &amp; Vegetable Tempura", price: "$15.49"},
  ];

  var donburi = [
  {num:18, name: "Chicken Donburi", price: "$10.69"},
  {num:19, name: "Beef Donburi", price: "$13.59"},
  {num:20, name: "Katsu Donburi", price: "$13.29"},
  ];

  var noodles = [
  {num:21, name: "Chicken Yakisoba", price: "$12.99"},
  {num:22, name: "Beef Yakisoba", price: "$13.59"},
  {num:23, name: "Pork Yakisoba", price: "$13.59"},
  {num:24, name: "Vegetable Yakisoba", price: "$12.09"},
  {num:25, name: "Shrimp Yakisoba", price: "$13.79"},
  {num:26, name: "Udon", price: "$9.79"},
  {num:27, name: "Chicken Udon", price: "$10.69"},
  {num:28, name: "Beef Udon", price: "$13.29"},
  {num:29, name: "Tempura Udon", price: "$13.39"},
  {num:30, name: "Gyoza Dinner (8 pieces)", price: "$10.59"},
  ];

  var sides = [
  {num:31, name: "Gyoza (8 pieces)", price: "$4.68"},
  {num:32, name: "Shrimp Tempura(3)", price: "$4.75"},
  {num:33, name: "Egg Roll(2)", price: "$3.25"},
  {num:34, name: "Sauteed Vegetable", price: "$8.25"},
  {num:35, name: "Vegetable Tempura (A)", price: "$5.95"},
  {num:35, name: "Vege Tempura Combo (B)", price: "$7.95"},
  {num:36, name: "Miso Soup", price: "$1.99"},
  {num:37, name: "Kim Chee", price: "$2.99"},
  {num:38, name: "Steamed Rice", price: "$0.79"},
  {num:39, name: "Side Salad small", price: "$4.35"},
  {num:39, name: "Side Salad large", price: "$5.35"},
  ];

  var specials = [
  {num:0, name: "Chicken Curry", price: "$10.59"},
  {num:0, name: "Beef Curry", price: "$12.99"},
  ];

  var extras = [
  {num:0, name: "Teriyaki Sauce", price: "$0.50"},
  {num:0, name: "Dressing", price: "$0.50"},
  {num:0, name: "Hot Sauce", price: "$0.25"},
  ];

  var beverages = [
  {num:0, name: "Large", price: "$2.29"},
  {num:0, name: "Medium", price: "$1.99"},
  {num:0, name: "Small", price: "$1.69"},
  ];

  var loop = function(arr, elem){
    var html = '';
    $.each(arr, function(i,val){
      var li = '<li><span>' + val.num + '.</span> ' + val.name + ' <b>'+ val.price+ '</b></li>';
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
</script>

<?php include('footer.php'); ?>
