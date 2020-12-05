import { musicBox } from './musicBox.js';
import { record } from './recordHandler.js';

class EventHandler {
    constructor() {
        document.addEventListener('keypress', this.keyPress);

        record.recordBTN.addEventListener('click', record.StartStopRecord);
        record.playBTN.addEventListener('click', record.Play);
    }

    keyPress = (e) => {
        musicBox.play(e.code);
        record.Record(e.code);
    }

}

new EventHandler();