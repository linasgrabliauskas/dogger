const navNestedLinks = document.querySelectorAll('.nested')
const navNestedUlOne = document.querySelector('.header__navigation__nav__list__item__nested-one')
const navNestedUlTwo = document.querySelector('.header__navigation__nav__list__item__nested-two')
const navBar = document.querySelector('.header__navigation')
const faqItems = document.querySelectorAll('.faq__questions__question__item')
const carouselContainer = document.querySelector('.happy-customers__testimonials-list')
const carouselItems = Array.from(document.querySelectorAll('.happy-customers__testimonials-list__item'))
const carouselArrows = document.querySelectorAll('.happy-customers__arrows__arrow')

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
        if (e.target.classList.contains('nested-level-two')){
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
            faqItems.forEach(item => item.classList.remove('active'))
            e.target.parentElement.parentElement.classList.add('active')
        }
    })
})

// Happy Customers Carousel
console.log(carouselArrows)



{/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div> */}


// slidesNum: Desktop = 3, Tablet = 2, Mobile = 1
let slidesNum = 3;

showNextSlide(slidesNum);

// function nextSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showNextSlide(slidesNum) {
  let hiddenSlideIndex

    let firstItem = carouselItems.shift()
    firstItem.classList.add('hide')
    carouselItems.push(firstItem)
    carouselItems[2].classList.remove('hide')
    console.log(carouselItems)
    showSlides(carouselItems)
}

function showPreviousSlide(slidesNum) {
    let hiddenSlideIndex

    // last click is NextSlide
    if (carouselItems[3].classList.contains('hide')){
        carouselItems[3].classList.remove('hide')
        let lastItem = carouselItems.pop()
        carouselItems.unshift(lastItem)
        carouselItems[3].classList.add('hide')
    }

    // ShowSlides
    showSlides(carouselItems)
}

function showSlides(currSlidesArr){
    carouselContainer.innerHTML = ''
    currSlidesArr.forEach(item => carouselContainer.appendChild(item))
}




carouselArrows.forEach(arrow =>{
    arrow.addEventListener('click', e =>{
        if(e.target.classList.contains('right')){
            showNextSlide()
        } else {
            showPreviousSlide()
        }
    })
})