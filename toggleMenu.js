// toggle visibility of header nav and close button when visible (user is on mobile)
const body = document.body;
const menu = document.querySelector(".mobile-menu__hamburger");
const nav = document.querySelector(".header__nav");
const close = document.querySelector(".mobile-menu__close");
const header = document.querySelector(".header");

const show = (el, zIndex) => {
  el.style.opacity = "1";
  el.style.zIndex = `${zIndex}`;
};

const hide = el => {
  el.style.opacity = "0";
  el.style.zIndex = "-1";
};

const showNav = () => {
  show(nav, 1);
  show(close, 2);
};

const hideNav = () => {
  hide(close);
  hide(nav);
};

menu.addEventListener("click", () => showNav());
close.addEventListener("click", () => hideNav());
