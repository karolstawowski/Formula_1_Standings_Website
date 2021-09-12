import * as elements from "./variables/documentElements";

let timeout = false;
let delay = 200;

let previousHeight = window.innerHeight;

export function listenToResize() {
  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (window.innerHeight === previousHeight) {
        elements.sideBar.classList.remove("sidebar-slide");
        elements.main.classList.remove("main-slide");
        elements.filler.classList.remove("filler-slide");
        elements.navbar.classList.remove("navbar-slide");
        elements.sideBar.classList.remove("sidebar-hide");
        elements.filler.classList.remove("filler-hide");
        elements.main.classList.remove("main-hide");
        elements.navbar.classList.remove("navbar-hide");
      }
      previousHeight = window.innerHeight;
    }, delay);
  });
}
