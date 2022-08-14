
var photo_List = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]
var photoCount = 0
var orderCount = 1
const deleteFromCart = document.getElementById("del-btn")
const cartBtn = document.querySelector(".cart-icon")
const AddToCartBtn = document.querySelector(".add-to-cart")
const pluss = document.querySelector(".plus")
const closeCart = document.querySelector(".close")




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

deleteFromCart.addEventListener("click", deleteBtn)
function deleteBtn() {
    orderCount = 1
    document.querySelector('.cart-product-div').style.display = "none"
    document.querySelector("#empty").style.display = "block"
    document.querySelector(".order-count").style.display = "none"
    document.querySelector(".checkout-btn").style.display = "none"
    document.querySelector(".empty-case").style.display = "block"


}





























function remove_item() {
    item_cont -= 1;
    const final_price = document.querySelector('#item-count').innerHTML = item_cont;

}


function thumbnail_img_btn1() {
    document.getElementById("main-img-pupUp-window").src = photo_List[0];
    document.getElementById("main-img").src = photo_List[0];


}

function thumbnail_img_btn2() {
    document.getElementById("main-img-pupUp-window").src = photo_List[1];
    document.getElementById("main-img").src = photo_List[1];

}

function thumbnail_img_btn3() {
    document.getElementById("main-img-pupUp-window").src = photo_List[2];
    document.getElementById("main-img").src = photo_List[2];

}

function thumbnail_img_btn4() {
    document.getElementById("main-img-pupUp-window").src = photo_List[3];
    document.getElementById("main-img").src = photo_List[3];

}



























function next_photo() {
    document.getElementById("main-img-pupUp-window").src = photo_List[photo_range];
    photo_range += 1;
    if (photo_range == 4) {
        photo_range = 0
    };
};

function previous_photo() {
    document.getElementById("main-img-pupUp-window").src = photo_List[photo_range];

    photo_range -= 1
    if (photo_range == -1) {
        photo_range = 3
    }
}




function show_pupUp() {
    const pupUp = document.querySelector("#show-product-imge")
    if (pupUp.style.display == "flex") {
        pupUp.style.display = "none"
    } else {
        pupUp.style.display = "flex"
    }
}




