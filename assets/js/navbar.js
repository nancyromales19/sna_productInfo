const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const productsToggle = document.getElementById("productsToggle");
const productsMenu = document.getElementById("productsMenu");

productsToggle.addEventListener("click", (e) => {
    e.preventDefault();
    productsMenu.classList.toggle("show");
});


document.addEventListener("click", (e) => {
    if (!productsToggle.contains(e.target) && !productsMenu.contains(e.target)) {
        productsMenu.classList.remove("show");
    }
});
