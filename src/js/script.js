"use strict";
import accordion from "./accordion";
const activeClassName = "active";
const mobMenu = document.querySelector(".js-mob-menu");
const navList = document.querySelector(".js-nav-list");
const navItem = document.querySelectorAll(".nav__item");
const overlay = document.querySelector(".overlay");
const btnScroll = document.querySelector(".js-btn-scroll");
const html = document.querySelector(".js");

mobMenu.addEventListener("click", function () {
  [navList, mobMenu, overlay].forEach((el) =>
    el.classList.toggle(activeClassName)
  );
  html.classList.toggle("no-scroll");
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

const swiper = new Swiper(".swiper", {
  watchSlidesProgress: true,

  breakpoints: {
    1100: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },

    1: { slidesPerView: "auto", spaceBetween: 10 },
  },

  navigation: {
    nextEl: ".js-btn-left",
    prevEl: ".js-btn-right",
  },
});

accordion();
