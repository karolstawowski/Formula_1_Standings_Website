import * as elements from "./variables/getElementsFromDocument";

let timeout = false;
let delay = 200;

export function listenToResize() {
  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (window.innerWidth > 850) {
        elements.sideBar.style.visibility = "visible";
      }
      if (window.innerWidth <= 850) {
        elements.sideBar.style.visibility = "hidden";
        elements.filler.style.visibility = "hidden";
        elements.main.style.marginLeft = "0%";
        elements.footer.style.marginLeft = "0%";
      }
    }, delay);
  });
}
