const PLACES_FLEX_GAP = 60;
const DESKTOP_VIEWPORT_WIDTH = 1170;

const fixPlacesFlexGap = (gapSize) => {
  const placesList = document.querySelectorAll('.places-list__item');
  const placesLastChild = document.querySelector('.places-list__item:last-child')
  const isLastRowTwo = placesList.length % 3 === 2;
  const viewPortWidth = document.documentElement.clientWidth;

  if (isLastRowTwo && viewPortWidth >= DESKTOP_VIEWPORT_WIDTH) {
    placesLastChild.style.marginLeft = `${PLACES_FLEX_GAP}px`;
  } else {
    placesLastChild.style.marginLeft = '';
  }
}

fixPlacesFlexGap(PLACES_FLEX_GAP);

/*
// menu
let navMain = document.querySelector('.top-bar');
let navToggle = document.querySelector('.top-bar__toggle');

navMain.classList.remove('top-bar--nojs');
navMain.classList.add('top-bar--closed');
navMain.classList.remove('top-bar--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('top-bar--closed')) {
    navMain.classList.remove('top-bar--closed');
    navMain.classList.add('top-bar--opened');
  } else {
    navMain.classList.add('top-bar--closed');
    navMain.classList.remove('top-bar--opened');
  }
});

// modal
let toCartButtons = document.querySelectorAll(".featured__button, .catalog-item__button, .catalog-video__button");
let cartPopup = document.querySelector(".modal-cart");
let cartClose = cartPopup.querySelector(".modal-cart__button");
let sizeSelection = cartPopup.querySelector(".size__button")

for (let i = 0; i < toCartButtons.length; i++) {
    toCartButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal--active");
        sizeSelection.focus();
    });
}

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal--active");
});
*/
