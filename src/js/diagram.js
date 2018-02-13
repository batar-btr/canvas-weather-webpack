export default class Diagram {
    constructor(x, y, blockHeight, number, name, color) {
        this.blockHeight = blockHeight;
        this.x = x;
        this.y = y;
        this.amount = number;
        this.number = number != 100 ? Math.PI * 2 * (Number(`0.${number}`)) : 100;
        this.name = name;
        this.radians = 0;
        this.color = color;
        this.speed = 0.08;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.blockHeight*0.3, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'rgba(52, 52, 54, 1)';
        ctx.lineWidth = this.blockHeight*0.05;
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.blockHeight*0.3, 0, this.radians, false);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.blockHeight*0.05;
        ctx.stroke();
        ctx.closePath();
        ctx.font = `${this.blockHeight*0.2}px 'Poiret One', cursive`;
        ctx.fillStyle = '#ebebeb';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.amount, this.x, this.y);
        ctx.fillText(this.name, this.x, this.blockHeight*0.1);
        this.update();

    }
    update() {
        this.speed > 0.001 ? this.speed -= 0.0005 : false;
        this.radians < this.number ? this.radians += this.speed : false;
    }
};