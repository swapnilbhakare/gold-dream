// slides fade animation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}
setInterval(function() {
    plusSlides(1);
}, 3 * 1000);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

// slides fade animation end

// background - color
function scrollWin() {


    bodyEl = document.querySelector("body")
    if (window.pageYOffset >= 500) {
        bodyEl.classList.add("changeColor")
        bodyEl.style.color = "white"

    }
    if (window.pageYOffset <= 500) {
        bodyEl.classList.remove("changeColor")
        bodyEl.style.color = "black"

    }
}