const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const list = document.querySelector("#list");
const style = window.getComputedStyle(list);
const items = document.querySelectorAll(".item");
const item = document.querySelector("#list");

function loop(direction, a){
    a.preventDefault();

    if(direction === "right") {
        item.appendChild(item.firstElementChild);
    } else {
        item.insertBefore(item.lastElementChild, item.firstElementChild)
    }
};

rightBtn.addEventListener("click", (a) => {
    loop("right", a)
});

leftBtn.addEventListener("click", (a) => {
    loop("left", a);
});