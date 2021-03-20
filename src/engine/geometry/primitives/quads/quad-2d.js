import { Line2d } from "../line/line2d.js";

export function Quad2d(points) {
    this.points = points;
    this.segments = {
        ab: new Line2d([points[0], points[1]]),
        bd: new Line2d([points[1], points[2]]),
        dc: new Line2d([points[2], points[3]]),
        ca: new Line2d([points[3], points[0]])
    };
    //this.boundingBox = this.generateBoundingBox();
}