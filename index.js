(function main() {
  const windowOpenEl = document.querySelector(".window-open");
  const windowCloseEl = document.querySelector(".window-close");
  const windowEl = document.querySelector(".window");

  windowOpenEl.addEventListener("click", () => {
    windowEl.style.display = "flex";
  });
  windowCloseEl.addEventListener("click", () => {
    windowEl.style.display = "";
  });
})();
