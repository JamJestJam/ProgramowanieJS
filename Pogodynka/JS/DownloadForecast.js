class ForecastDownload {
    constructor() {
        this.server = 'https://api.openweathermap.org/data/2.5/forecast?q={City}&appid={Key}&units=metric&lang=PL&cnt={Count}';
        this.key = 'a38e5cc25081eaae34374bdb094f0c5f';
    }

    StringConventer(string, object) {
        for (const key in object) {
            const value = object[key];

            string = string.replace('{' + key + '}', value);
        }
        return string;
    }

    GetForecast(name, count = 12) {
        const URL =
            this.StringConventer(this.server, { City: name, Key: this.key, Count: count });

        return fetch(URL)
            .then((e) => e.json());
    }
}

const forecastDownload = new ForecastDownload();

export { forecastDownload };