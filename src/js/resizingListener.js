import * as elements from "./variables/documentElements";

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
      elements.filler.style.visibility = "hidden";
      elements.main.style.position = "static";
      elements.main.style.marginLeft = "0%";
      document.getElementById("navbar").style.marginLeft = "0%";
    }, delay);
  });
}
