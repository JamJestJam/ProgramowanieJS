import { weatherDownload } from './DownloadWeather.js';
import { forecastDownload } from './DownloadForecast.js';

class CreateIcon {
    constructor(CityName) {
        this.CityName = CityName;
        this.box = document.createElement('div');
        this.forecast = document.querySelector('#Forecast');
        this.forecastContent = document.querySelector('#ForecastContent');
        this.box.classList.add('box');

        this.box.addEventListener('click', this.Forecast);

        this.Update();
        setInterval(() => {
            this.Update();
        }, 120000);
    }

    Forecast = () => {
        forecastDownload.GetForecast(this.CityName).then(obj => { this.ForecastIcon(obj);});
    }

    ForecastIcon(obj) {
        this.forecast.classList.remove('hidden');
        let text = '<table class="styled-table"><thead><tr class="active-row"><th>Data</th><th>Temperatura</th><th>Cisnienie</th><th>Opis</th></tr></thead>';

        obj.list.forEach(element => {
            const date = new Date(element.dt_txt);
            console.log(element);
            text +=
                 `<tr>
                    <td>${this.GetFullDate(date)}</td>
                    <td>${element.main.temp} &deg;C</td>
                    <td>${element.main.pressure} HP</td>
                    <td>${element.weather[0].description}</td>
                </tr>`;
        });
        this.forecastContent.innerHTML = text;
    }

    Update() {
        weatherDownload.GetWeather(this.CityName).then(obj => {
            this.UpdateDiv(obj);
        }).catch(() => { this.box.remove(); });
    }

    UpdateDiv(obj) {
        this.box.innerHTML = `
        <div>
            <div class='wave -one'></div>
            <div class='wave -two'></div>
            <div class='wave -three'></div>
            <div class="weathercon"><img src="http://openweathermap.org/img/wn/${obj.weather[0].icon}.png" alt="Pusto"  class="icon"></div>
            <div class="info">
                <h2 class="location">${obj.name}</h2>
                <p class="location">${obj.weather[0].description}</p>
                <p class="date">${this.GetFullDate(new Date())}</p>
                <h1 class="temp">${obj.main.temp} &deg;C | ${obj.main.pressure} HP</h1>
            </div>
        </div>`;
    }

    GetFullDate(date) {
        return this.GetDay(date.getDay()) + ' | ' + 
            date.getDate() + ' ' + 
            this.GetMounth(date.getMonth()) + ' | ' + 
            this.DoubleDigit(date.getHours()) + ':' + 
            this.DoubleDigit(date.getMinutes());
    }

    GetDay(NR) {
        switch (NR) {
        case 1: return 'Poniedziałek';
        case 2: return 'Wtorek';
        case 3: return 'Środa';
        case 4: return 'Czwartek';
        case 5: return 'Piątek';
        case 6: return 'Sobota';
        default: return 'Niedziela';
        }
    }

    GetMounth(NR) {
        switch (NR) {
        case 0: return 'Styczeń';
        case 1: return 'Luty';
        case 2: return 'Marzec';
        case 3: return 'Kwiecień';
        case 4: return 'Maj';
        case 5: return 'Czerwiec';
        case 6: return 'Lipiec';
        case 7: return 'Sierpień';
        case 8: return 'Wrzesień';
        case 9: return 'Październik';
        case 10: return 'Listopad';
        default: return 'Grudzień';
        }
    }

    DoubleDigit(str){
        return (str < 10) ? '0' + str.toString() : str.toString();
    }
}

export { CreateIcon };