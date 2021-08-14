import { Tile} from "./Tile";

export class Map {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.matrix = [];
    }

    /*
    Update matrix attribute => Create a 2D array to represent the map.
     */
    generate() {
        for (let y = 0; y < this.height; y++) {
            this.matrix.push([])
            for (let x = 0; x < this.width; x++) {
                this.matrix[y].push(new Tile(x, y))
            }
        }
    }

}