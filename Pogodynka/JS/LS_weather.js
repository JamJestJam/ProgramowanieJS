import { LS } from './LocalStorage.js';

class LS_Weather{
    constructor(saveName = 'weather'){
        this.noteName = saveName;
    }

    getNote(){
        const LS_elements = JSON.parse(LS.getItem(this.noteName));
        return this.mapNote(LS_elements);
    }

    mapNote(element){
        if (element != undefined){
            return element.map(note => {
                note.createDate = new Date(note.createDate);
                return note;
            });
        }
    }

    setNote(note){
        LS.setItem(this.noteName, JSON.stringify(note));
    }
}

const LSweather = new LS_Weather();

export {LSweather};