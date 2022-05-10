let btnAddCart = document.getElementById("add");

let container = document.querySelector(".area")

let mixBox = document.querySelector(".mixedbox");

let product = document.querySelectorAll(".product");

btncalc = document.getElementById("btncalc");

let currentProduct;

btnAddCart.addEventListener("click", function (e) {
    e.preventDefault();
    let newCart = document.createElement("div");
    let containr = document.createElement("div");
    newCart.classList.add("box", "fruits", "overflow-auto");
    containr.setAttribute("data-id", "fruit");
    container.append(newCart);
    newCart.append(containr);
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(b => {
        b.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
    })
    document.querySelectorAll(".box").forEach(x => {
        x.setAttribute('data-target', "udentified");
    })
    document.querySelectorAll(".box").forEach(x => {
        x.addEventListener("drop", function (e) {
            if (this.getAttribute("data-target") == "udentified") {
                this.setAttribute("data-target", currentProduct.getAttribute("data-id"))
                this.appendChild(currentProduct);

            }
            if (this.getAttribute("data-target") == currentProduct.getAttribute("data-id")) {
                this.appendChild(currentProduct);
            }
            currentProduct = "";
        })
    })
})

mixBox.addEventListener("dragover", function (e) {
    e.preventDefault();
})

product.forEach(x => {
    x.addEventListener("dragstart", function () {
        currentProduct = this;
    })
})

mixBox.addEventListener("drop", function (e) {
    this.appendChild(currentProduct);
})

btncalc.addEventListener("click", function () {
    let total = 0;
    document.querySelectorAll(".box").forEach(b => {
        b.querySelectorAll(".product").forEach(item => {
            total += Number(item.getAttribute("price"))
        });
    });
    alert(`Total Price : ${total.toFixed(2)}`)
})