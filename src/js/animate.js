export default class Animate {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.frames = [];
    };

    addFrame(frame) {
        this.frames.unshift(frame);
    }
    removeFrame(frame) {
        this.frames = this.frames.filter(fn => fn !== frame);
    }
    run(ctx) {
        ctx.fillStyle = 'rgb(29, 31, 32)';
        ctx.fillRect(0, 0, this.w, this.h);
        this.frames.forEach(frame => frame.remove ? this.removeFrame(frame) : frame.draw(ctx));
        window.requestAnimationFrame(this.run.bind(this, ctx));
    }
}