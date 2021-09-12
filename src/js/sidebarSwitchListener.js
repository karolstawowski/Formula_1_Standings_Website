import * as elements from "./variables/documentElements";

export function listenToSidebarSwitch() {
  elements.menuButton.addEventListener("click", () => {
    elements.sideBar.style.visibility = "visible";
    elements.filler.style.visibility = "visible";
    elements.main.style.marginLeft = "50%";
    elements.navbar.style.marginLeft = "50%";
    elements.main.style.position = "fixed";
    elements.main.style.top = "0";
    elements.emailIcon.style.visibility = "hidden";
    elements.emailPopup.classList.remove("show-popup");
    elements.sideBar.classList.add("slide");
    elements.filler.addEventListener("click", () => {
      elements.sideBar.style.visibility = "hidden";
      elements.filler.style.visibility = "hidden";
      elements.main.style.position = "static";
      elements.main.style.marginLeft = "0%";
      elements.navbar.style.marginLeft = "0%";
      elements.emailIcon.style.visibility = "visible";
    });
  });
}
