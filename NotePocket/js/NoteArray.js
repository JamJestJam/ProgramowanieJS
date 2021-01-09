import { lsNote } from './LS_Note.js';
import { NoteDraw } from './NoteDraw.js';

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
    }

    Save(){
        lsNote.setNote(this.noteArray);
    }

    DrawAll(){
        this.noteArray.forEach(element => {
            new NoteDraw(element);
        });
    }
}

const noteArray = new NoteArray();
noteArray.DrawAll();

export {noteArray};