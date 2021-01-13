import { LSweather } from './LS_weather.js';
import { weatherHandler } from './WeatherHandler.js';

class EventHandle {
    constructor() {
        LSweather.firstRun();

        this.button = document.querySelector('#button');
        this.button.addEventListener('click', () => weatherHandler.GetWeatherInput());
    }
}

new EventHandle();