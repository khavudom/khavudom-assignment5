import { navProducts, addClassMobileDevice } from "./mobileDevice.js";
import {
  barButton,
  rightBar,
  toggle,
  navigationItem,
  scrollTop,
  addActiveToAllProduct,
  displayActive,
  navigationButton,
  checkbox,
} from "./navigationbar.js";
import {
  singleProductContainer,
  viewAllProducts,
  overflowCheck,
  addClassName,
  singleProductList,
  singleProductButton,
  starRatingContainer,
  starElement,
  // viewAllProducts,
} from "./singleProduct.js";
import {
  allHeroPreview,
  displayProductHero,
  articleHeroSectionClick,
  shopInvoices,
  dShopButton,
  createRow,
  tbodyShop,
  tfootShop,
  priceProduct,
  tableClearAllButton,
  increaseDecreasNum,
  getDateFromTable,
  updataTableData,
  priceProductParent,
} from "./heroSection.js";

import {
  men,
  women,
  kid,
  kmen,
  kwomen,
  kkeepsake,
  arrayCombination,
  categories,
  arrayCombinationTo,
  sum,
  priceTotal,
  discountKid,
  discountMen,
  discountWomen,
  discountkMen,
  discountkWomen,
  discountkkeepsake,
  discountCategories,
  updateArr,
  copyArray,
  storeInitial,
} from "./data.js";
import { setPosition, navigationbar } from "./setPosition.js";
import {
  highlightProductContainer,
  highlightProductWrapper,
  highlightProductCarosel,
  displayHighlightProduct,
  highlightProductButton,
  displayProductMore,
  displayProductMoreNoInner,
  cartButton,
  viewProduct,
  // highlightXmarkButton,
  hiddenBackground,
  diplayDetailProduct,
  ratingStar,
  nightMode,
  buynowButton,
} from "./highlight.js";
import { formSubscription, disountFuc } from "./subscription.js";
export let discountRating1 = 1;
export let discountRating = 1;
let updateInitial = [];
let disCountCombination = [];
let star,
  AllStar = [];
//
formSubscription.addEventListener("submit", (e) => {
  if (disountFuc()) {
    discountRating = 0.7;
    discountRating1 = 0.7;
    localStorage.setItem("discountRating", discountRating);
    localStorage.setItem("discountRating1", discountRating1);
    if (discountRating == 0.7) {
      document.body.classList.add("discountActive");
    }
  }
});

discountRating = parseFloat(localStorage.getItem("discountRating"));
discountRating1 = parseFloat(localStorage.getItem("discountRating1"));
if (discountRating == 0.7) {
  document.body.classList.add("discountActive");
}
// PrevenDefault

// night mode
checkbox.addEventListener("change", nightMode);
const savedNightModeState = localStorage.getItem("nightMode");
if (savedNightModeState === "enabled") {
  checkbox.checked = true;
  document.body.classList.add("night-mode");
} else {
  document.body.classList.remove("night-mode");
}

//
// set Position
setPosition(singleProductContainer, navigationbar);

// hero section display fu
function updateArrLoop() {
  for (let i = 0; i < 6; i++) {
    updateArr(arrayCombination[i], discountCategories[i]);
  }
}

updateArrLoop();
copyArray(discountCategories, disCountCombination);

//
window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i <= allHeroPreview.length - 1; i++) {
    displayProductHero(allHeroPreview[i], discountCategories[i], categories[i]);
  }
  for (let j = 0; j < highlightProductCarosel.length; j++) {
    displayHighlightProduct(highlightProductCarosel[j], discountCategories[j]);
  }
});

allHeroPreview.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      toggle(shopInvoices, "display-none");
      document.body.style.overflow = "hidden";
      const attribueValue = e.currentTarget.children[1].attributes.number.value;

      disCountCombination.filter((item) => {
        if (item.id == attribueValue) {
          createRow(item);
        }
      });
      displayActive(cartButton, "display-none");
      getDateFromTable(updateInitial, storeInitial);
      updataTableData(updateInitial);

      priceProductParent.children[3].innerHTML = sum(updateInitial) + "$";
      cartButton.children[0].innerHTML = updateInitial.length;
    }
  });
});

