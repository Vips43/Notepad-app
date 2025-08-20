const closeBtn = document.getElementById('close'),
addNoteWrapper = document.querySelector('.add-note-wrapper'),
openBlankNote = document.querySelector('.add-btn')

openBlankNote.onclick = ()=>{
    addNoteWrapper.classList.remove('show')
    setTimeout(() => {
        addNoteWrapper.style.display = 'flex'
    }, 300);
}
closeBtn.onclick = ()=>{
    addNoteWrapper.classList.add('show')
    setTimeout(() => {
        addNoteWrapper.style.display = 'none'
    }, 500);
}
