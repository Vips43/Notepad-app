const closeBtn = document.getElementById('close'),
currDate = document.querySelector('.date'),
addNoteWrapper = document.querySelector('.add-note-wrapper'),
openBlankNote = document.querySelector('.add-btn'),
addBtn = document.getElementById('addBtn')

let input = document.getElementById('input'),
desc = document.getElementById('desc')

const months = ['January', 'february', 'March',' April',' May', 'June', 'July', 'August', 'September', 'November', 'December']


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
currDate.textContent = setDate()

addBtn.onclick = ()=>{
    input = input.value
    desc = desc.value
    console.log('input: '+input,'desc: '+desc);
    
}