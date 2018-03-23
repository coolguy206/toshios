<?php
$name = "| Toshio's Teriyaki | Seattle, WA";

$japan = 'Japanese Restaurant ';

$page = '';

if(basename($_SERVER['PHP_SELF']) =='index.php') {
$page = 'Japanese Food ' . $name;
} elseif (basename($_SERVER['PHP_SELF']) =='about.php') {
$page = 'About ' . $name;

} elseif (basename($_SERVER['PHP_SELF']) =='restaurant.php') {
$page = $japan . $name;

} elseif (basename($_SERVER['PHP_SELF']) =='reviews.php') {
$page =  $japan . 'Reviews ' . $name;

} elseif (basename($_SERVER['PHP_SELF']) =='menu.php') {
$page = 'Japanese Food Menu ' . $name;

} elseif (basename($_SERVER['PHP_SELF']) =='gallery.php') {
$page = 'Gallery ' . $name;

} elseif (basename($_SERVER['PHP_SELF']) =='services.php') {
$page = $japan . 'Services ' . $name;

} elseif (basename($_SERVER['PHP_SELF']) =='location.php') {
$page = $japan . 'Location ' . $name;

}


?>