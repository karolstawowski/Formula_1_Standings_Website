export function createSidebarButtons() {
  const sidebarContent = document.getElementById('sidebar-button-wrapper');
  for (let i = 2022; i > 1949; i--) {
    const sidebarItem = document.createElement('li');
    const sidebarButton = document.createElement('button');
    sidebarButton.classList.add('sidebar-button');
    sidebarButton.setAttribute('fetch-button', '');
    sidebarButton.id = i;
    sidebarButton.innerHTML = i;
    sidebarItem.append(sidebarButton);
    sidebarContent.append(sidebarItem);
  }
}
