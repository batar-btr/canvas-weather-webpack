import Snow from './bgconditions';

export default class Background {
    constructor(w, h) {
        this.bgc = 'rgb(29, 31, 32)';
        this.w = w;
        this.h = h;
    }
    draw(ctx) {
        ctx.fillStyle = this.bgc;
        ctx.fillRect(0, 0, this.w, this.h);
        this.bg.draw(ctx);
    }
    setup({ main: { temp }, weather, wind: { speed } }) {
        this.temp = temp;
        this.windSpeed = speed;
        this.description = weather[0].main;
        this.bg = new Snow(this.w, this.h, 300, this.windSpeed);
        this.bg.setup();
    }
}