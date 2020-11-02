//zmienne
const LSnoteObjName = 'note';

const cssClass = {
    hiddenVal: 'hidden',//nazwa klasy ukrywajaca diva

    note: 'note',//nazwa klasy dla notatki
    title: 'title',//nazwa klasy dla tytulu notatki
    contents: 'contents',//nazwa klasy dla tresci notatki
    icons: 'icons',//nazwa klasy dla pojemnika na ikony w notatce
    activeButton: 'active',//nazwa klasy zanaczenia przycisku
    center: 'center',//klasa dodajaca flexa obiektowi
    invInput: 'none',//klasa niewidzialnego inputa

    bold: 'icon-bold',//fontello B
    italic: 'icon-italic',//fontello I
    underline: 'icon-underline',//fontello U
    pin: 'icon-pin-outline',//fontello pin
    palette: 'icon-palette',//fontello palette
    trash: 'icon-trash-empty',//fontello trash

    defaultBgColor: '#202124'
};

const objects = {//lista obiektow pobranych z dokumentu
    enter: document.querySelector('#enter'),//przycisk do otworzenie menu tworzenia nowej notatki
    close: document.querySelector('#close'),//przycisk do zamknięcia menu tworzenia nowej notatki
    addNew: document.querySelector('#addNew'),//div z przyciskiem^^^
    menuIn: document.querySelector('#menuIn'),//menu tworzenia nowej notatki
    create: document.querySelector('#create'),//przecisk do utworzenia nowej notatki

    title: document.querySelector('#titleIn'),//tytuł notatki
    context: document.querySelector('#contentIn'),//treść notatki
    pin: document.querySelector('#pin'),//treść notatki
    bold: document.querySelector('#bold'),//pogrubienie tytułu notatki
    italic: document.querySelector('#italic'),//pochylenie tytułu notatki
    underline: document.querySelector('#underline'),//podkreślenie tytułu notatki
    color: document.querySelector('#color'),//kolor notatki
    colorIn: document.querySelector('#color>input'),

    conteiner: document.querySelector('#content')
};

let notes = [];//lista notatek na stronie

//statyczne eventy
objects.bold.addEventListener('click', () => changeIconStatusHTML(objects.bold));
objects.italic.addEventListener('click', () => changeIconStatusHTML(objects.italic));
objects.underline.addEventListener('click', () => changeIconStatusHTML(objects.underline));
objects.pin.addEventListener('click', () => changeIconStatusHTML(objects.pin));
objects.enter.addEventListener('click', showHiddenMenu);
objects.close.addEventListener('click', showHiddenMenu);
objects.create.addEventListener('click', createNewNote);
objects.color.addEventListener('click', () => setColor(objects.colorIn));
objects.colorIn.addEventListener('change', () => setDivColor(objects.color, objects.colorIn));


//funkcje
function setColor(input) {//po tliknieciu diva uruchom inputa
    input.click();
}

function setDivColor(div, input) {//po zmianie koloru w inpucie, zmien background diva
    div.style.backgroundColor = input.value;
}

function createNewNote() {//pobiera dane z inputów i tworzy notatke
    const title = objects.title.value;
    const context = objects.context.value;
    const bold = (objects.bold.classList.contains(cssClass.activeButton)) ? true : false;
    const underline = (objects.underline.classList.contains(cssClass.activeButton)) ? true : false;
    const italic = (objects.italic.classList.contains(cssClass.activeButton)) ? true : false;
    const pin = (objects.pin.classList.contains(cssClass.activeButton)) ? true : false;
    const color = (objects.color.style.backgroundColor === '') ?
        cssClass.defaultBgColor :
        objects.color.style.backgroundColor;

    const note = new createNewNoteObj(title, context, color, pin, bold, italic, underline);
    notes.push(note);
    setNotesToLocalStorage();

    createNoteHTML(title, context, color, bold, italic, underline, pin, note);
    showHiddenMenu();
}

function clearInputs() {//czysci zawartosc inputow
    objects.title.value = '';
    objects.context.value = '';
    objects.bold.classList.remove(cssClass.activeButton);
    objects.underline.classList.remove(cssClass.activeButton);
    objects.italic.classList.remove(cssClass.activeButton);
    objects.pin.classList.remove(cssClass.activeButton);
    objects.color.style.backgroundColor = '';
}

