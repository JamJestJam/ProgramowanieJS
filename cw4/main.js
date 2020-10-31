//zmienne
const cssClass = {
    hiddenVal: 'hidden',//nazwa klasy ukrywajaca diva

    note: 'note',//nazwa klasy dla notatki
    title: 'title',//nazwa klasy dla tytulu notatki
    contents: 'contents',//nazwa klasy dla tresci notatki
    icons: 'icons',//nazwa klasy dla pojemnika na ikony w notatce
    activeButton: 'active',//nazwa klasy zanaczenia przycisku
    center: 'center',//klasa dodajaca flexa obiektowi

    bold: 'icon-bold',//fontello B
    italic: 'icon-italic',//fontello I
    underline: 'icon-underline',//fontello U
    pin: 'icon-pin-outline',//fontello pin
    palette: 'icon-palette',//fontello palette
    trash: 'icon-trash-empty'//fontello trash
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

    conteiner: document.querySelector('#content')
};

//statyczne eventy
objects.bold.addEventListener('click', ()=>changeIconStatusHTML(objects.bold));
objects.italic.addEventListener('click', ()=>changeIconStatusHTML(objects.italic));
objects.underline.addEventListener('click', ()=>changeIconStatusHTML(objects.underline));
objects.pin.addEventListener('click', ()=>changeIconStatusHTML(objects.pin));
objects.enter.addEventListener('click', showHiddenMenu);
objects.close.addEventListener('click', showHiddenMenu);

//funkcje
function showHiddenMenu() {//ukrywa i pokazuje menu tworzenia notatek
    if (objects.addNew.classList.contains(cssClass.hiddenVal)) {
        objects.addNew.classList.remove(cssClass.hiddenVal);
        objects.menuIn.classList.add(cssClass.hiddenVal);
    }
    else {
        objects.addNew.classList.add(cssClass.hiddenVal);
        objects.menuIn.classList.remove(cssClass.hiddenVal);
    }
}

const changeIconStatusHTML = (div) => {//event zmiany stanu przycisku
    console.log(div.classList.contains);
    if (div.classList.contains(cssClass.activeButton)) div.classList.remove(cssClass.activeButton);
    else div.classList.add(cssClass.activeButton);
};

//tworzy notatke w htmlu
function createNoteHTML(noteTitle, noteContent, color, bold, italic, underline, pinned) {
    const conteiner = document.createElement('div');
    const title = document.createElement('div');
    const contents = document.createElement('div');
    const icons = document.createElement('div');

    const createIcon = (iconClass, active, usable = true) => {
        const iconDiv = document.createElement('div');
        const iconI = document.createElement('i');
        iconI.classList.add(iconClass);
        if (active) iconDiv.classList.add(cssClass.activeButton);
        iconDiv.appendChild(iconI);
        icons.appendChild(iconDiv);

        if (usable) iconDiv.addEventListener('click', () => changeIconStatusHTML(iconDiv));
    };

    objects.conteiner.appendChild(conteiner);
    conteiner.appendChild(title);
    conteiner.appendChild(contents);
    conteiner.appendChild(icons);

    conteiner.classList.add(cssClass.note);
    title.classList.add(cssClass.title);
    contents.classList.add(cssClass.contents);
    icons.classList.add(cssClass.icons);
    icons.classList.add(cssClass.center);

    createIcon(cssClass.bold, bold);
    createIcon(cssClass.italic, italic);
    createIcon(cssClass.underline, underline);
    createIcon(cssClass.pin, pinned);
    createIcon(cssClass.palette, false, false);
    createIcon(cssClass.trash, false, false);

    title.innerText = noteTitle;
    contents.innerText = noteContent;
}

// function getNotesFromLocalStorage() {
//     const LS_elements = JSON.parse(localStorage.getItem('Notes'));
//     notes = LS_elements;
// }

// function setNotesToLocalStorage() {
//     localStorage.setItem('Notes', JSON.stringify(notes));
// }

// function createNewNoteObj(title, context, colour, pin, bold, italic, underline, date = new Date()) {
//     this.title = title;
//     this.context = context;
//     this.colour = colour;
//     this.pinned = pinned;
//     this.createDate = date;
// }

// getNotesFromLocalStorage();


createNoteHTML('tytuł', 'tresc', 'red', true, true, true, true);