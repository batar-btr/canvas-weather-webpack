import getWeather from './getweather';
import * as urlQueries from './urlqueries';
import Preloader from './preloader';
import Background from './background';
import Header from './header';
import Animate from './animate';
import Diagrams from './diagrams-section';
function log(arg) {
    console.log(arg);
}

const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let header = new Header(w, h);
let preloader = new Preloader(w, h);
let diagrams = new Diagrams(w, h);
let bgc = new Background(w, h);
const weather = new getWeather(urlQueries);
let animate = new Animate(w, h);

weather.subscribe(header.setup, header);
weather.subscribe(diagrams.setup, diagrams);
weather.subscribe(preloader.setStatus, preloader);
weather.subscribe(bgc.setup, bgc);

preloader.addFrame(diagrams, animate.addFrame, animate);
preloader.addFrame(header, animate.addFrame, animate);
preloader.addFrame(bgc, animate.addFrame, animate);
// preloader.addFrame(header);

weather.getJson();






// animate.addFrame(bgc);
// animate.addFrame(header);
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