import { CreateIcon } from './CreateIcon.js';
import { LSweather } from './LS_weather.js';

class WeatherHandler {
    constructor(){
        this.input = document.querySelector('#city');
        this.box = document.querySelector('#content');
    }

    GetWeather(cityName, first = false) {
        const tmp = LSweather.getWeather();
        if (!tmp.includes(cityName)) {
            tmp.push(cityName);
            LSweather.setWeather(tmp);
            this.ShowObj(cityName);
        }
        if(first){
            this.ShowObj(cityName);
        }
    }

    GetWeatherInput() {
        const cityName = this.input.value;
        this.GetWeather(cityName);
    }

    ShowObj = (cityName) => {
        const tmp = new CreateIcon(cityName);

        this.box.appendChild(tmp.box);
    }
}

const weatherHandler = new WeatherHandler();

export {weatherHandler};