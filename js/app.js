// function on adding extra cost 
function addExtraCost(product, cost) {
    const extraCost = document.getElementById(product + '-price')

    extraCost.innerText = cost
}

function getExtraPrice(product) {
    const productPrice = document.getElementById(product + '-price');
    const productCostAmount = parseInt(productPrice.innerText)
    return productCostAmount
}

function updateTotal() {
    const bestPrice = getExtraPrice('best');
    const memoryPrice = getExtraPrice("memory")
    const storagePirce = getExtraPrice("storage")
    const deliveryPrice = getExtraPrice("delevery")
    const totalPrice = bestPrice + memoryPrice + storagePirce + deliveryPrice;
    const subTotal = document.getElementById("total-pirce")
    subTotal.innerText = totalPrice

    // update total 
    const total = document.getElementById('totalPirce2');
    total.innerText = totalPrice


}




const memory8bg = document.getElementById("memory-8gb");
memory8bg.addEventListener("click", function () {
    addExtraCost('memory', 0)
    updateTotal()

})
const memory16bg = document.getElementById("memory-16gb");
memory16bg.addEventListener("click", function () {
    addExtraCost("memory", 180)
    updateTotal()

})

// storage 
const storage256gb = document.getElementById("storage-256gb");
storage256gb.addEventListener("click", function () {
    addExtraCost("storage", 0)
    updateTotal()
})
const storage512gb = document.getElementById("storage-512gb");
storage512gb.addEventListener("click", function () {
    addExtraCost("storage", 100)
    updateTotal()
})
const storage1Tb = document.getElementById("storage-1TB");
storage1Tb.addEventListener("click", function () {
    addExtraCost("storage", 180)
    updateTotal()
})

const deliveryFree = document.getElementById("delivery-free");
deliveryFree.addEventListener("click", function () {
    addExtraCost("delevery", 0)
    updateTotal()

})
const delivery20 = document.getElementById("delivery-20"); delivery20.addEventListener("click", function () {
    addExtraCost("delevery", 20)
    updateTotal()
})

//  apply promo code for bonus part
document.getElementById('apply-btn').addEventListener('click', function () {
    const bestPrice = getExtraPrice('best');
    const memoryPrice = getExtraPrice("memory")
    const storagePirce = getExtraPrice("storage")
    const deliveryPrice = getExtraPrice("delevery")
    const totalPrice = bestPrice + memoryPrice + storagePirce + deliveryPrice;
    const subTotal = document.getElementById("total-pirce")
    subTotal.innerText = totalPrice

    // update total 
    const total = document.getElementById('totalPirce2');
    total.innerText = totalPrice
    const promoCode = document.getElementById('input-promo-code');
    const cupon = promoCode.value;
    if (cupon.toLowerCase() == 'stevekaku') {
        const discount = totalPrice * 20 / 100;
        const priceAfterDiscount = totalPrice - discount;
        total.innerText = priceAfterDiscount;
    }
    else {
        total.innerText = totalPrice;
    }
    promoCode.value = '';
})
