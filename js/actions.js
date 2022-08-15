
var PhotoList = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]
var orderCount = 1
var PhotoIndex = 0
const deleteFromCart = document.getElementById("del-btn")
const cartBtn = document.querySelector(".cart-icon")
const AddToCartBtn = document.querySelector(".add-to-cart")
const pluss = document.querySelector(".plus")
const closeCart = document.querySelector(".close")
const minus = document.querySelector(".minus")
const images = Array.from(document.querySelectorAll('.image'));
const imagesForPupUP = Array.from(document.querySelectorAll('.image-for-pupUp'));
const MainImage = document.querySelector(".main-img")
const Main_Image_ForPupUp = document.querySelector(".main-img-for-pupUp")
const PupUPWindow = document.querySelector(".pupup-product-window")


for (let i = 0; i < images.length; i++) {
    images[i].src = PhotoList[i]
    imagesForPupUP[i].src = PhotoList[i]
}

images.forEach(function (img, index) {
    img.addEventListener("click", () => ShowTheImg(index))
})
imagesForPupUP.forEach(function (img, index) {
    img.addEventListener("click", () => ShowTheImg(index))
})

const ShowTheImg = (index) => {
    MainImage.src = PhotoList[index]
    Main_Image_ForPupUp.src = PhotoList[index]

}

MainImage.addEventListener("click", Show_Hide_PupUP_Window)
function Show_Hide_PupUP_Window() {
    if (PupUPWindow.style.display = "none") {
        return PupUPWindow.style.display = "flex"
    } else {
        return PupUPWindow.style.display = "none"
    }
}

closeCart.addEventListener("click", HideCart)
function HideCart() {
    let cart = document.querySelector(".cart-check-window")
    cart.style.display = "none"
}

cartBtn.addEventListener("click", ShowCart)
function ShowCart() {
    let cart = document.querySelector(".cart-check-window")
    if (cart.style.display == "flex") {
        cart.style.display = "none"
    } else {
        cart.style.display = "flex"
    }
}

AddToCartBtn.addEventListener("click", addToCart)
function addToCart() {
    let price = 125 * orderCount;
    document.querySelector("#cart-final-price").innerHTML = `$${price}`
    document.querySelector("#cart-item-cont").innerHTML = "x" + orderCount
    document.querySelector("#empty").style.display = "none"
    document.querySelector('.cart-product-div').style.display = "flex"
    document.querySelector(".order-count").style.display = "flex"
    document.querySelector(".checkout-btn").style.display = "block"
    document.querySelector(".counter").innerHTML = orderCount
    document.querySelector(".empty-case").style.display = "none"
    document.querySelector(".item-cont").innerHTML = orderCount
}

pluss.addEventListener("click", plus)
function plus() {
    orderCount += 1;
    document.querySelector(".counter").innerHTML = orderCount
    document.querySelector(".item-cont").innerHTML = orderCount
    let price = 125 * orderCount;
    document.querySelector("#cart-final-price").innerHTML = `$${price}`
    document.querySelector("#cart-item-cont").innerHTML = "x" + orderCount
}

minus.addEventListener("click", minuss)
function minuss() {

    document.querySelector(".counter").innerHTML = orderCount
    document.querySelector(".item-cont").innerHTML = orderCount
    let price = 125 * orderCount;
    document.querySelector("#cart-final-price").innerHTML = `$${price}`
    document.querySelector("#cart-item-cont").innerHTML = "x" + orderCount
    orderCount -= 1;
    if (orderCount == -1) {
        orderCount = 0
        document.querySelector(".item-cont").innerHTML = orderCount
        document.querySelector('.cart-product-div').style.display = "none"
        document.querySelector("#empty").style.display = "block"
        document.querySelector(".order-count").style.display = "none"
        document.querySelector(".checkout-btn").style.display = "none"
        document.querySelector(".empty-case").style.display = "block"
    }
}

deleteFromCart.addEventListener("click", deleteBtn)
function deleteBtn() {
    document.querySelector('.cart-product-div').style.display = "none"
    document.querySelector("#empty").style.display = "block"
    document.querySelector(".order-count").style.display = "none"
    document.querySelector(".checkout-btn").style.display = "none"
    document.querySelector(".empty-case").style.display = "block"
    orderCount = 0
    document.querySelector(".item-cont").innerHTML = orderCount
}




















































