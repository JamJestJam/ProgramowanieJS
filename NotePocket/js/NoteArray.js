import { lsNote } from './LS_Note.js';
import { NoteDraw } from './NoteDraw.js';
import { notification } from './Notification.js'; 

class NoteArray{
    constructor(){
        this.GetLS();
    }

    GetLS(){
        const note = lsNote.getNote();
        if(note == undefined)
            this.noteArray = new Array(); 
        else{
            this.noteArray = note;
        }
    }

    AddNewNote(note){
        this.noteArray.push(note);
        lsNote.setNote(this.noteArray);
        new NoteDraw(note);
        notification.AddNewDate(note.time, note.title);
    }

    Save(){
        lsNote.setNote(this.noteArray);
    }

    DrawAll(){
        this.noteArray.forEach(element => {
            new NoteDraw(element);
            notification.AddNewDate(element.time, element.title);
        });
    }
}

const noteArray = new NoteArray();
noteArray.DrawAll();

export {noteArray};