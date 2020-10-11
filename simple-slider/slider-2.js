const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const list = document.querySelector("#list");
const style = window.getComputedStyle(list);
const items = document.querySelectorAll(".item");
const item = document.querySelector("#list");


const itemWidth = window.getComputedStyle(items[0]).width;
console.log(itemWidth);
const step = parseInt(itemWidth, 10);
const numItems = 300/step;
const maxWidth = (items.length - numItems) * step;
const minWidth = 0;
let current = 0;

list.style.right = current;

rightBtn.addEventListener("click",a => {
    a.preventDefault();

    if (current < maxWidth) {
        current += step;
        list.style.right = `${current}px`;
    }
})

leftBtn.addEventListener("click",a => {
    a.preventDefault();

    if (current > minWidth) {
        current -= step;
        list.style.right = `${current}px`;
    }
})