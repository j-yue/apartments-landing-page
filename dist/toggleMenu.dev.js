"use strict";

// toggle visibility of header nav and close button when visible (user is on mobile)
var body = document.body;
var menu = document.querySelector(".mobile-menu__hamburger");
var nav = document.querySelector(".header__nav");
var close = document.querySelector(".mobile-menu__close");
var header = document.querySelector(".header");

var show = function show(el, zIndex) {
  el.style.opacity = "1";
  el.style.zIndex = "".concat(zIndex);
};

var hide = function hide(el) {
  el.style.opacity = "0";
  el.style.zIndex = "-1";
};

var showNav = function showNav() {
  show(nav, 1);
  show(close, 2);
};

var hideNav = function hideNav() {
  hide(close);
  hide(nav);
};

menu.addEventListener("click", function () {
  return showNav();
});
close.addEventListener("click", function () {
  return hideNav();
});