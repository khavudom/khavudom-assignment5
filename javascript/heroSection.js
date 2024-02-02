export const allHeroPreview = document.querySelectorAll(
  "section.slider-container article"
);
export const shopInvoices = document.querySelector(
  "div.card-product-container"
);
export const tbodyShop = document.querySelector(
  "div.card-product-container article table tbody"
);
export const tfootShop = document.querySelector(
  "div.card-product-container article table tfoot"
);
export const priceProductParent = document.querySelector(
  "div.card-product-container article table tfoot tr"
);
export const priceProduct = priceProductParent.querySelector("td:nth-child(4)");
export const dShopButton = document.querySelector("#d-shop-close-button");
import { discountRating1 } from "./index.js";
export function displayProductHero(diplayElement, arr, arr2) {
  const newArr = [...arr];
  const radomIndex = Math.floor(Math.random() * newArr.length);
  const { discountPrice, id, imgSrc, name, price } = newArr[radomIndex];

  diplayElement.innerHTML = `<img src="${imgSrc}" alt="${id}" />
      <div class="slide-show position-absolute first-child" number="${id}">
        <h2>${arr2}</h2>
        <p>${name}</p>
      </div>
      <div class="slide-show highlight position-absolute">
        <h2>${arr2}</h2>
        <p>${name}</p>
        <button
          class="font-size-1o7rem btn-padding2 background-color-none border1 border-orange color color-orange hover-orange text-capital"
        >
          Purchase Now!
        </button>
      </div>`;
}
export function articleHeroSectionClick(e) {
  console.dir(e);
}
export const tableClearAllButton = document.querySelector(
  "table tfoot tr td:last-child button"
);

export function createRow({ disPrice, id, imgSrc, name, price }, index) {
  const row = document.createElement("tr");
  row.id = Date.now();
  const newName = name.slice(0, 30);

  row.innerHTML = `
  <td>${newName}...</td>
  <td>
    <img src="${imgSrc}" alt="${id}" />
  </td>
  <td>
    <select>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
    </select>
  </td>
  <td><span>${disPrice}</span>$</td>
 
  <td>
    <button
      class="color-white btn-padding2 font-size-1rem background-color-green hover-green raduis-20px table-delete-button"
    >
      <p class="delete-button1">Delete</p>
      <i class="fa-solid fa-trash table-fa"></i>
    </button>
  </td>`;
  tbodyShop.appendChild(row);
}
export function increaseDecreasNum(even) {
  if (even.target.classList.contains("fa-circle-plus")) {
    even.target.parentElement.parentElement.children[1].value++;
  }
  if (even.target.classList.contains("fa-circle-minus")) {
    even.target.parentElement.parentElement.children[1].value--;
    if (even.target.parentElement.parentElement.children[1].value < 0) {
      even.target.parentElement.parentElement.children[1].value = 0;
    }
  }
}

export function getDateFromTable(arr, arr2) {
  arr.length = 0;
  for (let i = 0; i < tbodyShop.children.length; i++) {
    let priceA = 0;

    const newItem = {
      id: tbodyShop.children[i].children[1].children[0].alt,
      imgSrc: tbodyShop.children[i].children[1].children[0].src,
      name: tbodyShop.children[i].children[0].innerHTML,
      price: Math.round(parseFloat(priceA) / discountRating1),
      disPrice: parseFloat(
        tbodyShop.children[i].children[3].children[0].innerHTML
      ),
    };
    arr.push(newItem);
  }
}

export function updataTableData(arr) {
  for (let i = 0; i < arr.length; i++) {
    const { id, imgSrc, name, price, disPrice, quentity } = arr[i];
    tbodyShop.children[i].children[3].children[0].innerHTML = disPrice;
  }
}
