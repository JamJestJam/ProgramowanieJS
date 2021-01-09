import { ls } from './LS.js';

class LS_Note {
    constructor(saveName = 'note') {
        this.noteName = saveName;
    }

    getNote() {
        const LS_elements = JSON.parse(ls.getItem(this.noteName));
        return this.mapNote(LS_elements);
    }

    mapNote(element) {
        if (element != undefined) {
            return element.map(note => {
                note.createDate = new Date(note.createDate);
                note.time = new Date(note.time);
                
                return note;
            });
        }
    }

    setNote(note) {
        ls.setItem(this.noteName, JSON.stringify(note));
    }
}

const lsNote = new LS_Note();
export { lsNote };