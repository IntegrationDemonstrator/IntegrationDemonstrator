//

function collapse_menu() {
    let menu = document.getElementsByClassName("menu")[0];
    menu.classList.toggle("collapsed");
    menu.parentElement.classList.toggle("is-3-desktop");
    menu.parentElement.classList.toggle("is-3-tablet");
    menu.parentElement.classList.toggle("is-1-desktop");
    menu.parentElement.classList.toggle("is-1-tablet");

    let columns = menu.parentElement.parentElement.children;
    columns[1].classList.toggle("is-9-tablet");
    columns[1].classList.toggle("is-9-desktop");
    columns[1].classList.toggle("is-11-tablet");
    columns[1].classList.toggle("is-11-desktop");

    for(let elem of menu.getElementsByClassName("disabled-tooltip")) {
        if("data-tooltip-disabled" in elem.attributes) {
            let content = elem.attributes["data-tooltip-disabled"].value;
            elem.removeAttribute("data-tooltip-disabled");
            elem.setAttribute("data-tooltip", content);
        }
        else {
            let content = elem.attributes["data-tooltip"].value;
            elem.removeAttribute("data-tooltip");
            elem.setAttribute("data-tooltip-disabled", content);
        }
    }
}