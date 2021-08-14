import {Tile} from "./Tile";

export class Node extends Tile {
    constructor(x, y) {
        super(x, y);
        this.cost = 0
        this.h = 0
        this.f = 0

        this.neighbors = []
        this.move = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ]
    }

    findNeighbors(map) {

    }
}