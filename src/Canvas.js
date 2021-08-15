import * as PIXI from "pixi.js";

export class Canvas extends PIXI.Application {
    constructor(size, bgColor) {
        super({
            width: size,
            height: size,
            backgroundColor: bgColor
        });
        this.size = size
    }

    /*
    Display canvas and its components
     */
    display() {
        document.body.appendChild(this.view);
    }
}
