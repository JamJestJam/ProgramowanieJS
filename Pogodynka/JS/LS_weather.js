import { LS } from './LocalStorage.js';
import { weatherHandler } from './WeatherHandler.js';

class LS_Weather {
    constructor(saveName = 'weather') {
        this.noteName = saveName;
    }

    getWeather() {
        const LS_elements = JSON.parse(LS.getItem(this.noteName));
        return this.mapWeather(LS_elements);
    }

    mapWeather(element) {
        if (element != undefined) {
            return element;
        } else {
            return [];
        }
    }

    setWeather(note) {
        LS.setItem(this.noteName, JSON.stringify(note));
    }

    firstRun(){
        const tmp = this.getWeather();
        tmp.forEach(element => {
            weatherHandler.GetWeather(element, true);
        });
    }
}

const LSweather = new LS_Weather();

export { LSweather };