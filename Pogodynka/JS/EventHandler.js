import { LSweather } from './LS_weather.js';
import { weatherHandler } from './WeatherHandler.js';

class EventHandle {
    constructor() {
        LSweather.firstRun();

        this.button = document.querySelector('#button');
        this.button.addEventListener('click', () => weatherHandler.GetWeatherInput());
        this.forecast = document.querySelector('#Forecast');

        document.querySelector('#close').addEventListener('click',()=>{
            this.forecast.classList.add('hidden');
            console.log(123);
        });
    }
}

new EventHandle();