dShopButton.addEventListener("click", () => {
  toggle(shopInvoices, "display-none");
  singleProductContainer.classList.add("display-none");
  document.body.style.overflow = "auto";
});

tbodyShop.addEventListener("click", (e) => {
  if (e.target.classList.contains("table-delete-button")) {
    e.target.parentElement.parentElement.remove();
    getDateFromTable(updateInitial, storeInitial);
    updataTableData(updateInitial);
    priceProductParent.children[3].innerHTML = sum(updateInitial) + "$";
    cartButton.children[0].innerHTML = updateInitial.length;
  }
  if (e.target.parentElement.classList.contains("table-delete-button")) {
    e.target.parentElement.parentElement.parentElement.remove();
    getDateFromTable(updateInitial, storeInitial);
    updataTableData(updateInitial);
    priceProductParent.children[3].innerHTML = sum(updateInitial) + "$";
    cartButton.children[0].innerHTML = updateInitial.length;
  }
});
tableClearAllButton.addEventListener("click", () => {
  tbodyShop.innerHTML = "";
  updateInitial = [];
  priceProductParent.children[3].innerHTML = 0 + "$";
  cartButton.children[0].innerHTML = updateInitial.length;
  toggle(cartButton, "display-none");
});

// highlight Product container

highlightProductCarosel.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("card-button") ||
      e.target.classList.contains("fa-cart-shopping")
    ) {
      disCountCombination.forEach((item) => {
        if (item.id == e.target.id) {
          createRow(item);
        }
      });
      displayActive(cartButton, "display-none");
      getDateFromTable(updateInitial, storeInitial);
      updataTableData(updateInitial);
      priceProductParent.children[3].innerHTML = sum(updateInitial) + "$";
      cartButton.children[0].innerHTML = updateInitial.length;
    }
  });
});

highlightProductButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    toggle(singleProductContainer, "display-none");
    displayProductMore(singleProductList, discountCategories[btn.id]);
    addActiveToAllProduct();
    document.body.style.overflowY = "hidden";
  });
});
navigationItem[3].addEventListener("click", () => {
  displayProductMore(singleProductList, disCountCombination);
});
singleProductButton[0].addEventListener("click", () => {
  displayProductMore(singleProductList, disCountCombination);
});
singleProductButton[1].addEventListener("click", () => {
  singleProductList.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    displayProductMoreNoInner(singleProductList, discountCategories[i]);
  }
});
singleProductButton[2].addEventListener("click", () => {
  singleProductList.innerHTML = "";
  for (let i = 3; i < 6; i++) {
    displayProductMoreNoInner(singleProductList, discountCategories[i]);
  }
});
cartButton.addEventListener("click", () => {
  toggle(shopInvoices, "display-none");
  document.body.style.overflowY = "hidden";
});
// All produts
singleProductList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("card-button") ||
    e.target.classList.contains("fa-cart-shopping")
  ) {
    disCountCombination.forEach((item) => {
      if (item.id == e.target.id) {
        createRow(item);
        displayActive(cartButton, "display-none");
        getDateFromTable(updateInitial, storeInitial);
        updataTableData(updateInitial);
        cartButton.children[0].innerHTML = updateInitial.length;
        priceProductParent.children[3].innerHTML = sum(updateInitial) + "$";
      }
    });
  }
});
singleProductList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("star-button") ||
    e.target.classList.contains("fa-star")
  ) {
    toggle(hiddenBackground, "display-none");
    const startcontainer = e.currentTarget.querySelectorAll(
      "aside.rating-star-container"
    );

    startcontainer.forEach((item) => {
      if (item.id == e.target.id) {
        star = item;
      }
    });
    starElement.forEach((str) => {
      str.addEventListener("click", () => {
        ratingStar(starElement, str.id, "orange");
        ratingStar(star.children, str.id, "orange");
      });
    });
    starRatingContainer.style.animation = "opacityAnimatingTo1 .2s forwards";
  }
});

