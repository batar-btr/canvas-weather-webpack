export default class Header {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.width = w;
        this.height = w > h ? h / 6 : h / 8;
        this.bgc = 'gray';
        this.textColor = '#ebebeb';
    }

    draw(ctx) {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.font = `${Math.floor(this.height * 0.8)}px 'Poiret One', cursive`;
        ctx.fillStyle = 'gray';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.cityName, this.w / 2, this.height / 2);
    }

    setup({name, main}) {
        this.cityName = name;
        console.log(main);
    } 
}

