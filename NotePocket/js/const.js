const LSnoteObjName = 'note';//nazwa notatek w LS
const defaultBgColor = '#202124';//domyslny kolor notatki
//klasy css
const hiddenVal = 'hidden';//nazwa klasy ukrywajaca diva

const noteCSS = 'note';//nazwa klasy dla notatki
const titleCSS = 'title';//nazwa klasy dla tytulu notatki
const contentsCSS = 'contents';//nazwa klasy dla tresci notatki
const iconsCSS = 'icons';//nazwa klasy dla pojemnika na ikony w notatce
const activeButtonCSS = 'active';//nazwa klasy zanaczenia przycisku
const centerCSS = 'center';//klasa dodajaca flexa obiektowi
const invInputCSS = 'none';//klasa niewidzialnego inputa

const boldCSS = 'icon-bold';//fontello B
const italicCSS = 'icon-italic';//fontello I
const underlineCSS = 'icon-underline';//fontello U
const pinCSS = 'icon-pin-outline';//fontello pin
const paletteCSS = 'icon-palette';//fontello palette
const trashCSS = 'icon-trash-empty';//fontello trash
//pojemniki
const enter = document.querySelector('#enter');//przycisk do otworzenie menu tworzenia nowej notatki
const close = document.querySelector('#close');//przycisk do zamknięcia menu tworzenia nowej notatki
const addNew = document.querySelector('#addNew');//div z przyciskiem^^^
const menuIn = document.querySelector('#menuIn');//menu tworzenia nowej notatki
const create = document.querySelector('#create');//przecisk do utworzenia nowej notatki

const title = document.querySelector('#titleIn');//tytuł notatki
const context = document.querySelector('#contentIn');//treść notatki
const pin = document.querySelector('#pin');//treść notatki
const bold = document.querySelector('#bold');//pogrubienie tytułu notatki
const italic = document.querySelector('#italic');//pochylenie tytułu notatki
const underline = document.querySelector('#underline');//podkreślenie tytułu notatki
const color = document.querySelector('#color');//kolor notatki
const colorIn = document.querySelector('#color>input');

const conteiner = document.querySelector('#content');
const conteinerPin = document.querySelector('#contentPin');