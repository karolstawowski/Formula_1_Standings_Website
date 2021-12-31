export function createSidebarButtons() {
  const sidebarContent = document.getElementById("sidebar-button-wrapper");
  for (let i = 2022; i > 1949; i--) {
    const sidebarItem = document.createElement("li");
    const sidebarButton = document.createElement("button");
    sidebarButton.classList.add("sidebar-button");
    sidebarButton.setAttribute("fetch-button", "");
    sidebarButton.id = i;
    sidebarButton.innerHTML = i;
    // if (i / 10 < 1) {
    //   sidebarButton.id = "200" + i;
    //   sidebarButton.innerHTML = "200" + i;
    // } else {
    //   sidebarButton.id = "20" + i;
    //   sidebarButton.innerHTML = "20" + i;
    // }
    sidebarItem.append(sidebarButton);
    sidebarContent.append(sidebarItem);
  }
}
