const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");
let currentSlide = 0;

slides[currentSlide].style.display = "block";
slides[currentSlide].style.opacity = 1;

function getAllSlides() {
    for (let i = currentSlide; i < slides.length; i++) {
        if (i === currentSlide) {
            slides[i].style.display = "block";
            slides[i].style.opacity = 1;
        } else {
            slides[i].style.display = "none";
            slides[i].style.opacity = 0;
        }
    }
}

nextBtn.addEventListener("click", function(e) {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }

    getAllSlides();
});

prevBtn.addEventListener("click", function(e) {
    if (currentSlide <= 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }

    getAllSlides();
});
