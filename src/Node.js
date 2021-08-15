import {Tile} from "./Tile";
import { canvas, colors } from "./main";

export class Node extends Tile {
    constructor(x, y, color) {
        super(x, y, color);
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

    /*
    @params map {Map}
    @params tile {Tile}
    @return {list} neighbors of the tile selected in params
     */
    findNeighbors(map) {
        let node;
        if (this.x < map.matrix[0].length - 1) {
            node = new Node(this.x + 1, this.y, colors.green)
            node.draw(map)
            this.neighbors.push(node)
        }

        if (this.y < map.matrix.length - 1) {
            node = new Node(this.x, this.y + 1, colors.green)
            node.draw(map)
            this.neighbors.push(node)
        }

        if (this.x > 0) {
            node = new Node(this.x - 1, this.y, colors.green)
            node.draw(map)
            this.neighbors.push(node)
        }

        if (this.y > 0) {
            node = new Node(this.x, this.y - 1, colors.green)
            node.draw(map)
            this.neighbors.push(node)
        }
    }
}