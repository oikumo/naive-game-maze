import { BoundingBox2d } from "../boxes/bounding-box-2d.js";
import { Line2d } from "../line/line2d.js";

export class Quad2d {
    constructor(points) {
        this.points = points;
        this.segments = {
            ab: new Line2d(points[0], points[1]),
            bd: new Line2d(points[1], points[2]),
            dc: new Line2d(points[2], points[3]),
            ca: new Line2d(points[3], points[0])
        };

        this.end = new Line2d(points[2], points[3]);
    }

    calculateBoundingBox() {
        return BoundingBox2d.createFromPoints2d(this.points);
    }

    scanLine(y) {
        const leftY = this.segments.ab.a.position[1];
        let line;

        if (y <= leftY) {
            line = this.segments.ab;
        } else {
            line = this.segments.ca;
        }

        const x = line.getXAt(y);
        return x;
    }

    scanLineEnd(y) {
        const leftY = this.segments.bd.b.position[1];
        let line;

        if (y <= leftY) {
            line = this.segments.bd;
        } else {
            line = this.end;
        }

        const x = line.getXAt(y);
        return x;
    }
}