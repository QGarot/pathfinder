import { Map } from "./Map";

console.log("------------ A* Pathfinder! ------------");

let map = new Map(5, 3);
map.generate();

console.log(map.matrix)
