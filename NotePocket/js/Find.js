import { noteArray } from './NoteArray.js';

class Find{
    constructor(){
        this.input = document.querySelector('#findIn');
        this.button = document.querySelector('#find');
    }

    FindAll=()=>{
        const finding = this.input.value;

        if(finding===''){
            noteArray.elements.forEach(element => {
                element.ele.Show();
            });
        }else{
            noteArray.elements.forEach(element => {
                const note = element.note;
                
                if(note.title.includes(finding) || note.context.includes(finding)) {
                    element.ele.Show();
                }
                else element.ele.Hide();
            });
        }
    }

    ClearFind(){
        noteArray.DrawAll();
    }
}

const find = new Find();
export {find};