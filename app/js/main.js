$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
    });
  });
$(document).ready(function(){
    $('.aside-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });
  });
window.onload = function(){
  var btn = document.querySelector('.mob-btn');
  var menu = document.querySelector('.drop-list');
  var searchBtn = document.querySelector('.carts-logo3');
  var logo = document.querySelector('.logo');
  var mainSearchMob = document.querySelector('.main-search-mob');
  btn.addEventListener('click', change);
        function change(){
  menu.classList.toggle('hidden');
        }
  searchBtn.addEventListener('click', noLogo);
        function noLogo(){
  logo.classList.toggle('hidden2');
  mainSearchMob.classList.toggle('hidden2');
        }
}