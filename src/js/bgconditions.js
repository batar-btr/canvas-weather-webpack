class Particle {
    constructor(x, y, w, h, radius, windSpeed) {
        this.defX = x;
        this.windSpeed =windSpeed;
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
            this.defX += this.windSpeed/4*this.radius/6;
        }
        this.y += this.radius / 6;
        this.x = Math.sin(this.y * 0.01 + this.shift) * 40 + this.defX;
        let newOpacity = 1 - this.y / this.h;
        this.color = this.baseColor.replace('opacity', newOpacity);

    }
};


export default class Snow {
    constructor(w, h, amount, windSpeed) {
        this.amount = amount;
        this.w = w;
        this.h = h;
        this.windSpeed = windSpeed;
        this.radius = 1;
        this.addRadius = 10;
        this.particles = [];
    }
    draw(ctx) {
        this.particles.forEach(item => item.draw(ctx));
    }
    setup() {
        for (let i = 0; i < this.amount; i++) {
            let radius = this.radius + Math.random() * this.addRadius;
            let x = radius + Math.random() * (this.w - radius * 2);
            let y = radius + Math.random() * (this.h - radius * 2);
            this.particles.push(new Particle(x, y, this.w, this.h, radius, this.windSpeed));
        }
    }
}