const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const list = document.querySelector("#list");
const style = window.getComputedStyle(list);
const items = document.querySelectorAll(".item");
const item = document.querySelector("#list");


rightBtn.addEventListener("click",a => {
    a.preventDefault();
    let currentRight = parseInt(style.right);
    if (currentRight < 500) {
       currentRight += 100;
        list.style.right = `${currentRight + 100}px`;
  }
});

leftBtn.addEventListener("click",a => {
    a.preventDefault();
    let currentRight = parseInt(style.right);
    if (currentRight > 0) {
        list.style.right = `${currentRight - 100}px`;
    } });