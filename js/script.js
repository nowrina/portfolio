const words = [
    "Electronics Engineer",
    "IoT Developer",
    "Embedded Systems Enthusiast",
    "Creative Designer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}
function toggleMenu(){

    document.getElementById("nav-links")
    .classList.toggle("active");

}

