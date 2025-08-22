const closeBtn = document.getElementById('close'),
    currDate = document.querySelector('.date'),
    addNoteWrapper = document.querySelector('.add-note-wrapper'),
    addNoteBox = document.querySelector('.add-note-box'),
    openBlankNote = document.querySelector('.add-btn'),
    h4 = document.querySelector('.header h4'),
    addBtn = document.getElementById('addBtn')

let input = document.getElementById('input'),
    title = document.querySelector('.title'),
    desc = document.getElementById('desc')

const months = ['January', 'february', 'March', ' April', ' May', 'June', 'July', 'August', 'September', 'November', 'December']

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

let isUpdate = false, updateId;

//open for adding task
openBlankNote.onclick = () => {
    addNoteWrapper.classList.remove('show')
    h4.textContent = "Add a new Note"
    addBtn.textContent = "Add Note"

}
closeBtn.onclick = () => {
    isUpdate = false
    addNoteWrapper.classList.add('show')

    input.value = '';
    desc.value = '';

    h4.textContent = "Add a new Note"
    addBtn.textContent = "Add Note"
}
//open for adding task ends
//setting date
function setDate() {
    let date = new Date();
    let month = months[date.getMonth()]
    let day = date.getDay()
    let year = date.getFullYear()
    return `${month} ${day}, ${year}`
}

addBtn.onclick = () => {
    const inputValue = input.value.trim(),
        descValue = desc.value.trim();
    if (inputValue == '' && descValue == '') {
        alert('Please write something in notes to add ')
        return
    }
    else if (title||desc) {
        
        let noteInfo = {
            title: inputValue,
            desc: descValue,
            currDate: setDate()
        }
        if(!isUpdate){
            notes.push(noteInfo)
        }else{
            isUpdate = false;
            notes[updateId] = noteInfo
        }


        localStorage.setItem('notes', JSON.stringify(notes));
        addNote();
    }

}

function addNote() {
    document.querySelectorAll('.note-wrapper').forEach(note => note.remove())
    notes.forEach((note, index) => {
        let liTag = `<li class="note-wrapper">
                        <div class="content">
                            <h3 class="title">${note.title}</h3>
                            <span class="desc">${note.desc}</span>
                        </div>
                        <div class="footer">
                            <span class="date">${note.currDate}</span>
                            <div class="setting">
                            <i class="fa-solid fa-ellipsis"></i>
                            <ul class="menu">
                               <li onclick=editNote(${index},'${note.title}','${note.desc}')><i class="fa-solid fa-pencil"></i> Edit</li>
                                <li onclick=deleteNote(${index})><i class="fa-solid fa-trash"></i> Delete</li>
                            </ul>
                            </div>       
                        </div>
                    </li>`
        addNoteBox.insertAdjacentHTML("afterend", liTag);
    });
}
addNote()

function editNote(noteID, title, des) {
    isUpdate = true;
    updateId = noteID;
    openBlankNote.click()
    h4.textContent = "Update a Note"
    addBtn.textContent = "Update"
    //updating text values
    input.value = title;
    desc.value = des;

}
function deleteNote(noteID) {
    let confirmDel = confirm("Are you sure want to delete this note")
    if(!confirmDel) return
    notes.splice(noteID, 1)
    localStorage.setItem('notes', JSON.stringify(notes));
    addNote()
}


