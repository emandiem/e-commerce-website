const buttonelement = document.getElementById("add-to-cart");
const emptyCart = document.getElementById("empty-cart");

if (buttonelement) {
  buttonelement.addEventListener("click", function () {
    // makes the button clickable //
    const product = document.querySelector(
      ".product-page-description h1",
    ).textContent; // gets the product name from the h1 element //

    localStorage.product = product; // stores the product name in local storage //
    alert(`${product} has been added to your cart!`);
  });
}

if (localStorage.product) {
  emptyCart.innerText = localStorage.product;
}
