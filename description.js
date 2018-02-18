let text = document.getElementById('text');
let title = document.getElementById('descriptionTitle');
let description = document.getElementById("description");
let button = document.getElementById("button");

function submitOnClick() {
    button.setAttribute("onclick", "editOnClick()");
    button.innerHTML = "Edit Description";
    text.readOnly = true;
    title.innerHTML = "Description of Build";
}

function editOnClick() {
    button.setAttribute("onclick", "submitOnClick()");
    button.innerHTML = "Submit";
    text.readOnly = false;
    title.innerHTML = "Edit Your Description";
}