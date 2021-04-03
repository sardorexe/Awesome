let btn = document.getElementById("btn");
let menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("sticky");
})