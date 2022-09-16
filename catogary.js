//  -----------------------------SINGLE-PRODUCT---------------------------------
let universalProduct = document.querySelectorAll(".universal-product");
universalProduct.forEach(function (products) {
  products.addEventListener("click", function (curr) {
    console.log('helloworl')
    let image = curr.currentTarget.childNodes[1].childNodes[1].src;
    let title = curr.currentTarget.childNodes[3].textContent;
    let price = curr.currentTarget.childNodes[5].childNodes[1].textContent
    let catogary = curr.currentTarget.childNodes[7].textContent
    let mediumPrize = curr.currentTarget.childNodes[9].textContent
    let largePrize = curr.currentTarget.childNodes[11].textContent
    window.localStorage.setItem("image", image);
    window.localStorage.setItem("title", title);
    window.localStorage.setItem("price", price);
    window.localStorage.setItem("catogary", catogary);
    window.localStorage.setItem("medium-prize", mediumPrize);
    window.localStorage.setItem("large-prize", largePrize);
    window.location.href = "product-single.html";
  });
});