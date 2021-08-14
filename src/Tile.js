export class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
}