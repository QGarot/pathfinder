import { Map } from "./Map";
import * as PIXI from "pixi.js";
import { Canvas } from "./Canvas";

console.log("------------ A* Pathfinder! ------------");

const canvas = new Canvas(500, 500, 0xE6E6E6);
const map = new Map(25);
map.generate(canvas);

canvas.display();
