const LSkey = 'notes';

const notes = [];

const note = {
    title: 'title',
    context: 'context',
    colour: '#ff0000',
    pinned: false,
    createDate: new Date()
};

notes.push(note);
notes.push(note);
notes.push(note);

localStorage.setItem(LSkey, JSON.stringify(notes));

const notesFromLS = JSON.parse(localStorage.getItem(LSkey));
const mappedNotes = notesFromLS.map(note => {
    note.createDate = new Date(note.createDate);
    return note;
});

console.log(notesFromLS);

for(const note of mappedNotes){
    const main = document.querySelector('main');

    const htmlNote = document.createElement('section');
    const htmlTitle = document.createElement('h1');
    const htmlContent = document.createElement('p');
    const htmlDate = document.createElement('h4');

    htmlTitle.innerHTML = note.title;
    htmlContent.innerHTML = note.context;
    htmlDate.innerHTML = note.createDate.toLocaleDateString();

    console.dir(htmlNote);
    htmlNote.appendChild(htmlTitle);
    htmlNote.appendChild(htmlContent);
    htmlNote.appendChild(htmlDate);

    main.appendChild(htmlNote);
}

document.querySelector('#noteAdd').addEventListener('click', onNewNote);

function onNewNote(){
    
}