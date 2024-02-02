export const barButton = document.querySelector("i.fa-solid.fa-bars");
export const rightBar = document.querySelector(".right-bar");
export const navigationItem = [...rightBar.children];
export const navigationButton = navigationItem.filter((item) => {
  return item.tagName == "BUTTON";
});
export const checkbox = document.querySelector("input[type='checkbox']");

export const scrollTop = document.querySelector("a.scroll-top");

// console.log(navigationItem);
function active(element, classElement) {
  element.forEach((item) => {
    item.addEventListener("click", () => {
      navigationItem.forEach((item1) => {
        item1.classList.remove(classElement);
      });
      item.classList.add(classElement);
    });
  });
}
active(navigationButton, "active");

export function toggle(element, classElement) {
  element.classList.toggle(classElement);
}
barButton.addEventListener("click", () => {
  toggle(rightBar, "toggle-list");
});
export function addActiveToAllProduct() {
  navigationItem.forEach((item1) => {
    item1.classList.remove("active");
  });
  navigationItem[3].classList.add("active");
}
export function displayActive(element, ClassName) {
  element.classList.remove(ClassName);
}
