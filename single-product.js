let image = window.localStorage.getItem("image");
let title = window.localStorage.getItem("title");
let price = window.localStorage.getItem("price");
let catogary = window.localStorage.getItem("catogary");
let mediumPrize = window.localStorage.getItem("medium-prize");
let largePrize = window.localStorage.getItem("large-prize");
let container = document.querySelector(".single-universal-product");
let singleImg = document.querySelector(".single-img");
let singleTitle = document.querySelector(".single-title");
let singlePrice = document.querySelector(".single-price");
let singlePriceQuantity = document.querySelector(".single-price-quantity");
let smallbtn = document.querySelector(".small");
let mediumbtn = document.querySelector(".medium");
let largebtn = document.querySelector(".large");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let quantity = document.querySelector(".product-quantity");
let sizeContainer = document.querySelector(".sizes-container");
let sizeSmall = sizeContainer.querySelector(".small");
let sizeMedium = sizeContainer.querySelector(".medium");
let sizeLarge = sizeContainer.querySelector(".large");
let piece = document.querySelector(".piece");
let pieceQunantity = document.querySelector(".piece-quantity");
let kg = document.querySelector(".kg");
let kgQunantity = document.querySelector(".kg-quantity");
let freePizza = document.querySelector('.free-pizza')
let windowProductTitle = document.querySelector('.window-product-title')
windowProductTitle.innerHTML = title.toLocaleUpperCase()
let hireCatogary = document.querySelector(".hire-catogary");
let hirearchyCatogary = document.querySelector(".hirearchy-catogary");
hireCatogary.textContent = catogary;
hirearchyCatogary.addEventListener("click", function () {
  window.location.href = `${catogary}.html`;
});
let hireTitle = document.querySelector(".hire-title");
hireTitle.textContent = title;
let counter = 1;
singleImg.src = image;
singleTitle.textContent = title;
singlePriceQuantity.textContent = price;
kgQunantity.textContent = counter;
let pieceValue = 8;
if (title == "chicken kachori") {
  pieceValue = 5;
}
pieceQunantity.textContent = pieceValue;
if (catogary == "chicken piece") {
  piece.classList.remove("hide");
}
if (title == "gajjar halwa") {
  kg.classList.remove("hide");
}
if (catogary == "pizza") {
  sizeSmall.classList.remove("hide");
  sizeMedium.classList.remove("hide");
  sizeLarge.classList.remove("hide");
  freePizza.classList.remove('hide')
}
if (title == "chicken shawarma") {
  sizeSmall.classList.remove("hide");
  sizeLarge.classList.remove("hide");
}
if (title == "french fries") {
  sizeSmall.classList.remove("hide");
  sizeLarge.classList.remove("hide");
}
container.addEventListener("click", function (current) {
  if (current.target.classList.contains("small")) {
    singlePriceQuantity.textContent = price * quantity.textContent;
    smallbtn.classList.add("size-border");
    mediumbtn.classList.remove("size-border");
    largebtn.classList.remove("size-border");
  }
  if (current.target.classList.contains("medium")) {
    singlePriceQuantity.textContent = mediumPrize * quantity.textContent;
    smallbtn.classList.remove("size-border");
    mediumbtn.classList.add("size-border");
    largebtn.classList.remove("size-border");
  }
  if (current.target.classList.contains("large")) {
    singlePriceQuantity.textContent = largePrize * quantity.textContent;
    smallbtn.classList.remove("size-border");
    mediumbtn.classList.remove("size-border");
    largebtn.classList.add("size-border");
  }
  // SMALL
  if (singlePriceQuantity.textContent == price * quantity.textContent) {
    if (current.target.classList.contains("plus")) {
      counter++;
      singlePriceQuantity.textContent = price * counter;
      quantity.textContent = counter;
      pieceQunantity.textContent =
        pieceValue + parseInt(pieceQunantity.textContent);
      kgQunantity.textContent = counter;
    }
    if (current.target.classList.contains("minus")) {
      if (counter <= 1) return;
      counter--;
      singlePriceQuantity.textContent = price * counter;
      quantity.textContent = counter;
      pieceQunantity.textContent = pieceQunantity.textContent - pieceValue;
      kgQunantity.textContent = counter;
    }
  }
  // MEDIUM
  if (singlePriceQuantity.textContent == mediumPrize * quantity.textContent) {
    if (current.target.classList.contains("plus")) {
      counter++;
      singlePriceQuantity.textContent = mediumPrize * counter;
      quantity.textContent = counter;
    }
    if (current.target.classList.contains("minus")) {
      if (counter <= 1) return;
      counter--;
      singlePriceQuantity.textContent = mediumPrize * counter;
      quantity.textContent = counter;
    }
  }
  // LARGE
  if (singlePriceQuantity.textContent == largePrize * quantity.textContent) {
    if (current.target.classList.contains("plus")) {
      counter++;
      singlePriceQuantity.textContent = largePrize * counter;
      quantity.textContent = counter;
    }
    if (current.target.classList.contains("minus")) {
      if (counter <= 1) return;
      counter--;
      singlePriceQuantity.textContent = largePrize * counter;
      quantity.textContent = counter;
    }
  }
  let currentSize = document.querySelector(".size-border");
  if (current.target.classList.contains("btn")) {
    if (catogary == "pizza") {
      window.open(
        `https://wa.me/3467653833?text=Item%20:%20${singleTitle.textContent.toLowerCase()}%0AQuantity%20:%20${
          quantity.textContent
        }%0ASize%20:%20${currentSize.textContent}%0APrize%20:%20${
          singlePrice.textContent
        } `,
        "_blank"
      );
    } else if (title == "french fries") {
      window.open(
        `https://wa.me/3467653833?text=Item%20:%20${singleTitle.textContent.toLowerCase()}%0AQuantity%20:%20${
          quantity.textContent
        }%0ASize%20:%20${currentSize.textContent}%0APrize%20:%20${
          singlePrice.textContent
        } `,
        "_blank"
      );
    } else if (title == "chicken shawarma") {
      window.open(
        `https://wa.me/3467653833?text=Item%20:%20${singleTitle.textContent.toLowerCase()}%0AQuantity%20:%20${
          quantity.textContent
        }%0ASize%20:%20${currentSize.textContent}%0APrize%20:%20${
          singlePrice.textContent
        } `,
        "_blank"
      );
    } else {
      window.open(
        `https://wa.me/3467653833?text=Item%20:%20${singleTitle.textContent.toLowerCase()}%0AQuantity%20:%20${
          quantity.textContent
        }%0APrize%20:%20${singlePrice.textContent} `,
        "_blank"
      );
    }
  }
});
