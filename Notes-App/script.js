const createButton = document.getElementById("create-btn");
const notesContainer = document.querySelector(".notes-container");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("spellcheck", "false");

    img.src = "./images/delete.png";
    img.className = "delete-btn";

    notesContainer.appendChild(inputBox).appendChild(img);

    inputBox.onkeyup = function () {
        updateStorage();
    };
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});