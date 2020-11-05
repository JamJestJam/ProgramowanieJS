class Notes{
    constructor(){
        this.LS = new LS_Note();
        this.notes = [];
    }

    addNote(note){
        this.notes.push(note);
        this.LS.setNote(this.notes);
    }

    restoreNotes(){
        this.notes = this.LS.getNote();
    }

    removeNote(id){
        this.notes.splice(id, 1);
    }

    getNote(){
        return [...this.notes];
    }
}