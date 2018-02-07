function checkresponse(response) {
    if (response.ok && response.headers.get('Content-Type').includes('application/json')) {
        return response.json();
    }
    throw new Error('Ooops - shit happen`s');
}

export default class getWeather {
    constructor({key, cityId, units}){
        this.key = key;
        this.cityId = cityId;
        this.units = units;
        this.subscribers = [];
    }

    subscribe(func, context) {
        this.subscribers.push(func.bind(context));
    }

    publish(data) {
        console.log(data);
        this.subscribers.forEach(fn => fn(data));  
    }

    getJson(){
        return fetch(`http://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&units=${this.units}&APPID=${this.key}`)
        .then(checkresponse)
        .then(this.publish.bind(this));
        
    }
};