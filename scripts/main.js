const cartButton = document.querySelector('.cart-button')
const modal = document.querySelector('.modal')
const modalHeaderButton = document.querySelector('.modal__header__button')

cartButton.addEventListener('click', () => {
    modal.classList.add('is-open-modal')
})

modalHeaderButton.addEventListener('click', () => {
    modal.classList.remove('is-open-modal')
})

new WOW().init()