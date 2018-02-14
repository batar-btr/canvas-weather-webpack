const randomRange = (min, max) => {
    return min + Math.random() * (max - min);
}

class Particle {
    constructor(x, y, w, h, radius, windSpeed) {
        this.defX = x;
        this.windSpeed = windSpeed;
        this.shift = Math.random() * 100;
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.radius = radius;
        this.baseColor = 'rgba(170,170,170,opacity)';
        this.color = 'white';
        this.c = 'white';
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        this.update();
    }
    update() {
        if (this.y > this.h + this.radius) { this.y = -this.radius };
        if (this.x > this.w + this.radius) {
            this.defX = 0;
        } else {
            this.defX += this.windSpeed / 8;
        }
        this.y += this.radius / 6;
        this.x = Math.sin(this.y * 0.01 + this.shift) * 40 + this.defX;
        let newOpacity = 1 - this.y / this.h;
        this.color = this.baseColor.replace('opacity', newOpacity);

    }
};
class RainDrop {
    constructor(x, y, w, h) { //rdw - rainDropWidth, rdh - rainDropHeight
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.length = randomRange(5, 50);
        this.opacity = randomRange(0.1, 0.3);
        this.lineWidth = randomRange(1, 3);
        // this.rdw = rdw;
        // this.rdh = rdh;
    }

    draw(ctx) {
        let grad = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        grad.addColorStop(0, 'rgba(120, 120, 120, 0)');
        grad.addColorStop(1, `rgba(255, 255, 255, ${this.opacity})`);
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = grad;
        ctx.lineCap = 'round';
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.closePath();
        this.update();
    }
    update() {
        this.y > this.h ? (this.y = -20, this.x = Math.random() * this.w) : this.y += this.length*0.4;
    }
}

class Snow {
    constructor(w, h, windSpeed) {
        this.w = w;
        this.h = h;
        this.windSpeed = windSpeed;
        this.radius = 1;
        this.addRadius = 5;
        this.particles = [];
        this.amount = 300;
    }
    setup() {
        for (let i = 0; i < this.amount; i++) {
            let radius = this.radius + Math.random() * this.addRadius;
            let x = radius + Math.random() * (this.w - radius * 2);
            let y = radius + Math.random() * (this.h - radius * 2);
            this.particles.push(new Particle(x, y, this.w, this.h, radius, this.windSpeed));
        }
    }
    draw(ctx) {
        this.particles.forEach(item => item.draw(ctx));
    }
}
class Rain {
    constructor(w, h, windSpeed) {
        this.w = w;
        this.h = h;
        this.windSpeed = windSpeed;
        this.rainDrops = [];
        this.amount = 100;
    }
    setup() {
        for (let i = 0; i < this.amount; i++) {
            let x = Math.random() * this.w;
            let y = Math.random() * this.h;
            this.rainDrops.push(new RainDrop(x, y, this.w, this.h));
        }
        console.log(this.rainDrops);
    }
    draw(ctx) {
        this.rainDrops.forEach(item => item.draw(ctx));
    }
}
class Sun {
    constructor(x) {
        this.x = x;
    }
}
class Clouds {
    constructor(x) {
        this.x = x;
    }
}
let one = {
    Snow,
    Rain,
    Sun,
    Clouds,
    create(name, ...rest) {
        let clazz = this[name];
        if (typeof clazz !== 'function') {
            throw {
                name: 'ERROR',
                message: 'class doesn`t exist'
            }
        } else {
            return new clazz(...rest);
        }

    }
};

export { one };

// export default class BgCondition {

//     static factory(type, w, h, windSpeed) {
//         let constr = type,
//             newBg;

//         if (typeof BgCondition[constr] !== 'function') {
//             throw {
//                 name: 'Error',
//                 massage: constr + " doesn`t exist"
//             }
//         }
//         newBg = new BgCondition[constr](w, h, windSpeed);
//         return newBg;
//     }

//     static Snow(w, h, windSpeed) {
//         this.w = w;
//         this.h = h;
//         this.windSpeed = windSpeed;
//         this.snow = 'snow';
//         this.radius = 1;
//         this.addRadius = 10;
//         this.particles = [];
//         this.amount = 300;
//         this.setup = function () {
//             for (let i = 0; i < this.amount; i++) {
//                 let radius = this.radius + Math.random() * this.addRadius;
//                 let x = radius + Math.random() * (this.w - radius * 2);
//                 let y = radius + Math.random() * (this.h - radius * 2);
//                 this.particles.push(new Particle(x, y, this.w, this.h, radius, this.windSpeed));
//             }
//         };
//         this.draw = function(ctx){
//             this.particles.forEach(item => item.draw(ctx));
//         };
//     }
// }
