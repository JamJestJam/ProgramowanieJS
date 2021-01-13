class CreateIcon {
    constructor(Obj) {
        this.box = document.createElement('div');
        this.box.classList.add('box');
        console.log(Obj);

        this.box.innerHTML = `
            <div class='wave -one'></div>
            <div class='wave -two'></div>
            <div class='wave -three'></div>
            <div class="weathercon"><img src="http://openweathermap.org/img/wn/${Obj.weather[0].icon}.png" alt="Pusto"  class="icon"></div>
            <div class="info">
            <h2 class="location">${Obj.name}</h2>
            <p class="location">${Obj.weather[0].description}</p>
            <p class="date">${this.GetFullDate()}</p>
            <h1 class="temp">${Obj.main.temp} &deg;C | ${Obj.main.pressure} HP</h1>
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