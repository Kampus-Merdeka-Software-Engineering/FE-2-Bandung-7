/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50
        ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, { delay: 600, distance: '100px', interval: 100 })
sr.reveal(`.about__data, .join__image`, { origin: 'right' })
sr.reveal(`.about__image, .join__data`, { origin: 'left' })
sr.reveal(`.popular__card`, { interval: 200 })



// ================================================== contact us ============================================================
// mengambil form element 
const formElement = document.getElementById("input-form");
// menambhakan form event listener 
formElement.addEventListener("submit", (event) => {
    event.preventDefault();// biar tidak mereflesh 
    // ambil input elemnt di html
    const inputElementName = document.getElementById("input-name")
    console.log(inputElementName.value);
    const inputElementEmail = document.getElementById("input-email")
    console.log(inputElementEmail.value);
    const inputElementMessage = document.getElementById("input-message")
    console.log(inputElementMessage.value);
    // mengahapus input value setelah submit 
    inputElementName.value = "";
    inputElementEmail.value = "";
    inputElementMessage.value = "";
})

