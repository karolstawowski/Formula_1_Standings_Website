import * as elements from './variables/documentElements';

export function dataLoadingScreen(darkTheme) {
  darkTheme
    ? (elements.mainContent.innerHTML = `<div id="loading-screen" class="loading-screen-dark"></div>`)
    : (elements.mainContent.innerHTML = `<div id="loading-screen" class="loading-screen"></div>`);

  const img = document.createElement('img');
  img.src = new URL('../assets/tire.png', import.meta.url);
  img.className = 'loading-image';
  document.getElementById('loading-screen').appendChild(img);
}
