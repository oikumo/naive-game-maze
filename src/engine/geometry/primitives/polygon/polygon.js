import { red } from "../../../../common/colors.js";
import { drawLine2D } from "../line/line-2d.js";

export function Polygon2d(points, color) {
    this.points = points || [];
    this.color = color || red;
}

Polygon2d.prototype.draw = function (tex) {
    const pointsLength = this.points.length;
    if (pointsLength === 0) return;
    if (pointsLength === 1) {
        this.points[0].draw(tex);
    }
    for (let i = 1; i < pointsLength; i++) {
        drawLine2D(tex, this.points[i - 1], this.points[i], red);
    }

    drawLine2D(tex, this.points[pointsLength - 1], this.points[0], red);
}