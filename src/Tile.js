export class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addTile(tileMove) {
        return new Tile(this.x + tileMove.x, this.y + tileMove.y);
    }

    getDistance(tile) {
        const dx = tile.x - this.x;
        const dy = tile.y - this.y;

        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}