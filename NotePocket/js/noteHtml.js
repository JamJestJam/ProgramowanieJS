const cssConf = {
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

const htmlConf = {//lista obiektow pobranych z dokumentu
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
    conteinerPin: document.querySelector('#contentPin')
};

class NoteHtml{
    constructor(newCssConf, newHtmlConf){
        this.getObject(cssConf, newCssConf);
    }

    getObject(base, newConf){
        const result = new Object();
        console.log(base);
    }

    createNewNote(){

    }
}