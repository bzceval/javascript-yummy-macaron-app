const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("click", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const macaronsDiv = document.querySelector(".macarons");

macaronsDiv.addEventListener("click", (event) => {
  if (event.target.className == "bi bi-dash") {
    if (
      event.target.parentElement.parentElement.querySelector(".quantity")
        .innerText > 0
    ) {
      event.target.parentElement.parentElement.querySelector(".quantity")
        .innerText--;
      calculateProductPrice(event.target);
      calculateCartPrice();
    } else {
      console.log("değilse product-line-price içerisini sıfırla");
    }
  }
  if (event.target.classList.contains("bi-plus")) {
    event.target.parentElement.nextElementSibling.innerText++;
    calculateProductPrice(event.target);
    calculateCartPrice();
  }
  if (event.target.classList.contains("remove-product")) {
    event.target.closest(".macaron").remove();
    calculateCartPrice();
  }
});

const calculateProductPrice = (btn) => {
  const productInfoDiv =
    btn.parentElement.parentElement.parentElement.parentElement;
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
};

const calculateCartPrice = () => {
  const productsTotalPricesDiv = document.querySelectorAll(
    ".product-line-price"
  );
  const subtotal = [...productsTotalPricesDiv].reduce(
    (acc, price) => acc + Number(price.innerText),
    0
  );
  const taxPrice = subtotal * localStorage.getItem("taxRate");
  const shippingPrice = parseFloat(subtotal > 0 && subtotal < 300 ? 15 : 0);

  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping").lastElementChild.innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subtotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};

//???????? UP BUTTON ???????????//

const upbutton = document.getElementById("upBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upbutton.style.display = "block";
  } else {
    upbutton.style.display = "none";
  }
}

function topBtnFunc() {
  document.documentElement.scrollTop = 0;
}
