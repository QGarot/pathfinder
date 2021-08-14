class Pathfinder {
    constructor(map, start, end) {
        this.map = map;
        this.start = start;
        this.end = end;

        this.openSet = [];
        this.closedSet = [];
        this.path = [];
    }
}