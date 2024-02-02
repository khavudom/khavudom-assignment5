export const navigationbar = document.querySelector(".navigation-bar");
export function setPosition(element1, element2) {
  element1.style.left = element2.clientLeft + "px";
  element1.style.top = element2.clientHeight + "px";
}
