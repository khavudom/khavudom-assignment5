export const singleProductContainer = document.querySelector(
  ".display-single-product"
);
export const singleProductList = document.querySelector(
  "ul.single-product-list"
);

export const viewAllProducts = document.querySelector(
  "button.view-all-produts"
);
export const singleProductButton = document.querySelectorAll(
  "main.display-single-product nav.navigation-bar2 div.btn-wrapper button"
);
export const starRatingContainer = document.querySelector("div.rating-star");
export const starElement = starRatingContainer.querySelectorAll(".fa-star");
export function overflowCheck(element, overflowType1, overflowType2) {
  if (!element.classList.contains("display-none"))
    document.body.style.overflowY = overflowType1;
  else document.body.style.overflowY = overflowType2;
}

export function scrollAnimaton(element, animation, duration, behavi) {
  element.style.animation = animation + " " + duration + " " + behavi;
}

export function addClassName(element, classElement) {
  element.classList.add(classElement);
}
