export function createSidebarButtons() {
    let sidebarContent = document.getElementById("sidebar-content");
    let innerContent = "";
    innerContent += "<h2 class=\"sidebar-title\" id=\"sidebar-title\"> Season </h2>";
    innerContent += "<ol>";
    for (i = 21; i > -1; i--) {
        if (i.toString().length == 1) {
            innerContent += `<li class="sidebar-button" id="200${i}" fetch-button> 200${i} </li>`;
        }
        else {
            innerContent += `<li class="sidebar-button" id="20${i}" fetch-button> 20${i} </li>`;
        }
    }
    innerContent += "</ol>";
    sidebarContent.innerHTML = innerContent;
}