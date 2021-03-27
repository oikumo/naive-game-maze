import { Point2d } from "../points/point2d.js";

export class BoundingBox2d {
    constructor(topLeft, bottomRight) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }

    get width() {
        return this.bottomRight.position[0] - this.topLeft.position[0];
    }

    get height() {
        return this.bottomRight.position[1] - this.topLeft.position[1];
    }

    size() {
        return this.width * this.height;
    }

    dimension() {
        const width = this.width;
        const height = this.height;
        return [width, height];
    }

    static createFromPoints2d(points) {
        let minX = Number.MAX_SAFE_INTEGER;
        let minY = Number.MAX_SAFE_INTEGER;
        let maxX = Number.MIN_SAFE_INTEGER;
        let maxY = Number.MIN_SAFE_INTEGER;

        for (let { position } of points) {
            if (position[0] < minX) {
                minX = position[0];
            }
            if (position[1] < minY) {
                minY = position[1];
            }
            if (position[0] >= maxX) {
                maxX = position[0];
            }
            if (position[1] >= maxY) {
                maxY = position[1];
            }
        }

        let topLeft = new Point2d(minX, minY);
        let bottomRight = new Point2d(maxX, maxY);
        const boundingBox = new BoundingBox2d(topLeft, bottomRight);

        return boundingBox;
    }

    static areEquals(bb1, bb2) {
        return Point2d.equals(bb1.topLeft, bb2.topLeft) &&
            Point2d.equals(bb1.bottomRight, bb2.bottomRight);
    }
}