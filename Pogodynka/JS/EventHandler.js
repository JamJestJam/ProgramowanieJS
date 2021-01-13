import {weatherDownload} from './DownloadWeather.js';
import {CreateIcon} from './CreateIcon.js';

class EventHandle{
    constructor(){
        this.button = document.querySelector('#button');
        this.input = document.querySelector('#city');

        this.box = document.querySelector('#content');
        this.button.addEventListener('click', ()=>this.GetWeather());
    }

    GetWeather(){
        const cityName = this.input.value;

        weatherDownload.GetWeather(cityName).then(this.ShowObj);
    }

    ShowObj=(obj)=>{
        const tmp = new CreateIcon(obj);
        
        this.box.appendChild(tmp.box);
    }
}

new EventHandle();