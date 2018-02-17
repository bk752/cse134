let editBox = document.getElementById('descriptionEdit');
let submitBox = document.getElementById('descriptionFill');
let editText = document.getElementById('descEditText');
let fillText = document.getElementById('descFillText');
let descTitle = document.getElementById('descriptionTitle');
function submitOnClick() {
    editBox.style.display = "none";
    submitBox.style.display = "inline";
    fillText.innerHTML = editText.value;
    descTitle.innerHTML = "Description of Build"
}


function editOnClick() {
    editBox.style.display = "inline";
    submitBox.style.display = "none";
    descTitle.innerHTML = "Edit Your Description";
}