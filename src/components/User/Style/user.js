const navBar = document.querySelector("nav")
var menuBtns = document.querySelectorAll(".menu-icon")
var overlay = document.querySelector(".overlay")

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open")
    })
})

overlay.addEventListener("click", () => {
    navBar.classList.remove("open")
});