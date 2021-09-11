import * as elements from "./variables/documentElements";

export function dataLoadingScreen() {
  elements.mainContent.innerHTML = `<div class="loading-screen"><img class="loading-image" src="src/assets/logo.png"></div>`;
}
