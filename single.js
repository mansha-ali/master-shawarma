let image = window.localStorage.getItem("image");
let title = window.localStorage.getItem("title");
let price = window.localStorage.getItem("price");
let largePizza = window.localStorage.getItem("largePizza");
let mediumPizza = window.localStorage.getItem("mediumPizza");
let smallPizza = window.localStorage.getItem("smallPizza");
let zingerBurger = window.localStorage.getItem("zingerBurger");
let chickenBurger = window.localStorage.getItem("chickenBurger");
let shawarma = window.localStorage.getItem("shawarma");
let wings = window.localStorage.getItem("wings");
let nuggets = window.localStorage.getItem("nuggets");
let legPiece = window.localStorage.getItem("legPiece");
let chickenParathaRoll = window.localStorage.getItem("chickenParathaRoll");
let zingerParathaRoll = window.localStorage.getItem("zingerParathaRoll");
let cake = window.localStorage.getItem("cake");
let oneHalfLitre = window.localStorage.getItem("oneHalfLitre");
let oneLitre = window.localStorage.getItem("oneLitre");
let catogary = window.localStorage.getItem("catogary");
let windowDealTitle = document.querySelector('.window-deal-title')
windowDealTitle.innerHTML = title.toUpperCase()
let masterLargePizza = document.querySelector(".lg-pizza");
let masterMediumPizza = document.querySelector(".md-pizza");
let masterSmallPizza = document.querySelector(".sm-pizza");
let masterZingerBurger = document.querySelector(".zinger-burger");
let masterChickenBurger = document.querySelector(".chicken-burger");
let masterShawarma = document.querySelector(".shawarma");
let masterWings = document.querySelector(".wings");
let masterNuggets = document.querySelector(".nuggets");
let masterLegPiece = document.querySelector(".leg-piece");
let masterChickenParatha = document.querySelector(".chicken-paratha-roll");
let masterZingerParatha = document.querySelector(".zinger-paratha-roll");
let masterCake = document.querySelector(".cake");
let masterFullColdDrink = document.querySelector(".full-cold-drink");
let masterHalfColdDrink = document.querySelector(".half-cold-drink");
let singleImg = document.querySelector(".single-img");
let singleTitle = document.querySelector(".single-title");
let singlePrice = document.querySelector(".single-price-quantity");
let singleLargePizza = document.querySelector(".lg-pizza-quantity");
let singleMediumPizza = document.querySelector(".md-pizza-quantity");
let singleSmallPizza = document.querySelector(".sm-pizza-quantity");
let singleZingerBurger = document.querySelector(".zinger-burger-quantity");
let singleChickenBurger = document.querySelector(".chicken-burger-quantity");
let singleShawarma = document.querySelector(".shawarma-quantity");
let singleWings = document.querySelector(".wings-quantity");
let singleNuggets = document.querySelector(".nuggets-quantity");
let singleLegPiece = document.querySelector(".leg-piece-quantity");
let singleChikenParatha = document.querySelector(
  ".chicken-paratha-roll-quantity"
);
let singleZingerParatha = document.querySelector(
  ".zinger-paratha-roll-quantity"
);
let singleCake = document.querySelector(".cake-quantity");
let singleFullDrink = document.querySelector(".full-cold-drink-quantity");
let singleHalfDrink = document.querySelector(".half-cold-drink-quantity");
let hireCatogary = document.querySelector(".hire-catogary");
let hirearchyCatogary = document.querySelector(".hirearchy-catogary");
hireCatogary.textContent = catogary;
hirearchyCatogary.addEventListener("click", function () {
  window.location.href = `${catogary}.html`;
});
let hireTitle = document.querySelector(".hire-title");
hireTitle.textContent = title;
singleImg.src = image;
singleTitle.textContent = title;
singlePrice.textContent = price;
singleLargePizza.textContent = largePizza;
singleMediumPizza.textContent = mediumPizza;
singleSmallPizza.textContent = smallPizza;
singleZingerBurger.textContent = zingerBurger;
singleChickenBurger.textContent = chickenBurger;
singleShawarma.textContent = shawarma;
singleWings.textContent = wings;
singleNuggets.textContent = nuggets;
singleLegPiece.textContent = legPiece;
singleChikenParatha.textContent = chickenParathaRoll;
singleZingerParatha.textContent = zingerParathaRoll;
singleCake.textContent = cake;
singleFullDrink.textContent = oneHalfLitre;
singleHalfDrink.textContent = oneLitre;
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let productQuantity = document.querySelector(".product-quantity");
let index = 1;
plus.addEventListener("click", function () {
  index++;
  productQuantity.textContent = index;
  singlePrice.textContent = parseInt(singlePrice.textContent) + parseInt(price);
  singleLargePizza.textContent =
    parseInt(singleLargePizza.textContent) + parseInt(largePizza);
  singleMediumPizza.textContent =
    parseInt(singleMediumPizza.textContent) + parseInt(mediumPizza);
  singleSmallPizza.textContent =
    parseInt(singleSmallPizza.textContent) + parseInt(smallPizza);
  singleZingerBurger.textContent =
    parseInt(singleZingerBurger.textContent) + parseInt(zingerBurger);
  singleChickenBurger.textContent =
    parseInt(singleChickenBurger.textContent) + parseInt(chickenBurger);
  singleShawarma.textContent =
    parseInt(singleShawarma.textContent) + parseInt(shawarma);
  singleWings.textContent = parseInt(singleWings.textContent) + parseInt(wings);
  singleNuggets.textContent =
    parseInt(singleNuggets.textContent) + parseInt(nuggets);
  singleLegPiece.textContent =
    parseInt(singleLegPiece.textContent) + parseInt(legPiece);
  singleChikenParatha.textContent =
    parseInt(singleChikenParatha.textContent) + parseInt(chickenParathaRoll);
  singleZingerParatha.textContent =
    parseInt(singleZingerParatha.textContent) + parseInt(zingerParathaRoll);
  singleCake.textContent = parseInt(singleCake.textContent) + parseInt(cake);
  singleFullDrink.textContent =
    parseInt(singleFullDrink.textContent) + parseInt(oneHalfLitre);
  singleHalfDrink.textContent =
    parseInt(singleHalfDrink.textContent) + parseInt(oneLitre);
});
minus.addEventListener("click", function () {
  if (index == 1) return;
  index--;
  productQuantity.textContent = index;
  singlePrice.textContent = parseInt(singlePrice.textContent) - parseInt(price);
  singleLargePizza.textContent =
    parseInt(singleLargePizza.textContent) - parseInt(largePizza);
  singleMediumPizza.textContent =
    parseInt(singleMediumPizza.textContent) - parseInt(mediumPizza);
  singleSmallPizza.textContent =
    parseInt(singleSmallPizza.textContent) - parseInt(smallPizza);
  singleZingerBurger.textContent =
    parseInt(singleZingerBurger.textContent) - parseInt(zingerBurger);
  singleChickenBurger.textContent =
    parseInt(singleChickenBurger.textContent) - parseInt(chickenBurger);
  singleShawarma.textContent =
    parseInt(singleShawarma.textContent) - parseInt(shawarma);
  singleWings.textContent = parseInt(singleWings.textContent) - parseInt(wings);
  singleNuggets.textContent =
    parseInt(singleNuggets.textContent) - parseInt(nuggets);
  singleLegPiece.textContent =
    parseInt(singleLegPiece.textContent) - parseInt(legPiece);
  singleChikenParatha.textContent =
    parseInt(singleChikenParatha.textContent) - parseInt(chickenParathaRoll);
  singleZingerParatha.textContent =
    parseInt(singleZingerParatha.textContent) - parseInt(zingerParathaRoll);
  singleCake.textContent = parseInt(singleCake.textContent) - parseInt(cake);
  singleFullDrink.textContent =
    parseInt(singleFullDrink.textContent) - parseInt(oneHalfLitre);
  singleHalfDrink.textContent =
    parseInt(singleHalfDrink.textContent) - parseInt(oneLitre);
});
if (singleTitle.textContent == "deal one") {
  itemVisible(masterSmallPizza);
  itemVisible(masterHalfColdDrink);
  itemVisible(masterZingerBurger);
  itemVisible(masterChickenBurger);
} else if (singleTitle.textContent == "deal two") {
  masterMediumPizza.classList.remove("hide");
  masterHalfColdDrink.classList.remove("hide");
  masterZingerBurger.classList.remove("hide");
  masterChickenBurger.classList.remove("hide");
} else if (singleTitle.textContent == "deal three") {
  masterShawarma.classList.remove("hide");
  masterFullColdDrink.classList.remove("hide");
} else if (singleTitle.textContent == "deal four") {
  masterShawarma.classList.remove("hide");
  masterFullColdDrink.classList.remove("hide");
  masterWings.classList.remove("hide");
  masterNuggets.classList.remove("hide");
} else if (singleTitle.textContent == "deal five") {
  masterLargePizza.classList.remove("hide");
  masterHalfColdDrink.classList.remove("hide");
  masterChickenBurger.classList.remove("hide");
  masterWings.classList.remove("hide");
  masterNuggets.classList.remove("hide");
} else if (singleTitle.textContent == "deal six") {
  masterSmallPizza.classList.remove("hide");
  masterHalfColdDrink.classList.remove("hide");
  masterChickenBurger.classList.remove("hide");
  masterZingerBurger.classList.remove("hide");
} else if (singleTitle.textContent == "deal seven") {
  masterMediumPizza.classList.remove("hide");
  masterFullColdDrink.classList.remove("hide");
  masterZingerBurger.classList.remove("hide");
} else if (singleTitle.textContent == "deal eight") {
  masterMediumPizza.classList.remove("hide");
  masterFullColdDrink.classList.remove("hide");
  masterChickenBurger.classList.remove("hide");
  masterZingerBurger.classList.remove("hide");
  masterNuggets.classList.remove("hide");
} else if (singleTitle.textContent == "deal nine") {
  itemVisible(masterMediumPizza);
  itemVisible(masterChickenBurger);
  itemVisible(masterZingerBurger);
  itemVisible(masterWings);
  itemVisible(masterFullColdDrink);
} else if (singleTitle.textContent == "deal ten") {
  itemVisible(masterLargePizza);
  itemVisible(masterFullColdDrink);
  itemVisible(masterChickenBurger);
  itemVisible(masterZingerBurger);
  itemVisible(masterChickenParatha);
  itemVisible(masterZingerParatha);
  itemVisible(masterWings);
  itemVisible(masterNuggets);
} else if (singleTitle.textContent == "deal eleven") {
  itemVisible(masterLargePizza);
  itemVisible(masterWings);
  itemVisible(masterNuggets);
  itemVisible(masterFullColdDrink);
  itemVisible(masterCake);
} else if (singleTitle.textContent == "deal twelve") {
  itemVisible(masterLargePizza);
  itemVisible(masterFullColdDrink);
  itemVisible(masterShawarma);
  itemVisible(masterWings);
  itemVisible(masterZingerBurger);
  itemVisible(masterChickenBurger);
  itemVisible(masterCake);
}
function itemVisible(e) {
  e.classList.remove("hide");
}
console.log(masterChickenBurger.textContent);
let dealBtn = document.querySelector(".deals-btn");
dealBtn.addEventListener("click", function () {
  if (singleTitle.textContent == "deal one") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterSmallPizza.textContent
      }%0A${masterZingerBurger.textContent}%0A${
        masterChickenBurger.textContent
      }%0A${masterHalfColdDrink.textContent} `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal two") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterMediumPizza.textContent
      }%0A${masterZingerBurger.textContent}%0A${
        masterChickenBurger.textContent
      }%0A${masterHalfColdDrink.textContent} `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal three") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterShawarma.textContent
      }%0A${masterFullColdDrink.textContent}`,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal four") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterShawarma.textContent
      }%0A${masterWings.textContent}%0A${masterNuggets.textContent}%0A${
        masterFullColdDrink.textContent
      } `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal five") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterLargePizza.textContent
      }%0A${masterChickenBurger.textContent}%0A${masterWings.textContent}%0A${
        masterNuggets.textContent
      }%0A${masterHalfColdDrink.textContent}  `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal six") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterSmallPizza.textContent
      }%0A${masterChickenBurger.textContent}%0A${
        masterZingerBurger.textContent
      }%0A${masterHalfColdDrink.textContent}  `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal seven") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterMediumPizza.textContent
      }%0A${masterZingerBurger.textContent}%0A${
        masterFullColdDrink.textContent
      }  `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal eight") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterMediumPizza.textContent
      }%0A${masterZingerBurger.textContent}%0A${
        masterChickenBurger.textContent
      }%0A${masterNuggets.textContent}%0A${masterFullColdDrink.textContent}  `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal nine") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterMediumPizza.textContent
      }%0A${masterZingerBurger.textContent}%0A${
        masterChickenBurger.textContent
      }%0A${masterWings.textContent}%0A${masterFullColdDrink.textContent}  `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal ten") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterLargePizza.textContent
      }%0A${masterZingerBurger.textContent}%0A${
        masterChickenBurger.textContent
      }%0A${masterChickenParatha.textContent}%0A${
        masterZingerParatha.textContent
      }%0A${masterWings.textContent}%0A${masterNuggets.textContent}%0A${
        masterFullColdDrink.textContent
      }  `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal eleven") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterLargePizza.textContent
      }%0A${masterWings.textContent}%0A${masterNuggets.textContent}%0A${
        masterCake.textContent
      }%0A${masterFullColdDrink.textContent}  `,
      "_blank"
    );
  } else if (singleTitle.textContent == "deal twelve") {
    window.open(
      `https://wa.me/3467653833?text=${singleTitle.textContent.toUpperCase()}%0APrize:%20${
        singlePrice.textContent
      }%0AQuantity:%20${productQuantity.textContent}%0A${
        masterLargePizza.textContent
      }%0A${masterShawarma.textContent}%0A${masterWings.textContent}%0A${
        masterChickenBurger.textContent
      }%0A${masterZingerBurger.textContent}%0A${
        masterChickenBurger.textContent
      }%0A${masterFullColdDrink.textContent}  `,
      "_blank"
    );
  }
});
//  -----------------------------DEALS---------------------------------
let pslider = document.querySelector(".p-slider");
let product = document.querySelectorAll(".product");
let pNext = document.querySelector(".p-next");
let pPrev = document.querySelector(".p-prev");
let counter = 0;
let pwidth = product[0].clientWidth + 16;
pslider.style.transform = `translateX(-${pwidth * counter}px)`;
pslider.classList.add("transition");
pNext.addEventListener("click", function () {
  if (counter == 6) return;
  counter++;
  pslider.style.transform = `translateX(-${pwidth * counter}px)`;
  pslider.classList.add("transition");
});
pPrev.addEventListener("click", function () {
  counter--;
  pslider.style.transform = `translateX(-${pwidth * counter}px)`;
  pslider.classList.add("transition");
  if (counter <= 0) {
    counter = 0;
  }
});
pslider.addEventListener("transitionend", function () {
  if (product[counter].id == "p-last") counter = 0;
  pslider.style.transform = `translateX(-${pwidth * counter}px)`;
  pslider.classList.remove("transition");
});
// hide btn
let productContainer = document.querySelector(".next-prev");
document.querySelector(".p-prev").classList.add("hide");
document.querySelector(".p-next").classList.add("hide");
document.querySelector(".p-prev").classList.add("transition");
document.querySelector(".p-next").classList.add("transition");
productContainer.addEventListener("mouseover", function () {
  document.querySelector(".p-prev").classList.remove("hide");
  document.querySelector(".p-next").classList.remove("hide");
  if (navbar.clientWidth <= 600) {
    document.querySelector(".p-prev").classList.add("hide");
    document.querySelector(".p-next").classList.add("hide");
  }
});
productContainer.addEventListener("mouseout", function () {
  document.querySelector(".p-prev").classList.add("hide");
  document.querySelector(".p-next").classList.add("hide");
});
//  -----------------------------SINGLE-PRODUCT---------------------------------
let dealProduct = document.querySelectorAll(".deal-product");
dealProduct.forEach(function (products) {
  products.addEventListener("click", function (curr) {
    let image = curr.currentTarget.childNodes[1].childNodes[1].src;
    let title = curr.currentTarget.childNodes[3].textContent;
    let price = curr.currentTarget.childNodes[5].textContent;
    let largePizza = curr.currentTarget.childNodes[7].textContent;
    let mediumPizza = curr.currentTarget.childNodes[9].textContent;
    let smallPizza = curr.currentTarget.childNodes[11].textContent;
    let zingerBurger = curr.currentTarget.childNodes[13].textContent;
    let chickenBurger = curr.currentTarget.childNodes[15].textContent;
    let shawarma = curr.currentTarget.childNodes[17].textContent;
    let wings = curr.currentTarget.childNodes[19].textContent;
    let nuggets = curr.currentTarget.childNodes[21].textContent;
    let legPiece = curr.currentTarget.childNodes[23].textContent;
    let chickenParathaRoll = curr.currentTarget.childNodes[25].textContent;
    let zingerParathaRoll = curr.currentTarget.childNodes[27].textContent;
    let cake = curr.currentTarget.childNodes[29].textContent;
    let oneHalfLitre = curr.currentTarget.childNodes[31].textContent;
    let oneLitre = curr.currentTarget.childNodes[33].textContent;
    let catogary = curr.currentTarget.childNodes[35].textContent;
    console.log(catogary);
    window.localStorage.setItem("image", image);
    window.localStorage.setItem("title", title);
    window.localStorage.setItem("price", price);
    window.localStorage.setItem("largePizza", largePizza);
    window.localStorage.setItem("mediumPizza", mediumPizza);
    window.localStorage.setItem("smallPizza", smallPizza);
    window.localStorage.setItem("zingerBurger", zingerBurger);
    window.localStorage.setItem("chickenBurger", chickenBurger);
    window.localStorage.setItem("shawarma", shawarma);
    window.localStorage.setItem("wings", wings);
    window.localStorage.setItem("nuggets", nuggets);
    window.localStorage.setItem("legPiece", legPiece);
    window.localStorage.setItem("chickenParathaRoll", chickenParathaRoll);
    window.localStorage.setItem("zingerParathaRoll", zingerParathaRoll);
    window.localStorage.setItem("cake", cake);
    window.localStorage.setItem("oneHalfLitre", oneHalfLitre);
    window.localStorage.setItem("oneLitre", oneLitre);
    window.localStorage.setItem("catogary", catogary);
    window.location.href = "deals-single.html";
  });
});
