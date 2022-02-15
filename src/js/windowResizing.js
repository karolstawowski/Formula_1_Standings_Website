import * as elements from './variables/documentElements';

const delay = 200;
let timeout = false;

let previousHeight = window.innerHeight;

export function listenToResize() {
  window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (window.innerHeight === previousHeight || window.innerWidth > 850) {
        elements.sideBar.classList.remove('sidebar-slide');
        elements.main.classList.remove('main-slide');
        elements.filler.classList.remove('filler-slide');
        elements.navbar.classList.remove('navbar-slide');
        elements.sideBar.classList.remove('sidebar-hide');
        elements.filler.classList.remove('filler-hide');
        elements.main.classList.remove('main-hide');
        elements.navbar.classList.remove('navbar-hide');
        elements.emailIcon.style.visibility = 'visible';
        elements.footer.style.visibility = 'visible';
      }
      previousHeight = window.innerHeight;
    }, delay);
  });
}
