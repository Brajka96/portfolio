const _QS = selector => document.querySelector(selector);
const _QSAll = selector => document.querySelectorAll(selector);

const menu = _QS(".menu");
const menuBtn = _QS(".menu-btn");
const menuNav = _QS(".menu-nav");
const menuBranding = _QS(".menu-branding");
const navItems = _QSAll(".nav-item");

let showMenu = false;

function show() {
  menuBtn.classList.add("close");
  menu.classList.add("show");
  menuNav.classList.add("show");
  menuBranding.classList.add("show");
  navItems.forEach(item => item.classList.add("show"));

  showMenu = true;
}

function hide() {
  menuBtn.classList.remove("close");
  menu.classList.remove("show");
  menuNav.classList.remove("show");
  menuBranding.classList.remove("show");
  navItems.forEach(item => item.classList.remove("show"));

  showMenu = false;
}

function toggleMenu() {
  !showMenu ? show() : hide();
}

menuBtn.addEventListener("click", toggleMenu);