function showHiddenMenu() {//ukrywa i pokazuje menu tworzenia notatek
    if (objects.addNew.classList.contains(cssClass.hiddenVal)) {
        objects.addNew.classList.remove(cssClass.hiddenVal);
        objects.menuIn.classList.add(cssClass.hiddenVal);
        clearInputs();
    }
    else {
        objects.addNew.classList.add(cssClass.hiddenVal);
        objects.menuIn.classList.remove(cssClass.hiddenVal);
    }
}

function changeIconStatusHTML(div) {//event zmiany stanu przycisku
    if (div.classList.contains(cssClass.activeButton)) div.classList.remove(cssClass.activeButton);
    else div.classList.add(cssClass.activeButton);
}

function createNoteHTML(noteTitle, noteContent, color, bold, italic, underline, pinned, note) {//tworzy notatke w htmlu
    //podstawowe pojemniki
    const conteiner = document.createElement('div');
    const title = document.createElement('div');
    const contents = document.createElement('div');
    const icons = document.createElement('div');
    //input koloru
    const colorIn = document.createElement('input');

    const createIcon = (iconClass, active, usable = true) => {//funkcja do tworzenia ikon
        const iconDiv = document.createElement('div');
        const iconI = document.createElement('i');
        iconI.classList.add(iconClass);
        if (active) iconDiv.classList.add(cssClass.activeButton);
        iconDiv.appendChild(iconI);
        icons.appendChild(iconDiv);

        if (usable) iconDiv.addEventListener('click', () => changeIconStatusHTML(iconDiv));

        return iconDiv;
    };

    //tworzenie ikon
    const iconBold = createIcon(cssClass.bold, bold);
    const iconitalic = createIcon(cssClass.italic, italic);
    const iconUnderline = createIcon(cssClass.underline, underline);
    const iconPin = createIcon(cssClass.pin, pinned);
    const iconColor = createIcon(cssClass.palette, false, false);
    const iconTrash = createIcon(cssClass.trash, false, false);

    //funkcje zmiany stanu
    const setBold = () => {

    };

    const setItalic = () => {

    };

    const setUnderline = () => {

    };

    const setBgColor = () => {

    };

    const setPin = () => {

    };

    const deleteObj = () => {

    };

    //ustanowienie inputu koloru
    colorIn.type = 'color';
    colorIn.classList.add(cssClass.invInput);
    iconColor.appendChild(colorIn);
    conteiner.style.backgroundColor = color;

    //wsadzenie pojemników w inne pojemniki
    objects.conteiner.appendChild(conteiner);
    conteiner.appendChild(title);
    conteiner.appendChild(contents);
    conteiner.appendChild(icons);

    //ustanowienie klas
    conteiner.classList.add(cssClass.note);
    title.classList.add(cssClass.title);
    contents.classList.add(cssClass.contents);
    icons.classList.add(cssClass.icons);
    icons.classList.add(cssClass.center);

    //eventy
    iconColor.addEventListener('click', () => setColor(colorIn));
    colorIn.addEventListener('change', () => setDivColor(conteiner, colorIn));

    //ustanowienie tresci notatki
    title.innerText = noteTitle;
    contents.innerText = noteContent;

    return conteiner;
}

function getNotesFromLocalStorage() {//pobiera notatki z LS
    const LS_elements = JSON.parse(localStorage.getItem(LSnoteObjName));
    if (LS_elements != undefined)
        notes = LS_elements.map(note => {
            note.createDate = new Date(note.createDate);
            return note;
        });
}


function setNotesToLocalStorage() {//zapisuje notatki w LS
    localStorage.setItem(LSnoteObjName, JSON.stringify(notes));
}

function createNewNoteObj(title, context, colour, pin, bold, italic, underline, date = new Date()) {//tworzy nowy obiekt notatki
    this.title = title;
    this.context = context;
    this.colour = colour;
    this.pinned = pin;
    this.bold = bold;
    this.italic = italic;
    this.underline = underline;
    this.createDate = date;
}

//pierwsze działania
getNotesFromLocalStorage();
notes.forEach(note => {
    createNoteHTML(note.title, note.context, note.colour, note.bold, note.italic, note.undefined, note.pinned);
});