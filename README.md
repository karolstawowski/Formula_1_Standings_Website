# Formula 1 Standings Website

![Language](https://img.shields.io/badge/language-JavaScript-3993fa)
![License](https://img.shields.io/github/license/karolstawowski/Formula_1_Standings_Website?color=3993fa)

### <a href="https://karolstawowski.github.io/Formula_1_Standings_Website/">Click here to see website!</a>

## Description

Formula 1 Standings Website is a huge project for me. Official Formula 1 website provides World Championship standings in an inelegant way.
I wanted to make an enviroment, which allows the F1 fan to seek for necessary information and feel like he's at home. Formula 1 Standings Website shares official Formula 1 World Championship standings since the beginning of competition, 1950.

<img src="./website_preview.png">

### Special thanks to <a href="https://www.reddit.com/user/mondomando">@mondomando</a> for allowing me to use his <a href="https://www.reddit.com/r/formula1/comments/lx6d0y/oc_ayrton_senna_lowres_art/">low-res McLaren art</a>, which eventually become the logo of this project!

### You can find here:

- races information - name of Grand Prix, location, date and time of the race and name of circuit,
- drivers' standings - information about drivers, their teams and number of points they acquired during the season,
- construstor's standings - information about constructors, their origin and number of points they aquired.

## Installation

To run Formula 1 Standings Website locally, you need both <a href="https://nodejs.org/en/download/">Node.js enviroment</a> and <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm package manager</a> installed.

```bash
git clone https://github.com/karolstawowski/Formula_1_Standings_Website.git
```

```bash
yarn install
```

```bash
yarn start
```

## App structure

```bash
📦Formula_1_Standings_Website
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜Email-Mark-120px.png
 ┃ ┃ ┣ 📜favicon.png
 ┃ ┃ ┣ 📜GitHub-Mark-120px-plus.png
 ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┣ 📜PL_flag.svg
 ┃ ┃ ┣ 📜tire.png
 ┃ ┃ ┗ 📜UK_flag.svg
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂variables
 ┃ ┃ ┃ ┣ 📜colors.js
 ┃ ┃ ┃ ┗ 📜documentElements.js
 ┃ ┃ ┣ 📜changeInterfaceLanguage.js
 ┃ ┃ ┣ 📜colorDefaultButtons.js
 ┃ ┃ ┣ 📜convertTZDToLocalTime.js
 ┃ ┃ ┣ 📜countryCodes.js
 ┃ ┃ ┣ 📜dataLoadingScreen.js
 ┃ ┃ ┣ 📜dateConversionFunctions.js
 ┃ ┃ ┣ 📜generateTable.js
 ┃ ┃ ┣ 📜getConstructors.js
 ┃ ┃ ┣ 📜getDrivers.js
 ┃ ┃ ┣ 📜getRaces.js
 ┃ ┃ ┣ 📜localStorage.js
 ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┣ 📜sidebarButtonsColorSet.js
 ┃ ┃ ┣ 📜sidebarButtonsCreator.js
 ┃ ┃ ┣ 📜sidebarSwitch.js
 ┃ ┃ ┗ 📜windowResizing.js
 ┃ ┗ 📂scss
 ┃ ┃ ┣ 📂variables
 ┃ ┃ ┃ ┣ 📜animationDuration.scss
 ┃ ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┃ ┣ 📜_fontSize.scss
 ┃ ┃ ┃ ┗ 📜_mainContentWidth.scss
 ┃ ┃ ┣ 📜cleanStyles.scss
 ┃ ┃ ┣ 📜darkTheme.scss
 ┃ ┃ ┣ 📜dataLoadingScreen.scss
 ┃ ┃ ┣ 📜emailButton.scss
 ┃ ┃ ┣ 📜flags.scss
 ┃ ┃ ┣ 📜footer.scss
 ┃ ┃ ┣ 📜main.scss
 ┃ ┃ ┣ 📜mainContainer.scss
 ┃ ┃ ┣ 📜navbar.scss
 ┃ ┃ ┣ 📜parentContainers.scss
 ┃ ┃ ┣ 📜scrollbar.scss
 ┃ ┃ ┣ 📜sidebar.scss
 ┃ ┃ ┣ 📜table.scss
 ┃ ┃ ┣ 📜themeSwitch.scss
 ┃ ┃ ┗ 📜_include-media.scss
 ┣ 📜.gitignore
 ┣ 📜index.html
 ┣ 📜LICENSE
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vite.config.js
```

## App usage

On the navbar you can: open sidebar (mobile only), switch between light and dark theme, change language of the website.

To get current Formula 1 standings select one of the buttons on the navigation bar (top of the screen) - races, driver standings or constructor standings.

On the sidebar you can select a season to display information about.

Footer contains: link to my github profile and button to copy my email address to your clipboard.

## Resources

<a href="http://ergast.com/mrd/">Ergast Developer API</a>, <a href="https://eduardoboucas.github.io/include-media/">@include-media</a>, <a href="https://flagpedia.net/download/api">Flagpedia.net</a>

## Tools and technologies used

HTML, SCSS, JavaScript, Node.js, npm, ParcelJS, ViteJS.
