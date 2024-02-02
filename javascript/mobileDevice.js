export const navProducts = document.querySelectorAll(".nav-products");

function isMobileDevice() {
  return (
    navigator.maxTouchPoints > 0 &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
}

export function addClassMobileDevice(Element, className) {
  if (isMobileDevice()) {
    Element.classList.add(className);
  } else return;
}
