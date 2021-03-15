const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children);

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

const slideWidth = slides[0].getBoundingClientRect().width

// get rid of stacking
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current');
    targetSlide.classList.add('current');
}

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide )
})

prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide )
})