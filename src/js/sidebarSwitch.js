import * as elements from './variables/documentElements';

export function listenToSidebarSwitch() {
  elements.menuButton.addEventListener('click', () => {
    elements.emailIcon.style.visibility = 'hidden';
    elements.footer.style.visibility = 'hidden';
    elements.sideBar.classList.add('sidebar-slide');
    elements.filler.classList.add('filler-slide');
    elements.main.classList.add('main-slide');
    elements.navbar.classList.add('navbar-slide');
    elements.sideBar.classList.remove('sidebar-hide');
    elements.filler.classList.remove('filler-hide');
    elements.main.classList.remove('main-hide');
    elements.navbar.classList.remove('navbar-hide');
    elements.emailPopup.classList.remove('show-popup');

    elements.filler.addEventListener('click', () => {
      elements.emailIcon.style.visibility = 'visible';
      elements.footer.style.visibility = 'visible';
      elements.sideBar.classList.remove('sidebar-slide');
      elements.main.classList.remove('main-slide');
      elements.filler.classList.remove('filler-slide');
      elements.navbar.classList.remove('navbar-slide');
      elements.sideBar.classList.add('sidebar-hide');
      elements.filler.classList.add('filler-hide');
      elements.main.classList.add('main-hide');
      elements.navbar.classList.add('navbar-hide');
    });
  });
}
