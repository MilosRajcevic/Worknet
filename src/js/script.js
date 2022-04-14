"use strict";
import accordion from "./controllerAccordion";
import { toggleHamburgerMenu, toggleSubMenuClick } from "./controllerMenu";
import { createGalleryCards, popup } from "./peopleView";
import data from "../../data.json";

const dataLeaders = Object.values(data.team);
const dataDirectors = Object.values(data.directors);

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

createGalleryCards(dataLeaders, dataDirectors);
accordion();
toggleHamburgerMenu();
toggleSubMenuClick();
popup();
