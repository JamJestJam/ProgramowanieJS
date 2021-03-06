class WeatherDownload {
    constructor() {
        this.server = 'https://api.openweathermap.org/data/2.5/weather?q={City}&appid={Key}&units=metric&lang=PL';
        this.key = 'a38e5cc25081eaae34374bdb094f0c5f';
    }

    StringConventer(string, object) {
        for (const key in object) {
            const value = object[key];

            string = string.replace('{' + key + '}', value);
        }
        return string;
    }

    GetWeather(name) {
        const URL =
            this.StringConventer(this.server, { City: name, Key: this.key });

        return fetch(URL)
            .then((e) => e.json());
    }
}

const weatherDownload = new WeatherDownload();

export { weatherDownload };