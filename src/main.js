import { Map } from "./Map";
import { Canvas } from "./Canvas";
import { Node } from "./Node";

console.log("------------ A* Pathfinder! ------------");
const mapDim = 25;
const canvasSize = 500;
const tileDim = canvasSize / mapDim;
const colors = {
    green: 0xA9F2A9,
    red: 0xEA6363,
    grey: 0xD2D2D2,
    black: 0x000000
};

const canvas = new Canvas(canvasSize, 500, 0xE6E6E6);
const map = new Map(mapDim);
map.generate(canvas);

canvas.display();

// Tests
const node = new Node(5, 5);
node.findNeighbors(map);

export { mapDim, tileDim, canvas, colors };
