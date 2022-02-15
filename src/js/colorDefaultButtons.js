import * as colors from './variables/colors';

export function colorDefaultButtons(yearGlobal) {
  document.getElementById(yearGlobal).style.backgroundColor =
    colors.sidebarButtonSelectedColor;
  document.getElementById('races').style.backgroundColor =
    colors.navbarButtonSelectedColor;
}
