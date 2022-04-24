let  shoppingCart= document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick =()=>{
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    shoppingCart.classList.remove('active')
}
