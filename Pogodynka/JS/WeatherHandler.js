import { weatherDownload } from './DownloadWeather.js';
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
            weatherDownload.GetWeather(cityName).then(this.ShowObj);
        }
        if(first){
            weatherDownload.GetWeather(cityName).then(this.ShowObj);
        }
    }

    GetWeatherInput() {
        const cityName = this.input.value;
        this.GetWeather(cityName);
    }

    ShowObj = (obj) => {
        const tmp = new CreateIcon(obj);

        this.box.appendChild(tmp.box);
    }
}

const weatherHandler = new WeatherHandler();

export {weatherHandler};