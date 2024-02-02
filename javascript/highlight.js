export const highlightProductContainer = document.querySelectorAll(
  "div.highlight-product-container-section"
);
export const buynowButton = document.getElementById("click-to-buy");

export const highlightProductButton = document.querySelectorAll(
  "div.highlight-product-container-section  div:last-child button"
);
export const highlightProductWrapper = document.querySelectorAll(
  "div.highlight-product-container-section div.wrapper"
);
export const highlightProductCarosel = document.querySelectorAll(
  "div.highlight-product-container-section div.wrapper ul.carousel"
);
export const hiddenBackground = document.querySelector(
  "section.hidden-background"
);
export const viewProduct = document.querySelector("article.product-view");
export const cartButton = document.querySelector("button.cart-button");

export function displayHighlightProduct(container, array) {
  container.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const newName = array[i].name.slice(0, 15);
    container.innerHTML += `<li class="card" numberId="${array[i].id}">
    <div class="img" >
      <img
        src="${array[i].imgSrc}"
        alt="${array[i].id}"
        draggable="false"
      />
      <article>
        <button
        id="${array[i].id}"
          class="background-color-orange btn-padding2  border-white color-white font-size-2rem hover-orange view-product-button"
        >
          <i class="fa-solid fa-eye not-allow"  id="${array[i].id}"></i>
        </button>
        <button
        id="${array[i].id}"
          class="background-color-orange btn-padding2  border-white color-white font-size-2rem hover-orange card-button"
        >
          <i class="fa-solid fa-cart-shopping not-allow" id="${array[i].id}"></i>
        </button>
        <button
        id="${array[i].id}"
          class="background-color-orange btn-padding2  border-white color-white font-size-2rem hover-orange star-button"
        >
          <i class="fa-solid fa-star not-allow" id="${array[i].id}"></i>
        </button>
      </article>
    </div>
    <div class="product-detail">
      <h3>${newName}...</h3>
      <p>${array[i].price}$</p>
      <aside class="rating-star-container" id="${array[i].id}">
        <i class="fa-solid fa-star not-allow" id="1"></i>
        <i class="fa-solid fa-star not-allow" id="2"></i>
        <i class="fa-solid fa-star not-allow" id="3"></i>
        <i class="fa-solid fa-star not-allow" id="4"></i>
        <i class="fa-solid fa-star not-allow" id="5"></i>
      </aside>

      <p class="discount-price">${array[i].disPrice}$</p>
    </div>
  </li>`;
  }
}
export function displayProductMoreNoInner(container, arr) {
  container.innerHTML += arr
    .map(({ id, imgSrc, name, price, disPrice }) => {
      const newName = name.slice(0, 15);
      return `  <li class="single-product border1" numValue="${id}">
    <img src="${imgSrc}" alt="${id}" />
    <div>
      <button
      id="${id}"
        class="background-color-transparent btn-padding2 border1 border-orange color-orange hover-orange view-product-button"
      >
        <i class="fa-solid fa-eye not-allow"  id="${id}"></i>
      </button>
      <button
      id="${id}"
        class="background-color-transparent btn-padding2 border1 border-orange color-orange hover-orange card-button"
      >
        <i class="fa-solid fa-cart-shopping not-allow" id="${id}"></i>
      </button>
      <button
      id="${id}"
        class="background-color-transparent btn-padding2 border1 border-orange color-orange hover-orange star-button"
      >
        <i class="fa-solid fa-star not-allow" id="${id}"></i>
      </button>
      <button 
      id="${id}"
        class="raduis-20px btn-padding2 background-color-none border1 hover-orange color-orange border-orange text-uppercase buy-now-button"
      >
        Buy Now
      </button>
    </div>
    <article>
      <h3>${newName}...</h3>
      <section>
        <p class="single-discount-price">${disPrice}$</p>
        <p>${price}$</p>
      </section>
      <aside class="rating-star-container" id="${id}">
        <i class="fa-solid fa-star single-not-allow" id="1"></i>
        <i class="fa-solid fa-star single-not-allow" id="2"></i>
        <i class="fa-solid fa-star single-not-allow" id="3"></i>
        <i class="fa-solid fa-star single-not-allow" id="4"></i>
        <i class="fa-solid fa-star single-not-allow" id="5"></i>
      </aside>
    </article>
  </li>`;
    })
    .join("");
}
export function displayProductMore(container, arr) {
  container.innerHTML = "";
  container.innerHTML = arr
    .map(({ id, imgSrc, name, price, disPrice }) => {
      const newName = name.slice(0, 15);
      return `  <li class="single-product border1" numValue="${id}">
    <img src="${imgSrc}" alt="${id}" />
    <div>
      <button
      id="${id}"
        class="background-color-transparent btn-padding2 border1 border-orange color-orange hover-orange view-product-button"
      >
        <i class="fa-solid fa-eye not-allow"  id="${id}"></i>
      </button>
      <button 
      id="${id}"
        class="background-color-transparent btn-padding2 border1 border-orange color-orange hover-orange card-button"
      >
        <i class="fa-solid fa-cart-shopping not-allow" id="${id}"></i>
      </button>
      <button
      id="${id}"
        class="background-color-transparent btn-padding2 border1 border-orange color-orange hover-orange star-button"
      >
        <i class="fa-solid fa-star not-allow" id="${id}"></i>
      </button>
      <button
      id="${id}"
        class="raduis-20px btn-padding2 background-color-none border1 hover-orange color-orange border-orange text-uppercase buy-now-button"
      >
        Buy Now
      </button>
    </div>
    <article>
      <h3>${newName}...</h3>
      <section>
        <p class="single-discount-price">${disPrice}$</p>
        <p>${price}$</p>
      </section>
      <aside class="rating-star-container" id="${id}">
        <i class="fa-solid fa-star single-not-allow" id="1"></i>
        <i class="fa-solid fa-star single-not-allow" id="2"></i>
        <i class="fa-solid fa-star single-not-allow" id="3"></i>
        <i class="fa-solid fa-star single-not-allow" id="4"></i>
        <i class="fa-solid fa-star single-not-allow" id="5"></i>
      </aside>
    </article>
  </li>`;
    })
    .join("");
}
export function diplayDetailProduct(container, arr, id) {
  viewProduct.innerHTML = arr
    .map((element) => {
      if (element.id == id) {
        return `<i class="fa-solid fa-circle-xmark"></i>
      <div class="img-wrapper">
        <img src="${element.imgSrc}" alt="${element.id}" />
      </div>
      <div>
        <h3>
          ${element.name}
        </h3>
        <p>Price : ${element.price}$</p>
        <p class="discount-price">${element.disPrice}$</p>
      </div>`;
      }
    })
    .join("");
}
export const ratingStar = (arrElement, index, color) => {
  for (let i = 0; i < index; i++) {
    arrElement[i].style.color = color;
  }
};

export function nightMode() {
  if (this.checked) {
    document.body.classList.add("night-mode");
    localStorage.setItem("nightMode", "enabled");
  } else {
    document.body.classList.remove("night-mode");
    localStorage.setItem("nightMode", "disabled");
  }
}
