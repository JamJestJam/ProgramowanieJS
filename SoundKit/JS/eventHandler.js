import { musicBox } from './musicBox.js';
import { record } from './recordHandler.js';

class EventHandler {
    constructor() {
        document.addEventListener('keypress', this.keyPress);

        record.recordBTN.addEventListener('click', record.StartStopRecord);
        record.playBTN.addEventListener('click', record.Play);

        const keys = document.querySelectorAll('.Key');

        keys.forEach(ele => {
            ele.addEventListener('click',
                () => {
                    this.keyPress({ code: 'Key' + ele.childNodes[1].innerText })
                }
            );
        });
    }

    keyPress = (e) => {
        musicBox.play(e.code);
        record.Record(e.code);
    }

}

new EventHandler();