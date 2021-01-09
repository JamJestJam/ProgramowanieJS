import { noteMenager } from './AddNoteMenager.js';
import { find } from './Find.js';

class EventHandler {
    constructor() {
        this.enter = document.querySelector('#enter');
        this.close = document.querySelector('#close');
        this.create = document.querySelector('#create');

        this.enter.addEventListener('click', noteMenager.ShowMenu);
        this.close.addEventListener('click', noteMenager.HideMenu);
        this.create.addEventListener('click', noteMenager.CreateNewNote);
        find.button.addEventListener('click', find.FindAll);
    
        this.AddEventButton(noteMenager.bold);
        this.AddEventButton(noteMenager.italic);
        this.AddEventButton(noteMenager.underline);
        this.AddEventButton(noteMenager.pin);

        this.ChangeColor(noteMenager.color, noteMenager.colorIn);
    }

    AddEventButton(button) {
        button.addEventListener('click', () => { noteMenager.ChangeButtonState(button); });
    }

    ChangeColor(button, input) {
        button.addEventListener('click', () => { input.click(); });
        input.addEventListener('change', () => { noteMenager.ChangeBgColor(button, input.value); });
    }
}

const eventHandler = new EventHandler();

export { eventHandler };