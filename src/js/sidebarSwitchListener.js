import * as elements from "./variables/getElementsFromDocument";

export function listenToSidebarSwitch() {
  elements.menuButton.addEventListener("click", () => {
    elements.sideBar.style.visibility = "visible";
    elements.filler.style.visibility = "visible";
    elements.main.style.marginLeft = "40%";
    elements.main.style.position = "fixed";
    elements.main.style.top = "0";
    elements.filler.addEventListener("click", () => {
      elements.sideBar.style.visibility = "hidden";
      elements.filler.style.visibility = "hidden";
      elements.main.style.position = "static";
      elements.main.style.marginLeft = "0%";
    });
  });
}
