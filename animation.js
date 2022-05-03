const leftToRight = document.querySelectorAll('.left-to-right')
const rightToLeft = document.querySelectorAll('.right-to-left')
const botToTop = document.querySelectorAll('.bottom-to-top')

function animationLeftToRight() {
    const windowScreen = window.innerHeight
    if(leftToRight) {
        leftToRight.forEach(function(element) {
            const top = element.getClientRects()[0].top
            const bottom = element.getClientRects()[0].bottom
        if(top < windowScreen && bottom > 0) {
            element.classList.add('active')
        }
        })
    }
  
}
function animationRightToLeft() {
    const windowScreen = window.innerHeight
    if(rightToLeft) {
        rightToLeft.forEach(function(element) {
            const top = element.getClientRects()[0].top
            const bottom = element.getClientRects()[0].bottom
        if(top < windowScreen && bottom > 0) {
            element.classList.add('active')
        }
        })
    }  
}

function animationBotToTop() {
    const windowScreen = window.innerHeight
    if(botToTop) {
        botToTop.forEach(function(element) {
            const top = element.getClientRects()[0].top
            const bottom = element.getClientRects()[0].bottom
        if(top < windowScreen && bottom > 0) {
            element.classList.add('active')
        }
        })
    }  
}
window.onscroll = function() {
    animationRightToLeft()
    animationLeftToRight()
    animationBotToTop()
}
animationRightToLeft()
animationLeftToRight()
animationBotToTop()