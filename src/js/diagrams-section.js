import diagram from './diagram'
import Diagram from './diagram';

export default class diagrams {
    constructor(w, h) {
        this.w = w;
        this.h = w > h ? h / 6 : h / 8;
        this.width = w;
        this.height = w > h ? h / 4 : h / 4;
        this.strokeStyle = 'white';
    }
    draw(ctx){
        ctx.save();
        ctx.translate(0, this.h);
        ctx.strokeStyle = this.strokeStyle;
        ctx.strokeRect(0, 0, this.width, this.height);
        this.clouds.draw(ctx);
        this.humidity.draw(ctx);
        // this.cloudiness.update();
        // this.humidity.update();
        ctx.restore();
    }
    setup({clouds:{all},main:{humidity}}) {
        this.clouds = new Diagram(this.width*0.3, this.height*0.6, this.height, all, 'clouds', 'lightblue');
        this.humidity = new Diagram(this.width*0.7, this.height*0.6, this.height, humidity, 'humidity', 'yellow');
        console.log(humidity);
    }
};