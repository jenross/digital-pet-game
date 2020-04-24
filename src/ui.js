export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};
//put function name again for debugging (will show up in call stack)
export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text = "") {
  document.querySelector(
    ".modal"
  ).innerHTML = `<div class="modal-inner">${text}</div>`;
};
