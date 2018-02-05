export default class Preloader {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.status = false;
        this.opacity = 1;
        this.bgc = 'rgba(29, 31, 32, opacity)';
        this.circleColor = 'rgba(52, 52, 54, opacity)';
        this.dotColor = 'rgba(14, 190, 255, opacity)';
        this.x = w / 2;
        this.y = h / 2;
        this.radius = w > h ? h / 4 : w / 4;
        this.radians = 0;
        this.speed = 0.02;
        this.fontSize = w > h ? h / 5 : w / 5;
    }
    draw(ctx) {
        ctx.fillStyle = this.bgc.replace('opacity', this.opacity);
        ctx.fillRect(0, 0, this.w, this.h);
        ctx.beginPath();
        ctx.arc(this.w / 2, this.h / 2, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.circleColor.replace('opacity', this.opacity);
        ctx.lineWidth = Math.floor(this.w > this.h ? this.h / 100 : this.w / 100);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = this.dotColor.replace('opacity', this.opacity);
        ctx.fill();
        ctx.closePath();
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.radians * 4);
        ctx.arc(30, 0, 5, 0, Math.PI * 2, false);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = this.circleColor.replace('opacity', this.opacity);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText('btrn', this.w / 2, this.h / 2);
        this.update(ctx);
    }
    update(ctx) {
        if (this.status) {
            this.opacity > 0 ? this.opacity -= 0.01 : this.opacity = 0;
        }

        if (this.opacity != 0) {
            this.radians += this.speed;
            this.radians > Math.PI * 2 ? this.radians -= Math.PI * 2 : false;
            this.x = this.w / 2 + Math.cos(this.radians) * this.radius;
            this.y = this.h / 2 + Math.sin(this.radians) * this.radius;
        }
    }
}








// let preloader = {
//     status: false,
//     opacity: 1,
//     bgc: 'rgba(29, 31, 32, opacity)',
//     circleColor: 'rgba(52, 52, 54, opacity)',
//     dotColor: 'rgba(14, 190, 255, opacity)',
//     x: w / 2,
//     y: h / 2,
//     radius: w > h ? h / 4 : w / 4,
//     radians: 0,
//     speed: 0.02,
//     fontSize: w > h ? h / 5 : w / 5,
//     draw() {
//         ctx.fillStyle = this.bgc.replace('opacity', this.opacity);
//         ctx.fillRect(0, 0, w, h);
//         ctx.beginPath();
//         ctx.arc(w / 2, h / 2, this.radius, 0, Math.PI * 2, false);
//         ctx.strokeStyle = this.circleColor.replace('opacity', this.opacity);
//         ctx.lineWidth = Math.floor(w > h ? h / 100 : w / 100);
//         ctx.stroke();
//         ctx.closePath();
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
//         ctx.fillStyle = this.dotColor.replace('opacity', this.opacity);
//         ctx.fill();
//         ctx.closePath();
//         ctx.save();
//         ctx.beginPath();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.radians * 4);
//         ctx.arc(30, 0, 5, 0, Math.PI * 2, false);
//         ctx.fillStyle = 'yellow';
//         ctx.fill();
//         // ctx.moveTo(0, 0);
//         // ctx.lineTo(30, 0);
//         // ctx.stroke();
//         ctx.closePath();
//         ctx.restore();
//         ctx.font = `${this.fontSize}px Arial`;
//         ctx.fillStyle = this.circleColor.replace('opacity', this.opacity);
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText('btrn', w / 2, h / 2);
//     },
//     update() {
//         if (this.status) {
//             this.opacity > 0 ? this.opacity -= 0.01 : this.opacity = 0;
//         }

//         if (this.opacity != 0) {
//             this.radians += this.speed;
//             // this.gravity > 10 ? this.gravity -=0.2 : false;
//             this.radians > Math.PI * 2 ? this.radians -= Math.PI * 2 : false;
//             this.x = w / 2 + Math.cos(this.radians) * this.radius;
//             this.y = h / 2 + Math.sin(this.radians) * this.radius;
//             this.draw();
//         }

//     }
// };