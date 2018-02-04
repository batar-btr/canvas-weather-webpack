import getWeather from './getweather';

const urlQueries = {
    key: 'dd3a270b23d98cf77f4b36c4d4e8ab8c',
    cityId: 706483,
    units: 'metric'
};

const weather = new getWeather(urlQueries);

let obj = {
    setup(data) {
        this.data = data;
        console.log(this);
    }
}


let obj2 = {
    setup(data) {
        this.data = data;
        console.log(this);
    }
}

weather.subscribe(obj.setup, obj);
weather.subscribe(obj2.setup, obj2);

weather.getJson();
