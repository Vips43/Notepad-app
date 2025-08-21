const closeBtn = document.getElementById('close'),
currDate = document.querySelector('.date'),
addNoteWrapper = document.querySelector('.add-note-wrapper'),
addNoteBox = document.querySelector('.add-note-box'),
openBlankNote = document.querySelector('.add-btn'),
addBtn = document.getElementById('addBtn')

let input = document.getElementById('input'),
title = document.querySelector('.title'),
desc = document.getElementById('desc')

const months = ['January', 'february', 'March',' April',' May', 'June', 'July', 'August', 'September', 'November', 'December']

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

//open for adding task
openBlankNote.onclick = ()=>{
    addNoteWrapper.classList.remove('show')
    setTimeout(() => {
        addNoteWrapper.style.display = 'flex'
    }, 800);
}
closeBtn.onclick = ()=>{
    addNoteWrapper.classList.add('show')
    setTimeout(() => {
        addNoteWrapper.style.display = 'none'
    }, 800);
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

addBtn.onclick = ()=>{
    const inputValue = input.value,
    descValue = desc.value;
    let noteInfo = {
        title:inputValue,
        desc:descValue,
        currDate:setDate()
    }
    notes.push(noteInfo)
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes))
    addNote()
}

function addNote() {
    notes.forEach(note => {
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
                               <li onclick=editNote()><i class="fa-solid fa-pencil"></i> Edit</li>
                                <li><i class="fa-solid fa-trash"></i> Delete</li>
                            </ul>
                            </div>       
                        </div>
                    </li>`
        addNoteBox.insertAdjacentHTML("afterend",liTag);
    });
}
addNote()




