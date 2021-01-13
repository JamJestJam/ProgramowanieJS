import { weatherDownload } from './DownloadWeather.js';

class CreateIcon {
    constructor(CityName) {
        this.CityName = CityName;
        this.box = document.createElement('div');
        this.box.classList.add('box');

        this.Update();
        setInterval(() => {
            this.Update();
        }, 120000);
    }

    Update() {
        weatherDownload.GetWeather(this.CityName).then(obj => {
            this.UpdateDiv(obj);
        }).catch(() => { this.box.remove(); });
    }

    UpdateDiv(obj) {
        this.box.innerHTML = `
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
        <div class="weathercon"><img src="http://openweathermap.org/img/wn/${obj.weather[0].icon}.png" alt="Pusto"  class="icon"></div>
        <div class="info">
        <h2 class="location">${obj.name}</h2>
        <p class="location">${obj.weather[0].description}</p>
        <p class="date">${this.GetFullDate()}</p>
        <h1 class="temp">${obj.main.temp} &deg;C | ${obj.main.pressure} HP</h1>
        </div>`;
    }

    GetFullDate() {
        const date = new Date();
        return this.GetDay(date.getDay()) + ' | ' + date.getDate() + ' ' + this.GetMounth(date.getMonth());
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
}

export { CreateIcon };