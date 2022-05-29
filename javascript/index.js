console.log("This is notes Taking Application ");

// if user added the notes then aaded it inot local Storage

showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    console.log("Clicked on add note butn");
    let notesHeading = document.getElementById("addHeading");
    let notesContent = document.getElementById("addContent");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(notesHeading.value);
    notesObj.push(notesContent.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    notesHeading.value = '';
    notesContent.value = '';
    // console.log(notes);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    for (let index = 0; index < notesObj.length; index++) {
        html += ` <div class="notesCard card" style="width: 18rem;">
        <div class="card-body notes-card-body">
            <h5 class="card-title">${notesObj[index]}</h5>
            <p class="card-text">${notesObj[index + 1]}</p>
            </div>
            <button class="btn btn-primary deleteButton" id ="${index}"  onclick = "deleteNode(this.id)">Delete Notes</button>
    </div>`
        // console.log(index);
        index = index + 1;
        // console.log(index);
    }


    let notesElement = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElement.innerHTML = html;
    }
    else {
        notesElement.innerHTML = `<div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>`;
    }
}


//function of deleting the notes

function deleteNode(index) {
    console.log("I am deleting " + index);
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,2);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchNotes");
search.addEventListener("input",function()
{
    let inputVal = search.value;
    console.log("input listen fire",inputVal);
    let notCard = document.getElementsByClassName('notesCard');
    console.log(notCard);
    console.log("outside the for each")
    Array.from(notCard).forEach(function(element){
            let cardTxt = element.getElementsByTagName("p")[0].innerText;
            cardTxt.toLowerCase();
            inputVal.toLowerCase();
            console.log("inside the for ech loop");
            if(!cardTxt.toLowerCase().includes(inputVal.toLowerCase()))
            {
                element.style.display = "none";
            }
            else
            {
                element.style.display = "block";
            }

    })
})