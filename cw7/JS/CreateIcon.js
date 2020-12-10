class CreateIcon {
    constructor(Obj) {
        this.box = document.createElement('div');

        this.box.innerHTML = `
            <p>${Obj.name}</p>
            <p>${Obj.temp}<p>
            <p>${Obj.clouds.all}</p>
            <p>${Obj.wind.speed}</p>
            <p>${Obj.weather[0].description}</p>
            <img src="http://openweathermap.org/img/wn/${Obj.weather[0].icon}.png" alt="Pusto">
            `;
    }
}

export {CreateIcon};