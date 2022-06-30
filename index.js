let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('listdisplay');
let inputField = document.getElementById('text');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = text.value;
    listdisplay.appendChild(paragraph);
    text.value = " ";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.cursor = "pointer";
    })
    paragraph.addEventListener('dblclick', function() {
        listdisplay.removeChild(paragraph);
    })
})