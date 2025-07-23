function gebid(id) {
    return document.getElementById(id);
}
const unolist = gebid("unolist");
const table = gebid("table");

function showtable() {
    if (table.style.display === "none") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
        codebutton.textContent = "Show Table";
    }
}
function showlist() {
    if (unolist.style.display === "none") {
        unolist.style.display = "block";
        codebutton.textContent = "Hide list";
    } else {
        unolist.style.display = "none";
    }
}