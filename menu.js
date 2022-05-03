const menuBtn = document.querySelector('.nav__menu-icon')
const closeBtn = document.querySelector('.menu__close')
const navMenu = document.querySelector('.nav__menu')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const menuItems = document.querySelectorAll('.menu-item')

menuBtn.onclick = function(e) {
    navMenu.classList.add('active')
}

closeBtn.onclick = function(e) {
    e.stopPropagation()
    navMenu.classList.remove('active')
}
menuItems.forEach(function(item) {
    item.onclick = function(e) {
        console.log(e.target)
        navMenu.classList.remove('active')
    }
})
menu.onclick = function(e) {
    e.stopPropagation()
}

navMenu.onclick = function(e) {
    if(navMenu) {
        navMenu.classList.remove('active')
    }
}