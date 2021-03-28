import { Line2d } from "../line/line2d.js";
import { Point2d } from "../points/point2d.js";
import { Triangle2d } from "./triangle-2d.js";

export class Triangle2dRender {
    constructor(pivot, upperVert, lowerVert, scanLeftToRight) {
        this.pivot = pivot;
        this.upperVert = upperVert;
        this.lowerVert = lowerVert;
        this.scanLeftToRight = scanLeftToRight;
    }

    static create(triangle) {
        if (Triangle2d.segmentParallelToYAxis(triangle)) {
            const pivot = triangle.c;
            const upperVert = new Line2d(triangle.c, triangle.b);
            const lowerVert = new Line2d(triangle.c, triangle.a);
            const scanLeftToRight = false;

            return new Triangle2dRender(pivot, upperVert, lowerVert, scanLeftToRight);
        }
    }
}