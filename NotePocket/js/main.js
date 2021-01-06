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

    conteiner: document.querySelector('#content'),
    conteinerPin: document.querySelector('#contentPin'),
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

    createNoteHTML(note);
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

function createNoteHTML(note) {//tworzy notatke w htmlu
    //podstawowe pojemniki
    const conteiner = document.createElement('div');
    const title = document.createElement('div');
    const contents = document.createElement('div');
    const icons = document.createElement('div');
    //input koloru
    const colorIn = document.createElement('input');

    //tworzenie ikon
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

    const iconBold = createIcon(cssClass.bold, note.bold);
    const iconitalic = createIcon(cssClass.italic, note.italic);
    const iconUnderline = createIcon(cssClass.underline, note.underline);
    const iconPin = createIcon(cssClass.pin, note.pinned);
    const iconColor = createIcon(cssClass.palette, false, false);
    const iconTrash = createIcon(cssClass.trash, false, false);

    //funckja pomocnicza
    const getStatus = (div) => {//sprawdza czy div zawiera klase activeButton
        if (div.classList.contains(cssClass.activeButton))
            return true;
        return false;
    };

    const useBold = () => {//w razie potrzby uzywa pogrubienia
        if (note.bold)
            title.style.fontWeight = 'bolder';
        else
            title.style.fontWeight = 'unset';
    };

    const useItalic = () => {//w razie potrzby uzywa pochylenia textu
        if (note.italic)
            title.style.fontStyle = 'italic';
        else
            title.style.fontStyle = 'normal';
    };

    const useUnderline = () => {//w razie potrzby uzywa podkreslenia
        if (note.underline)
            title.style.textDecoration = 'underline';
        else
            title.style.textDecoration = 'unset';
    };

    const usePin = () => {//w razie potrzby uzywa przesowa notatke
        //const noteID = notes.indexOf(note);
        const noteNext = notes.findIndex(x => x.pinned == note.pinned && notes.indexOf(x) > notes.indexOf(note));
        if (getStatus(iconPin)) {
            if (noteNext == -1)
                objects.conteinerPin.appendChild(conteiner);
            else {
                const before = document.querySelector('#Con' + noteNext);
                objects.conteinerPin.insertBefore(conteiner, before);
            }
        }
        else {
            if (noteNext == -1)
                objects.conteiner.appendChild(conteiner);
            else {
                const before = document.querySelector('#Con' + noteNext);
                objects.conteiner.insertBefore(conteiner, before);
            }
        }
    };

    const useColor = () => {//w razie potrzby uzywa zmienia kolor
        conteiner.style.backgroundColor = note.color;
    };

    //funkcje zmiany stanu
    const setBold = () => {//zmienia status pogrubienia
        note.bold = getStatus(iconBold);
        useBold();
        setNotesToLocalStorage();
    };

    const setItalic = () => {//zmienia status pochylenia
        note.italic = getStatus(iconitalic);
        useItalic();
        setNotesToLocalStorage();
    };

    const setUnderline = () => {//zmienia status podkreslenia
        note.underline = getStatus(iconUnderline);
        useUnderline();
        setNotesToLocalStorage();
    };

    const setBgColor = () => {//zmienia status koloru
        note.color = colorIn.value;
        useColor();
        setNotesToLocalStorage();
    };

    const setPin = () => {//zmienia status pina
        note.pinned = getStatus(iconPin);
        usePin();
        setNotesToLocalStorage();
    };

    const deleteObj = () => {//usówa obiekt
        conteiner.remove();
        notes.splice(notes.indexOf(note), 1);
        setNotesToLocalStorage();
    };

    //ustanowienie inputu koloru
    colorIn.type = 'color';
    colorIn.classList.add(cssClass.invInput);
    iconColor.appendChild(colorIn);

    //wsadzenie pojemników w inne pojemniki
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
    colorIn.addEventListener('change', setBgColor);
    iconColor.addEventListener('click', () => setColor(colorIn));
    iconBold.addEventListener('click', setBold);
    iconitalic.addEventListener('click', setItalic);
    iconUnderline.addEventListener('click', setUnderline);
    iconPin.addEventListener('click', setPin);
    iconTrash.addEventListener('click', deleteObj);

    //ustawienia wstepne
    useBold();
    useColor();
    useItalic();
    useUnderline();
    usePin();

    //ustanowienie tresci notatki
    conteiner.id = 'Con' + notes.indexOf(note);
    title.innerText = note.title;
    contents.innerText = note.context;

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

function createNewNoteObj(title, context, color, pin, bold, italic, underline, date = new Date()) {//tworzy nowy obiekt notatki
    this.title = title;
    this.context = context;
    this.color = color;
    this.pinned = pin;
    this.bold = bold;
    this.italic = italic;
    this.underline = underline;
    this.createDate = date;
}

//pierwsze działanie
getNotesFromLocalStorage();
notes.forEach(note => {
    createNoteHTML(note);
});