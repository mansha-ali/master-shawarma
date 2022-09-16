//  -----------------------------#SLIDER---------------------------------
let slider = document.querySelector(".slider");
let sliderContainer = document.querySelector(".slider-container");
let slide = document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let navbar = document.querySelector("#navbar");
let counter = 1;
let width = navbar.clientWidth;
function sliderMove() {
  slider.style.transform = `translateX(-${width * counter}px)`;
  slider.classList.add("transition");
}
function controls() {
  if (counter == 0) {
    control[0].classList.remove("control-background");
    control[1].classList.remove("control-background");
    control[2].classList.add("control-background");
  }
  if (counter == 1) {
    control[0].classList.add("control-background");
    control[1].classList.remove("control-background");
    control[2].classList.remove("control-background");
  }
  if (counter == 2) {
    control[0].classList.remove("control-background");
    control[1].classList.add("control-background");
    control[2].classList.remove("control-background");
  }
  if (counter == 3) {
    control[0].classList.remove("control-background");
    control[1].classList.remove("control-background");
    control[2].classList.add("control-background");
  }
  if (counter == 4) {
    control[0].classList.add("control-background");
    control[1].classList.remove("control-background");
    control[2].classList.remove("control-background");
  }
}
function controlChange(add, removeone, removetwo) {
  control[add].classList.add("control-background");
  control[removeone].classList.remove("control-background");
  control[removetwo].classList.remove("control-background");
}
function slideSmooth() {
  if (slide[counter].id == "last") {
    counter = 1;
    slider.style.transform = `translateX(-${width * counter}px)`;
    slider.classList.remove("transition");
  }
  if (slide[counter].id == "first") {
    counter = slide.length - 2;
    slider.style.transform = `translateX(-${width * counter}px)`;
    slider.classList.remove("transition");
  }
}
sliderMove();
next.addEventListener("click", function () {
  if (counter >= slide.length - 1) return;
  counter++;
  sliderMove();
  controls();
});
prev.addEventListener("click", function () {
  if (counter <= 0) return;
  counter--;
  sliderMove();
  controls();
});
let sliderBtn = document.querySelector(".slider-btns");
let id = setInterval(() => {
  counter++;
  sliderMove();
  controls();
  slideSmooth();
}, 4000);
sliderContainer.addEventListener("mouseover", function () {
  sliderBtn.classList.remove("btn-hide");
  clearInterval(id);
});
sliderContainer.addEventListener("mouseout", function () {
  sliderBtn.classList.add("btn-hide");
  id = setInterval(() => {
    counter++;
    sliderMove();
    controls();
    slideSmooth();
  }, 5000);
});
let control = document.querySelectorAll(".control");
console.log(control);
control.forEach(function (controls) {
  controls.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("contone")) {
      counter = 1;
      sliderMove();
      controlChange(0, 1, 2);
    }
    if (e.currentTarget.classList.contains("conttwo")) {
      counter = 2;
      sliderMove();
      controlChange(1, 0, 2);
    }
    if (e.currentTarget.classList.contains("contthree")) {
      counter = 3;
      sliderMove();
      controlChange(2, 0, 1);
    }
  });
});
var startx, movex;
slider.addEventListener("touchstart", function (e) {
  startx = e.touches[0].clientX;
  clearInterval(id);
});
slider.addEventListener("touchmove", function (e) {
  movex = e.touches[0].clientX;
});
slider.addEventListener("touchend", function (e) {
  if (startx + 100 < movex) {
    counter--;
    sliderMove();
  } else if (startx - 100 > movex) {
    console.log("left");
    counter++;
    sliderMove();
  }
  id = setInterval(() => {
    counter++;
    sliderMove();
    controls();
    slideSmooth();
  }, 5000);
  controls();
});
slider.addEventListener("transitionend", function () {
  if (slide[counter].id == "last") {
    counter = slide.length - counter;
    slider.style.transform = `translateX(-${width * counter}px)`;
    slider.classList.remove("transition");
  }
  if (slide[counter].id == "first") {
    counter = slide.length - 2;
    slider.style.transform = `translateX(-${width * counter}px)`;
    slider.classList.remove("transition");
  }
});
//  ----------------------------#PRODUCT----------------------------------
let productSliderOne = document.querySelector(".product-slider-one");
let productContainerOne = document.querySelector(".product-container-one");
let productNextOne = document.querySelector(".product-next-one");
let productPrevOne = document.querySelector(".product-prev-one");
let indexone = 0;
let productSliderTwo = document.querySelector(".product-slider-two");
let productContainerTwo = document.querySelector(".product-container-two");
let productNextTwo = document.querySelector(".product-next-two");
let productPrevTwo = document.querySelector(".product-prev-two");
let indextwo = 0;
let productSliderThree = document.querySelector(".product-slider-three");
let productContainerThree = document.querySelector(".product-container-three");
let productNextThree = document.querySelector(".product-next-three");
let productPrevThree = document.querySelector(".product-prev-three");
let indexthree = 0;
let productSliderFour = document.querySelector(".product-slider-four");
let productContainerFour = document.querySelector(".product-container-four");
let productNextFour = document.querySelector(".product-next-four");
let productPrevFour = document.querySelector(".product-prev-four");
let indexFour = 0;
let productSliderFive = document.querySelector(".product-slider-five");
let productContainerFive = document.querySelector(".product-container-five");
let productNextFive = document.querySelector(".product-next-five");
let productPrevFive = document.querySelector(".product-prev-five");
let indexFive = 0;
let productSliderSix = document.querySelector(".product-slider-six");
let productContainerSix = document.querySelector(".product-container-six");
let productNextSix = document.querySelector(".product-next-six");
let productPrevSix = document.querySelector(".product-prev-six");
let indexSix = 0;
let productSliderSeven = document.querySelector(".product-slider-seven");
let productContainerSeven = document.querySelector(".product-container-seven");
let productNextSeven = document.querySelector(".product-next-seven");
let productPrevSeven = document.querySelector(".product-prev-seven");
let indexSeven = 0;
let product = document.querySelectorAll(".product");
let pwidth = product[0].clientWidth + 16;
//  ----------------------------FUNCTIONS----------------------------------
function slideMove(slider, index) {
  slider.style.transform = `translateX(-${pwidth * index}px)`;
  slider.classList.add("transition");
}
function showHide(container, next, prev) {
  container.addEventListener("mouseover", function () {
    next.classList.remove("hide");
    prev.classList.remove("hide");
    if (navbar.clientWidth <= 600) {
      next.classList.add("hide");
      prev.classList.add("hide");
    }
  });
  container.addEventListener("mouseout", function () {
    prev.classList.add("hide");
    next.classList.add("hide");
  });
}
//  ----------------------------ONE----------------------------------
slideMove(productSliderOne, indexone);
productNextOne.addEventListener("click", function () {
  if (indexone == 6) return;
  indexone++;
  slideMove(productSliderOne, indexone);
});
productPrevOne.addEventListener("click", function () {
  indexone--;
  slideMove(productSliderOne, indexone);
  if (indexone <= 0) {
    indexone = 0;
  }
});
productSliderOne.addEventListener("transitionend", function () {
  if (product[indexone].classList.contains("p-last")) {
    indexone = 0;
    productSliderOne.style.transform = `translateX(-${pwidth * indexone}px)`;
    productSliderOne.classList.remove("transition");
  }
});
showHide(productContainerOne, productNextOne, productPrevOne);
//  ----------------------------TWO----------------------------------
slideMove(productSliderTwo, indextwo);
productNextTwo.addEventListener("click", function () {
  if (indextwo == 6) return;
  indextwo++;
  slideMove(productSliderTwo, indextwo);
});
productPrevTwo.addEventListener("click", function () {
  indextwo--;
  slideMove(productSliderTwo, indextwo);
  if (indextwo <= 0) {
    indextwo = 0;
  }
});
productSliderTwo.addEventListener("transitionend", function () {
  if (product[indextwo].classList.contains("p-last")) {
    indextwo = 0;
    productSliderTwo.style.transform = `translateX(-${pwidth * indextwo}px)`;
    productSliderTwo.classList.remove("transition");
  }
});
showHide(productContainerTwo, productNextTwo, productPrevTwo);
//  ----------------------------THREE----------------------------------
slideMove(productSliderThree, indexthree);
productNextThree.addEventListener("click", function () {
  if (indexthree == 6) return;
  indexthree++;
  slideMove(productSliderThree, indexthree);
});
productPrevThree.addEventListener("click", function () {
  indexthree--;
  slideMove(productSliderThree, indexthree);
  if (indexthree <= 0) {
    indexthree = 0;
  }
});
productSliderThree.addEventListener("transitionend", function () {
  if (product[indexthree].classList.contains("p-last")) {
    indexthree = 0;
    productSliderThree.style.transform = `translateX(-${
      pwidth * indexthree
    }px)`;
    productSliderThree.classList.remove("transition");
  }
});
showHide(productContainerThree, productNextThree, productPrevThree);
//  ----------------------------FOUR----------------------------------
slideMove(productSliderFour, indexFour);
productNextFour.addEventListener("click", function () {
  if (indexFour == 6) return;
  indexFour++;
  slideMove(productSliderFour, indexFour);
});
productPrevFour.addEventListener("click", function () {
  indexFour--;
  slideMove(productSliderFour, indexFour);
  if (indexFour <= 0) {
    indexFour = 0;
  }
});
productSliderFour.addEventListener("transitionend", function () {
  if (product[indexFour].classList.contains("p-last")) {
    indexFour = 0;
    productSliderFour.style.transform = `translateX(-${pwidth * indexFour}px)`;
    productSliderFour.classList.remove("transition");
  }
});
showHide(productContainerFour, productNextFour, productPrevFour);
//  ----------------------------FIVE----------------------------------
slideMove(productSliderFive,indexFive)
productNextFive.addEventListener("click", function () {
  if (indexFive == 6) return;
  indexFive++;
  slideMove(productSliderFive,indexFive)
});
productPrevFive.addEventListener("click", function () {
  indexFive--;
  slideMove(productSliderFive,indexFive)
  if (indexFive <= 0) { indexFive = 0;}
});
productSliderFive.addEventListener("transitionend", function () {
  if (product[indexFive].classList.contains('p-last')){
    indexFive = 0;
    productSliderFive.style.transform = `translateX(-${pwidth * indexFive}px)`;
    productSliderFive.classList.remove("transition");
  }
});
showHide(productContainerFive,productNextFive,productPrevFive)
//  ----------------------------SIX----------------------------------
slideMove(productSliderSix,indexSix)
productNextSix.addEventListener("click", function () {
  if (indexSix == 6) return;
  indexSix++;
  slideMove(productSliderSix,indexSix)
});
productPrevSix.addEventListener("click", function () {
  indexSix--;
  slideMove(productSliderSix,indexSix)
  if (indexSix <= 0) { indexSix = 0;}
});
productSliderSix.addEventListener("transitionend", function () {
  if (product[indexSix].classList.contains('p-last')){
    indexSix = 0;
    productSliderSix.style.transform = `translateX(-${pwidth * indexSix}px)`;
    productSliderSix.classList.remove("transition");
  }
});
showHide(productContainerSix,productNextSix,productPrevSix)
//  ----------------------------FOUR----------------------------------
slideMove(productSliderSeven,indexSeven)
productNextSeven.addEventListener("click", function () {
  if (indexSeven == 6) return;
  indexSeven++;
  slideMove(productSliderSeven,indexSeven)
});
productPrevSeven.addEventListener("click", function () {
  indexSeven--;
  slideMove(productSliderSeven,indexSeven)
  if (indexSeven <= 0) { indexSeven = 0;}
});
productSliderSeven.addEventListener("transitionend", function () {
  if (product[indexSeven].classList.contains('p-last')){
    indexSeven = 0;
    productSliderSeven.style.transform = `translateX(-${pwidth * indexSeven}px)`;
    productSliderSeven.classList.remove("transition");
  }
});
showHide(productContainerSeven,productNextSeven,productPrevSeven)
//  -----------------------------SINGLE-PRODUCT---------------------------------
let dealProduct = document.querySelectorAll(".deal-product");
dealProduct.forEach(function (products) {
  products.addEventListener("click", function (curr) {
    let image = curr.currentTarget.childNodes[1].childNodes[1].src;
    let title = curr.currentTarget.childNodes[3].textContent;
    let price = curr.currentTarget.childNodes[5].childNodes[1].textContent;
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
//  -----------------------------MEMBERS---------------------------------
let memberSlider = document.querySelector('.member-slider')
let members = document.querySelectorAll('.member')
let memberIndex = 1
let memberWidth = members[0].clientWidth + 16
memberSlider.style.transform = `translateX(-${memberWidth * memberIndex}px)`
memberSlider.classList.add('member-transition')
setInterval(() => {
  memberIndex++
  memberSlider.style.transform = `translateX(-${memberWidth * memberIndex}px)`
  if(memberIndex==6){
    memberIndex = 1
    memberSlider.classList.remove('member-transition')
    memberSlider.style.transform = `translateX(-${memberWidth * memberIndex}px)`
  }else{
    memberSlider.classList.add('member-transition')
    memberSlider.style.transform = `translateX(-${memberWidth * memberIndex}px)`
  }
}, 2000);
