let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

document.querySelector(".next").onclick = function () {
    current++;
    if (current >= slides.length) current = 0;
    showSlide(current);
};

document.querySelector(".prev").onclick = function () {
    current--;
    if (current < 0) current = slides.length - 1;
    showSlide(current);
};

// تعویض خودکار هر 8 ثانیه
setInterval(() => {
    current++;
    if (current >= slides.length) current = 0;
    showSlide(current);
}, 8000);