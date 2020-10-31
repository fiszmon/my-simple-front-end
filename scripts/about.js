let slideIndex = 1;

function init() {
    const dots = document.getElementsByClassName("dots")[0];
    let l = document.getElementsByClassName("mySlides").length;
    for (let i=1;i<=l;i++)
        dots.innerHTML += '<span class="dot" onclick="currentSlide('+ i +')"></span>';
    showSlides(1);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_dot", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active_dot";
}