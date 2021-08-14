import { Tile} from "./Tile";

export class Map {
    constructor(dim) {
        this.dim = dim
        this.matrix = [];
        console.log(this)
    }

    /*
    Update matrix attribute => Create a 2D array to represent the map.
     */
    generate(canvas) {
        const tileDim = canvas.size / this.dim;
        let tile;
        for (let y = 0; y < this.dim; y++) {
            this.matrix.push([])
            for (let x = 0; x < this.dim; x++) {
                tile = new Tile(x, y)
                this.matrix[y].push(tile)
                tile.draw(canvas, x * tileDim, y * tileDim, tileDim)
            }
        }
    }
}