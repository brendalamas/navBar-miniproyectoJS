const link = document.querySelector (".links")
const navToggle = document.querySelector(".nav-toggle")

navToggle.onclick = () => {
    link.classList.toggle ("show-links")
}