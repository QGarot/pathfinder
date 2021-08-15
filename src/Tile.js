import { Graphics } from "pixi.js";
import { mapDim, tileDim, colors} from "./main";

export class Tile extends Graphics {
    constructor(x, y, color=0xD2D2D2) {
        super()
        this.x = x;
        this.y = y;
        this.dim = undefined;
        this.color = color;
    }

    /*
    @params {Tile} gap tile.
    @return {Tile} The tile next to this with "tileMove" as tile-delta.
     */
    addTile(tileMove) {
        return new Tile(this.x + tileMove.x, this.y + tileMove.y);
    }

    /*
    @params {Tile}
    @returns {number} The distance between this and the tile in param.
     */
    getDistance(tile) {
        const dx = tile.x - this.x;
        const dy = tile.y - this.y;

        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }

    /*
    @params canvas {Canvas} Canvas in which tile will be drawn
    @params coordX/y {number} Coords of top-left corner
    @params dim {number} Dimension of the square
     */
    draw(container) {
        this.lineStyle(1, colors.black, 1);
        this.beginFill(this.color);
        this.drawRect(this.x * tileDim, this.y * tileDim, tileDim, tileDim)
        this.endFill()

        // Add on container
        container.addChild(this);
    }
}