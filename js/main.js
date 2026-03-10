const buttonelement = document.getElementById("add-to-cart");

buttonelement.addEventListener("click", function () {
  let product = document.querySelector(
    ".product-page-description h1",
  ).textContent;
  localStorage.product = product;
  let newProduct = localStorage.product;
  alert(`${newProduct} has been added to your cart!`);
});
