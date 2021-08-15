import { Container } from "pixi.js";
import { Tile} from "./Tile";
import { colors } from "./main";

export class Map extends Container {
    constructor(dim) {
        super()
        this.dim = dim
        this.matrix = [];

        console.log("Matrix of the map created")
        console.log(this)
    }

    /*
    @params x y {numbers}
    @params {Tile} Tile with coords (x, y)
    */
    getTile(x, y) {
        return this.matrix[y][x]
    }

    /*
    Update matrix attribute => Create a 2D array to represent the map.
     */
    generate(canvas) {
        let tile;
        for (let y = 0; y < this.dim; y++) {
            this.matrix.push([])
            for (let x = 0; x < this.dim; x++) {
                tile = new Tile(x, y, colors.grey);
                this.matrix[y].push(tile);
                tile.draw(this);
            }
        }

        canvas.stage.addChild(this);
    }
}