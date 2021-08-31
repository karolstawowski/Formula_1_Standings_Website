import * as colors from "./variables/colors";

export function colorDefaultButtons() {
  document.getElementById("2021").style.backgroundColor =
    colors.sidebarButtonSelectedColor;
  document.getElementById("races").style.backgroundColor =
    colors.mainButtonSelectedColor;
}
