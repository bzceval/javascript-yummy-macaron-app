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
        // console.log(event.target.parentElement.parentElement.querySelector(".quantity").innerText)
        if(event.target.parentElement.parentElement.querySelector(".quantity").innerText>1) {
            event.target.parentElement.parentElement.querySelector(".quantity").innerText--;
        } else {
            console.log("değilse product-line-price içerisini sıfırla")
        }
        
    }
    if (event.target.classList.contains("bi-plus")) {
        // console.log("plus")
        // console.log(event.target.parentElement.nextElementSibling.innerText)
        event.target.parentElement.nextElementSibling.innerText++; 
    }
    if(event.target.classList.contains("remove-product")) {
        // console.log("remove btn")
        event.target.closest(".macaron").remove()
        // console.log(event.target.parentElement.parentElement.parentElement)
    }
})
