const navNestedLinks = document.querySelectorAll('.nested')
const navNestedUlOne = document.querySelector('.header__nav-item--nest1')
const navNestedUlTwo = document.querySelector('.header__nav-item--nest2')
const navBar = document.querySelector('.header__navigation')
const faqItems = document.querySelectorAll('.faq__list-item')
const hamburger = document.querySelector('.header__hamburger')
const mobileNavMenu = document.querySelector('.header__nav-mobile')
const mobileNavMenuClose = document.querySelector('.mobile-close')
const galleryImages = document.querySelectorAll('.photo-gallery__gallery-img')
const galleryModal = document.querySelector('.gallery__modal')
const galleryModalImage = document.querySelector('.gallery__modal-image')

// Navbar Nested Links hover
navNestedLinks.forEach(btn => {
    btn.addEventListener('mouseover', (e)=>{
        if (e.target.innerText === 'About ') {
            navNestedUlOne.classList.remove('hide')
        } else if(e.target.innerText === 'More Links'){
            navNestedUlTwo.classList.remove('hide')
        }
    })
    btn.addEventListener('mouseleave', (e)=>{
        if (e.target.classList.contains('nest2')){
            navNestedUlTwo.classList.add('hide')
        } else {
            navNestedUlOne.classList.add('hide')
            navNestedUlTwo.classList.add('hide')
        }
    })
})

// Navbar onScroll
window.addEventListener('scroll', () =>{
    const scroll = window.scrollY
    if (scroll > 0){
        navBar.classList.add('sticky')
    } else {
        navBar.classList.remove('sticky')
    }
})

// FAQ items active class
faqItems.forEach(item =>{
    item.addEventListener('click', (e) => {
        if(e.target.tagName === 'H3'){
            faqItems.forEach(item => item.classList.remove('faq__list-item--active'))
            e.target.parentElement.parentElement.classList.add('faq__list-item--active')
        }
    })
})


// Happy Customers Carousel using Slick
$(document).ready(function(){
    $('.happy-customers__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }},
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }}
        ]
    })
})

// -- Animations: OnScroll Animations with GSAP
gsap.registerPlugin(ScrollTrigger)

gsap.fromTo('.animation-ee', { y: 200, opacity: 0} ,
 {
    scrollTrigger: { 
        trigger: ".animation-ee-trigger", 
        toggleActions: "restart none none none",
        // toggleActions: "restart none reverse none",
        start: "-200px center", 
        // end: "-200px center",
        // markers: true,
        // scrub: true
    },
    duration: 1, 
    y: 0, 
    opacity: 1, 
    stagger: 0.2, 
   
    ease: "power1"
})

// Navbar hamburger toggle
hamburger.addEventListener('click', () => {
    mobileNavMenu.classList.remove('hide')
})

mobileNavMenuClose.addEventListener('click', ()=>{
    mobileNavMenu.classList.add('hide')
})


// Things to do:
// [ ] Animations
// [x] Mobile menu CLICK (check original)
// [x] Routing to sections
// [x] Modal to picture gallery


// Gallery modal
const openImageModal = (e) => {
    const src = e.target.src
    galleryModal.classList.remove('hide')
    galleryModalImage.src = src
}

const closeImageModal = (e) => {
    // console.log(e.target)
    if(e.target.classList.contains('gallery__modal')){
        galleryModal.classList.add('hide')
    }
    if(e.target.classList.contains('gallery__modal-content')){
        galleryModal.classList.add('hide')
    }
    else if(e.key === "Escape" && !galleryModal.classList.contains('hide')){
        galleryModal.classList.add('hide')
    }
}

galleryImages.forEach(image => image.addEventListener('click', openImageModal))
galleryModal.addEventListener('click', closeImageModal)
document.addEventListener('keyup', closeImageModal)