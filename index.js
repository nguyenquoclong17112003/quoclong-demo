const buyBtns = document.querySelectorAll(".js-place-buy");
const modal = document.querySelector(".js-modal");
const iconClose = document.querySelector(".js-icon-close");
const modalContainer = document.querySelector(".js-modal-container");

function showModal() {
  modal.classList.add("open");
}

function matModal() {
  modal.classList.remove("open");
}

for (const btn of buyBtns) {
  btn.addEventListener("click", showModal);
}

iconClose.addEventListener("click", matModal);
modal.addEventListener("click", matModal);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
