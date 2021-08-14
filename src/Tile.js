export class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = {
            green: 0xA9F2A9,
            red: 0xEA6363,
            grey: 0xD2D2D2,
            black: 0x000000
        }
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
    draw(canvas, coordX, coordY, dim) {
        canvas.graphics.lineStyle(1, this.color.black, 1);
        canvas.graphics.beginFill(this.color.grey);
        canvas.graphics.drawRect(coordX, coordY, dim, dim)
        canvas.graphics.endFill()
    }
}