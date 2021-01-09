import { lsNote } from './LS_Note.js';
import { NoteDraw } from './NoteDraw.js';
import { notification } from './Notification.js';

class NoteArray {
    constructor() {
        this.GetLS();
    }

    GetLS() {
        const note = lsNote.getNote();
        if (note == undefined)
            this.noteArray = new Array();
        else {
            this.noteArray = note;
        }

        this.elements = new Array();
    }

    AddNewNote(note) {
        this.noteArray.push(note);
        lsNote.setNote(this.noteArray);
        this.elements.push({ ele: new NoteDraw(note), note: note });
        notification.AddNewDate(note.time, note.title);
    }

    Save() {
        lsNote.setNote(this.noteArray);
    }

    NotifyAll() {
        this.noteArray.forEach(element => {
            notification.AddNewDate(element.time, element.title);
        });
    }

    DrawAll() {
        this.noteArray.forEach(element => {
            this.elements.push({ ele: new NoteDraw(element), note: element });
            notification.AddNewDate(element.time, element.title);
        });
    }
}

const noteArray = new NoteArray();
noteArray.DrawAll();
noteArray.NotifyAll();

export { noteArray };