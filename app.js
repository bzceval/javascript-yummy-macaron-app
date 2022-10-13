const taxRate = 0.18;
const shippingPrice= 15;
const shippingFreePrice = 300;

window.addEventListener("click", () => {
    localStorage.setItem("taxRate", taxRate)
    localStorage.setItem("shippingPrice", shippingPrice )
    localStorage.setItem("shippingFreePrice", shippingFreePrice)
})

const macaronsDiv = document.querySelector(".macarons")

macaronsDiv.addEventListener("click", (event) => {
    if(event.target.className == "bi bi-dash") {
        console.log("minus")
    }
    if (event.target.classList.contains("bi-plus")) {
        console.log("plus")
    }
    if(event.target.classList.contains("remove-product")) {
        console.log("remove btn")
    }
})
