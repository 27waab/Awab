let toggler = document.querySelector(".toggle");
let nav = document.querySelector("header nav");
let closeBtn = document.querySelector(".close");
let link = document.querySelectorAll("header nav a");

// Nav Bar Section
toggler.onclick = () => {
    nav.classList.add("open");
};
closeBtn.onclick = () => {
    nav.classList.remove("open");
};
document.onkeyup = (e) => {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    };
};
link.forEach((e) => {
    e.onclick = () => {
        nav.classList.remove("open");
    };
});