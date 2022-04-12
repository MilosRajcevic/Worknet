"use strict";
import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const activeClassName = "active";
const mobMenu = document.querySelector(".js-mob-menu");
const navList = document.querySelector(".js-nav-list");
const navItem = document.querySelectorAll(".nav__item");
const overlay = document.querySelector(".overlay");
const btnScroll = document.querySelector(".js-btn-scroll");

mobMenu.addEventListener("click", function () {
  [navList, mobMenu, overlay].forEach((el) =>
    el.classList.toggle(activeClassName)
  );
});

// Navigation
const toggleSubMenuClick = function () {
  navItem.forEach((item) => {
    const toggleSubMenu = function (e) {
      const navItemParent = e.target.closest(".nav__item");
      const subMenuChild = navItemParent.querySelector(".nav__sub-list");

      if (!subMenuChild) return;

      [subMenuChild, navItemParent].forEach((el) =>
        el.classList.toggle(activeClassName)
      );
    };

    item.addEventListener("click", function (e) {
      toggleSubMenu(e);
    });
  });
};
toggleSubMenuClick();
