import { Note } from './Note.js';
import { noteArray } from './NoteArray.js';

class AddNoteMenager {
    constructor() {
        this.cssClass_HideMenu = 'hidden';
        this.cssClass_ActiveButton = 'active';
        this.cssClass_defaultBgColor = '#202124';

        this.menuClass = document.querySelector('#addNew');
        this.mainClass = document.querySelector('#menuIn');

        this.GetElements();
    }

    GetElements() {
        this.title = document.querySelector('#titleIn');
        this.context = document.querySelector('#contentIn');
        this.pin = document.querySelector('#pin');
        this.bold = document.querySelector('#bold');
        this.italic = document.querySelector('#italic');
        this.underline = document.querySelector('#underline');
        this.color = document.querySelector('#color');
        this.colorIn = document.querySelector('#color>input');
        this.time = document.querySelector('#date');
    }

    ChangeButtonState = (button) => {
        if (button.classList.contains(this.cssClass_ActiveButton)) button.classList.remove(this.cssClass_ActiveButton);
        else button.classList.add(this.cssClass_ActiveButton);
    }

    ChangeBgColor = (button, value) => {
        button.style.backgroundColor = value;
    }

    ShowMenu = () => {
        this.menuClass.classList.add(this.cssClass_HideMenu);
        this.mainClass.classList.remove(this.cssClass_HideMenu);
    }

    HideMenu = () => {
        this.menuClass.classList.remove(this.cssClass_HideMenu);
        this.mainClass.classList.add(this.cssClass_HideMenu);
    }

    ClearNote() {
        this.title.value = '';
        this.context.value = '';
        this.bold.classList.remove(this.cssClass_ActiveButton);
        this.underline.classList.remove(this.cssClass_ActiveButton);
        this.italic.classList.remove(this.cssClass_ActiveButton);
        this.pin.classList.remove(this.cssClass_ActiveButton);
        this.color.style.backgroundColor = '';
    }

    CreateNewNote = () => {
        const note = new Note(
            this.title.value,
            this.context.value,
            (this.color.style.backgroundColor === '') ? this.cssClass_defaultBgColor : this.color.style.backgroundColor,
            this.pin.classList.contains(this.cssClass_ActiveButton),
            this.bold.classList.contains(this.cssClass_ActiveButton),
            this.italic.classList.contains(this.cssClass_ActiveButton),
            this.underline.classList.contains(this.cssClass_ActiveButton),
            new Date(this.time.value)
        );

        noteArray.AddNewNote(note);
        this.HideMenu();
    }
}

const noteMenager = new AddNoteMenager();
export { noteMenager };