export default class PicturePuzzle{
    constructor(el, imageSrc, width){
        this.wrapperEl = el;
        this.imageSrc = imageSrc;
        this.width = width;

        this.el = this.createWrapper();

        this.parentEl.appendChild(this.el);
    }

    createWrapper(){
        const div = document.createElement('div');
        return div;
    }
}