class LS_Note{
    constructor(saveName = 'note'){
        this.noteName = saveName;
        this.ls = new LS();
    }

    getNote(){
        const LS_elements = JSON.parse(this.ls.getItem(this.noteName));
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
        this.ls.setItem(this.noteName, JSON.stringify(note));
    }
}