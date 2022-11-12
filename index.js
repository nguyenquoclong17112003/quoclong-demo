const buyBtns = document.querySelectorAll(".js-place-buy");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

for (const btn of buyBtns) {
  btn.addEventListener("click", function () {
    modal.classList.add("open");
  });
}

modalClose.addEventListener("click", function () {
  modal.classList.remove("open");
});

modal.addEventListener("click", function () {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
