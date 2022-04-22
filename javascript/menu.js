let  navbar= document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active')
}

window.onscroll = ()=>{
    shoppingCart.classList.toggle('active')
    navbar.classList.remove ('active')
}