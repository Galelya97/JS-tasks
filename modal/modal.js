const btn = document.querySelector("#openOverlay");
const successModal = createModal("The message has been sent, thank you!");

btn.addEventListener("click", (a) => {
  document.body.appendChild(successModal);
});

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", (a) => {
    if (a.target === overlayElement) {
      closeElement.click();
    }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("modal-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.innerHTML = "x";
  closeElement.href = "#";

  closeElement.addEventListener("click", (a) => {
    a.preventDefault();
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}
