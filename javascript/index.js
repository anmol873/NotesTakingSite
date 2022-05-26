console.log("This is notes Taking Application ");

// if user added the notes then aaded it inot local Storage


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    console.log("Clicked on add note butn");
    let notesHeading = document.getElementById("addHeading");
    let notesContent = document.getElementById("addContent");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if(notes == null)
    {
         notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(notesHeading.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    console.log(notesHeading); 
    notesHeading.value = '';
    console.log(notes);
})