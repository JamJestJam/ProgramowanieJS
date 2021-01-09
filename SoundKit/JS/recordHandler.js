import { musicBox } from './musicBox.js';

class RecordHandler{
    constructor(){
        this.recording = false;

        this.playBTN = document.querySelector('#play');
        this.recordBTN = document.querySelector('#record');
        this.recordNameInput = document.querySelector('#RecordName');
        this.recordList = document.querySelector('#music');
    }

    StartStopRecord=()=>{
        if (!this.recording) {
            const name = this.recordNameInput.value;

            const option = new Option();
            option.value = name;
            option.text = name;
            option.startMusic = Date.now();
            option.arrayMusic = new Array();
            this.recordList.options.add(option);

            this.recordBTN.innerHTML = 'Stop';
            this.recording = true;
        } else {
            this.recordBTN.innerHTML = 'Record';
            this.recording = false;
        }
    }

    Record=(key)=>{
        if(this.recording){
            const music = this.recordList.options[this.recordList.options.length - 1];
            music.arrayMusic.push({
                'Date': Date.now() - music.startMusic,
                'Key': key
            });
        }
    }

    Play=()=>{
        const nr = this.recordList.options.selectedIndex;
        
        if (nr == 0) {
            alert('no track selected');
            return;
        }
        
        const musics = this.recordList.querySelectorAll(':checked');

        musics.forEach(ele=>{
            this.play(ele);
        });
    }

    play(music){
        music.arrayMusic.forEach(element => {
            setTimeout(() => musicBox.play(element.Key), element.Date);
        });
    }
}

const record = new RecordHandler();

export {record};