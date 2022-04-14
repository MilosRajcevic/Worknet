import { activeClassName, deactiveClassName } from "./config";

const galleryContentTeam = document.querySelector(".js-team");
const galleryContentDirectors = document.querySelector(".js-directors");
const html = document.querySelector(".js");

export function createGalleryCards(dataLeaders, dataDirectors) {
  if ([galleryContentDirectors, galleryContentTeam].some((el) => !el)) return;

  galleryContentTeam.innerHTML = "";
  galleryContentDirectors.innerHTML = "";

  dataLeaders.forEach((person) => {
    const htmlLeaders = `
          <div class="gallery-team__card card">
            <img
              src="${person.img}"
              alt="${person.name} picture"
              class="gallery-team__img card__img"
            />
            <div class="gallery-team__description">
              <span class="gallery-team__name card__name"
                >${person.name}</span
              >
              <span class="gallery-team__title card__title"
                >${person.title}</span
              >
              <p class="gallery-team__text">
                Previous roles include Principal at Oxford Sciences Innovation
                (an Oxford focused deep tech venture capital firm) and as a
                Consultant for McKinsey & Company, where his work included
                supporting the Government of Sierra Leone in the wake of the
                Ebola health crisis.
              </p>
              <p class="gallery-team__text">
                Connor received a degree in Medical Sciences from the
                University of Oxford.
              </p>
              <a href="tel:+381666" class="gallery-team__link">
                <i class="gallery-team__icon icon-phone"></i
              ></a>

              <button type="button" class="gallery-team__btn js-btn-x">
                <i
                  class="gallery-team__icon gallery-team__icon--close icon-clear"
                ></i>
              </button>
            </div>
          </div>
    `;
    galleryContentTeam.insertAdjacentHTML("beforeend", htmlLeaders);
  });

  dataDirectors.forEach((person) => {
    const htmlDirectors = `
          <div class="gallery-team__card card">
            <img
              src="${person.img}"
              alt="${person.name} picture"
              class="gallery-team__img card__img"
            />
            <div class="gallery-team__description">
              <span class="gallery-team__name card__name"
                >${person.name}</span
              >
              <span class="gallery-team__title card__title"
                >${person.title}</span
              >
              <p class="gallery-team__text">
                Previous roles include Principal at Oxford Sciences Innovation
                (an Oxford focused deep tech venture capital firm) and as a
                Consultant for McKinsey & Company, where his work included
                supporting the Government of Sierra Leone in the wake of the
                Ebola health crisis.
              </p>
              <p class="gallery-team__text">
                Connor received a degree in Medical Sciences from the
                University of Oxford.
              </p>
              <a href="tel:+381666" class="gallery-team__link">
                <i class="gallery-team__icon icon-phone"></i
              ></a>

              <button type="button" class="gallery-team__btn js-btn-x">
                <i
                  class="gallery-team__icon gallery-team__icon--close icon-clear"
                ></i>
              </button>
            </div>
          </div>
    `;
    galleryContentDirectors.insertAdjacentHTML("beforeend", htmlDirectors);
  });
}

export function popup() {
  const galleryCard = document.querySelectorAll(".gallery-team__card");

  galleryCard.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      const dataCard = e.target.closest(".gallery-team__card");
      const dataContainer = e.target.closest(".gallery-team");
      const dataOverlay = dataContainer.querySelector(".js-popup-overlay");

      [dataCard, dataOverlay, dataContainer].forEach((el) =>
        el.classList.toggle(activeClassName)
      );

      html.classList.toggle("no-scroll");
    });
  });
}
