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
weather.subscribe(preloader.setStatus, preloader);

weather.getJson();


class Animate {
    constructor() {
        this.frames = [];
    }

    addFrame(frame) {
        this.frames.push(frame);
    }
    removeFrame(frame) {
        let idx = this.frames.indexOf(frame);
        console.log(idx);

        this.frames.splice(idx, 1);
    }
    run(ctx) {
        ctx.fillStyle = 'rgb(29, 31, 32)';
        ctx.fillRect(0, 0, w, h);
        this.frames.forEach(frame => frame.remove ? this.removeFrame.call(this, frame) : frame.draw(ctx));
        window.requestAnimationFrame(this.run.bind(this, ctx));
    }
}

let animate = new Animate();
animate.addFrame(preloader);
animate.run(ctx);





// function animate() {
//     ctx.fillStyle = 'rgb(29, 31, 32)';
//     ctx.fillRect(0, 0, w, h);
//     header.draw(ctx);
//     preloader.draw(ctx);
//     if (preloader.opacity === 0) {
//         animate = function () {
//             ctx.fillStyle = 'rgb(29, 31, 32)';
//             ctx.fillRect(0, 0, w, h);
//             header.draw(ctx);
//             window.requestAnimationFrame(animate);
//         }
//         console.log(animate);
//     }

//     window.requestAnimationFrame(animate);
// }

// animate();



// function animate() {
//     ctx.fillStyle = 'rgb(29, 31, 32)';
//     ctx.fillRect(0, 0, w, h);
//     preloader.draw(ctx);
//     if (animate.status) {
//         animate = function () {
//             ctx.fillStyle = 'rgb(29, 31, 32)';
//             ctx.fillRect(0, 0, w, h);
//             header.draw();
//             diagrams.draw();
//             preloader.update();
//             window.requestAnimationFrame(animate);
//         }
//         console.log(animate);
//     }

//     window.requestAnimationFrame(animate);
// }
// animate();

// function animate() {
//     ctx.fillStyle = 'rgb(29, 31, 32)';
//     ctx.fillRect(0, 0, w, h);
//     preloader.draw(ctx);
//     window.requestAnimationFrame(animate);
// }

// function animate2() { 
//     header.draw(ctx);
//     window.requestAnimationFrame(animate2);
// }
// // animate2();
// // animate();