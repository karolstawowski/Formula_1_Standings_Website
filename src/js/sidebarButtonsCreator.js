export function createSidebarButtons() {
  const sidebarContent = document.getElementById("sidebar-button-wrapper");
  for (let i = 21; i > -1; i--) {
    const sidebarItem = document.createElement("li");
    const sidebarButton = document.createElement("button");
    sidebarButton.classList.add("sidebar-button");
    sidebarButton.setAttribute("fetch-button", "");
    if (i / 10 < 1) {
      sidebarButton.id = "200" + i;
      sidebarButton.innerHTML = "200" + i;
    } else {
      sidebarButton.id = "20" + i;
      sidebarButton.innerHTML = "20" + i;
    }
    sidebarItem.append(sidebarButton);
    sidebarContent.append(sidebarItem);
  }
}
