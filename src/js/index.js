import getWeather from './getweather';
import * as urlQueries from './urlqueries';
import Preloader from './preloader';
import Header from './header';


const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let header = new Header(w, h);
let preloader = new Preloader(w, h);
const weather = new getWeather(urlQueries);

weather.subscribe(header.setup, header);

weather.getJson();

function animate() {
    ctx.fillStyle = 'rgb(29, 31, 32)';
    ctx.fillRect(0, 0, w, h);
    preloader.draw(ctx);
    if (animate.status) {
        animate = function () {
            ctx.fillStyle = 'rgb(29, 31, 32)';
            ctx.fillRect(0, 0, w, h);
            header.draw();
            diagrams.draw();
            preloader.update();
            window.requestAnimationFrame(animate);
        }
        console.log(animate);
    }

    window.requestAnimationFrame(animate);
}
animate();