export default class Drag {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.height = this.h / 8;
        this.test = 0;
    }
    draw(ctx) {
        ctx.fillStyle = 'green';
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillRect(0, 0, this.w * 2, this.height);
        ctx.font = `${Math.floor(this.height * 0.1)}px 'Poiret One', cursive`;
        for (let i = 1; i < 16; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(i, this.w / 4 * i, this.height / 2);
            ctx.closePath();
        }
        ctx.restore();
    }
    update(e) {
        let target = e.changedTouches[0];
        // this.test = e.changedTouches[0].pageX.toFixed(2);
        let self = this;
        let coords = {
            x: target.pageX,
            y: target.pageY
        }
        function move(e) {
            e = e.changedTouches[0];
            let shiftX = e.pageX - coords.x;
            this.test = shiftX;
            this.x = shiftX;
            // if (e.pageY > this.y && e.pageY < this.y + this.height) {
            //     if (e.pageX > this.update.x) {
            //         this.x < 0 ? this.x += 10 : false;
            //     } else {
            //         this.x -= 10;
            //     }
            //     this.update.x = e.pageX;
            // }
        }

        document.ontouchmove = function (e) {
            move.call(self, e);
        };

        document.ontouchend = function () {
            document.ontouchmove = null;
            document.ontouchend = null;
        };
    }
}