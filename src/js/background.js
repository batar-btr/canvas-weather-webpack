import { one } from './bgconditions';
let elem = document.querySelector('.main');
export default class Background {
    constructor(w, h) {
        this.bgc = 'rgb(29, 31, 32)';
        this.w = w;
        this.h = h;
    }
    draw(ctx) {
        // ctx.fillStyle = this.bgc;
        ctx.clearRect(0, 0, this.w, this.h);
        this.bg.draw(ctx);
    }
    setBgImg(node){
        node.style.background = "url(../src/img/01n.jpg) no-repeat center center" ;
        node.style.backgroundSize = 'cover';
        console.log('SET BACKGROUNDS');
    }
    setup({ main: { temp }, weather, wind: { speed } }) {
        this.temp = temp;
        this.windSpeed = speed;
        this.description = weather[0].main;
        this.bg = one.create('Rain', this.w, this.h, speed);
        this.bg.setup();
        // this.setBgImg(elem);
        // this.bg = BgCondition.factory(this.description, this.w, this.h, speed );
        // this.bg.setup();
    }
}

console.log(one);