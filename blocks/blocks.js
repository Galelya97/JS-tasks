const numberSel = document.querySelector(".number");
const colorSel = document.querySelector(".color");
const blocks = document.querySelector(".blocks");

const createMarkup = (number) => {
  let markup = "";

  for (let i = 0; i < number; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML;
  }
  return markup;
};

numberSel.addEventListener("change", (e) => {
  const number = e.target.value;
  const markup = createMarkup(number);

  blocks.innerHTML = markup;
});

const bgColor = (block, color) => {
  block.style.backgroundColor = color;
};
let changed = false;

colorSel.addEventListener("change", (e) => {
  const color = e.target.value;
  const items = blocks.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items[i];
    const blockNumber = i + 1;
    let colorToApply = "";

    if (changed) {
        colorToApply = blockNumber % 2 !== 0 ? color : "#fff";
    } else {
         colorToApply = blockNumber % 2 === 0 ? color : "#fff";
      }
      bgColor(currentBlock, colorToApply);
  }
  });