//
highlightProductCarosel.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("view-product-button") ||
      e.target.classList.contains("fa-eye")
    ) {
      viewProduct.style.animation = "scrollToTop .3s forwards";
      diplayDetailProduct(viewAllProducts, disCountCombination, e.target.id);
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
      viewProduct.style.pointerEvents = "auto";
      toggle(hiddenBackground, "display-none");
    }
  });
});

viewProduct.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-circle-xmark")) {
    viewProduct.style.animation = "scrollTobottom .3s forwards";
    document.body.style.pointerEvents = "auto";
    if (!navigationItem[3].classList.contains("active")) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    toggle(hiddenBackground, "display-none");
  }
});
buynowButton.addEventListener("click", () => {
  alert("succeed");
});
singleProductList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("view-product-button") ||
    e.target.classList.contains("fa-eye")
  ) {
    viewProduct.style.animation = "scrollToTop .3s forwards";
    diplayDetailProduct(viewAllProducts, disCountCombination, e.target.id);
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
    viewProduct.style.pointerEvents = "auto";
    toggle(hiddenBackground, "display-none");
  }
});
highlightProductCarosel.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("star-button") ||
      e.target.classList.contains("fa-star")
    ) {
      starElement.forEach((star) => {
        star.style.color = "gray";
      });
      AllStar = document.querySelectorAll(".rating-star-container");
      for (let i = 0; i < AllStar.length; i++) {
        if (AllStar[i].id == e.target.id) {
          star = AllStar[i].children;
        }
      }
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
      starRatingContainer.style.pointerEvents = "auto";
      toggle(hiddenBackground, "display-none");
      starRatingContainer.style.animation = "opacityAnimatingTo1 .2s forwards";
    }
  });
});
starRatingContainer.children[0].addEventListener("click", () => {
  starRatingContainer.style.animation = "opacityAnimatingTo0 .2s forwards";
  document.body.style.pointerEvents = "auto";
  if (!navigationItem[3].classList.contains("active")) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
  ratingStar(starElement, 5, "gray");
  hiddenBackground.classList.add("display-none");
});
starElement.forEach((starEle) => {
  starEle.addEventListener("click", () => {
    if (!navigationItem[3].classList.contains("active")) {
      ratingStar(star, starEle.id, "orange");
      ratingStar(starElement, starEle.id, "orange");
    } else {
      return;
    }
  });
});
// buy now button work
singleProductList.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("buy-now-button")) {
    disCountCombination.forEach((item) => {
      if (item.id == e.target.id) {
        createRow(item);
      }
      displayActive(cartButton, "display-none");
      getDateFromTable(updateInitial, storeInitial);
      updataTableData(updateInitial);
      priceProductParent.children[3].innerHTML = sum(updateInitial) + "$";
      cartButton.children[0].innerHTML = updateInitial.length;
      toggle(singleProductContainer, "display-none");
      toggle(shopInvoices, "display-none");
    });
  }
});

//
// Mobile Device
navProducts.forEach((element) => {
  addClassMobileDevice(element, "nav-mobile");
});

// view all Product
viewAllProducts.addEventListener("click", () => {
  toggle(singleProductContainer, "display-none");
  overflowCheck(singleProductContainer, "hidden", "auto");
});

navigationItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("view-all-produts")) {
      addClassName(singleProductContainer, "display-none");
      overflowCheck(singleProductContainer, "hidden", "auto");
    }
  });
});

// Click Home button and Scroll to top
navigationItem[0].addEventListener("dblclick", () => {
  scrollTop.click();
});
