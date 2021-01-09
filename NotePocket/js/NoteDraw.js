import { eventHandler } from './EventHandler.js';
import { noteArray } from './NoteArray.js';


class NoteDraw {
    static conteiner = document.querySelector('#content');
    static conteinerPin = document.querySelector('#contentPin');

    constructor(note) {
        this.cssActiveBtn = 'active';
        this.note = note;

        this.CreateHtml();
    }

    CreateIcon = (iconClass, active, usable = true) => {
        const iconDiv = document.createElement('div');
        const iconI = document.createElement('i');

        iconI.classList.add(iconClass);

        if (active) iconDiv.classList.add(this.cssActiveBtn);

        iconDiv.appendChild(iconI);
        this.icons.appendChild(iconDiv);

        if (usable) iconDiv.addEventListener('click', () => this.ChangeBtnStatus(iconDiv));

        return iconDiv;
    };

    UseBold = () => {
        if (this.note.bold)
            this.title.style.fontWeight = 'bolder';
        else
            this.title.style.fontWeight = 'unset';
    };

    UseItalic = () => {
        if (this.note.italic)
            this.title.style.fontStyle = 'italic';
        else
            this.title.style.fontStyle = 'normal';
    };

    UseUnderline = () => {
        if (this.note.underline)
            this.title.style.textDecoration = 'underline';
        else
            this.title.style.textDecoration = 'unset';
    };

    UsePin = () => {
        const noteNext = noteArray.noteArray.findIndex(x => x.pinned == this.note.pinned && noteArray.noteArray.indexOf(x) > noteArray.noteArray.indexOf(this.note));
        if (this.iconPin.classList.contains(this.cssActiveBtn)) {
            if (noteNext == -1)
                NoteDraw.conteinerPin.appendChild(this.conteiner);
            else {
                const before = document.querySelector('#Con' + noteNext);
                NoteDraw.conteinerPin.insertBefore(this.conteiner, before);
            }
        }
        else {
            if (noteNext == -1)
                NoteDraw.conteiner.appendChild(this.conteiner);
            else {
                const before = document.querySelector('#Con' + noteNext);
                NoteDraw.conteiner.insertBefore(this.conteiner, before);
            }
        }
    };

    ChangeBtnStatus = (button)=>{
        if (button.classList.contains(this.cssActiveBtn)) button.classList.remove(this.cssActiveBtn);
        else button.classList.add(this.cssActiveBtn);
    }

    SetBold = () => {
        this.note.bold = this.iconBold.classList.contains(this.cssActiveBtn);
        this.UseBold();
        noteArray.Save();
    };

    SetItalic = () => {
        this.note.italic = this.iconitalic.classList.contains(this.cssActiveBtn);
        this.UseItalic();
        noteArray.Save();
    };

    SetUnderline = () => {
        this.note.underline = this.iconUnderline.classList.contains(this.cssActiveBtn);
        this.UseUnderline();
        noteArray.Save();
    };

    SetBgColor = () => {
        this.note.color = this.colorIn.value;
        this.UseColor();
        noteArray.Save();
    };

    SetPin = () => {
        this.note.pinned = this.iconPin.classList.contains(this.cssActiveBtn);
        this.UsePin();
        noteArray.Save();
    };

    DeleteObj = () => {
        this.conteiner.remove();
        noteArray.noteArray.splice(noteArray.noteArray.indexOf(this.note), 1);
        noteArray.Save();
    };

    UseColor = () => {
        this.conteiner.style.backgroundColor = this.note.color;
    };

    Hide(){
        this.conteiner.remove();
    }

    Show(){
        this.UsePin();
    }

    CreateHtml() {
        this.conteiner = document.createElement('div');
        this.title = document.createElement('div');
        this.contents = document.createElement('div');
        this.icons = document.createElement('div');
        this.colorIn = document.createElement('input');

        this.iconBold = this.CreateIcon('icon-bold', this.note.bold);
        this.iconitalic = this.CreateIcon('icon-italic', this.note.italic);
        this.iconUnderline = this.CreateIcon('icon-underline', this.note.underline);
        this.iconPin = this.CreateIcon('icon-pin-outline', this.note.pinned);
        this.iconColor = this.CreateIcon('icon-palette', false, false);
        this.iconTrash = this.CreateIcon('icon-trash-empty', false, false);

        this.colorIn.type = 'color';
        this.colorIn.classList.add('none');
        this.iconColor.appendChild(this.colorIn);

        this.conteiner.appendChild(this.title);
        this.conteiner.appendChild(this.contents);
        this.conteiner.appendChild(this.icons);

        this.conteiner.classList.add('note');
        this.title.classList.add('title');
        this.contents.classList.add('contents');
        this.icons.classList.add('icons');
        this.icons.classList.add('center');

        this.colorIn.addEventListener('change', this.SetBgColor);
        this.iconColor.addEventListener('click', () => eventHandler.ChangeColor(this.conteiner ,this.colorIn));
        this.iconBold.addEventListener('click', this.SetBold);
        this.iconitalic.addEventListener('click', this.SetItalic);
        this.iconUnderline.addEventListener('click', this.SetUnderline);
        this.iconPin.addEventListener('click', this.SetPin);
        this.iconTrash.addEventListener('click', this.DeleteObj);

        this.SetBold();
        this.UseColor();
        this.UseItalic();
        this.UseUnderline();
        this.UsePin();

        this.conteiner.id = 'Con' + noteArray.noteArray.indexOf(this.note);
        this.title.innerText = this.note.title;
        this.contents.innerText = this.note.context;
    }
}

export {NoteDraw};