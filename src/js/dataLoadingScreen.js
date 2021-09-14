import * as elements from "./variables/documentElements";

export function dataLoadingScreen(darkTheme) {
  if (darkTheme) {
    elements.mainContent.innerHTML = `<div id="loading-screen" class="loading-screen-dark"></div>`;
  } else {
    elements.mainContent.innerHTML = `<div id="loading-screen" class="loading-screen"></div>`;
  }

  let img = document.createElement("img");
  img.src = new URL("../assets/logo.png", import.meta.url);
  img.className = "loading-image";
  document.getElementById("loading-screen").appendChild(img);
}
