import { green, red } from "../../../../common/colors.js";
import { createCheckerTexture } from "../../../tex.js";
import { Line2d } from "../line/line2d.js";

export function QuadTextured2d(points, tex) {
    this.points = points || [];
    this.tex = tex || createCheckerTexture(10, 10, red, green);
    this.lineDrawer = new Line2d();
}

QuadTextured2d.prototype.draw = function (targetTex) {
    const pointsLength = this.points.length;
    if (pointsLength === 0) return;
    if (pointsLength === 1) {
        this.points[0].draw(targetTex);
    }

    for (let i = 1; i < pointsLength; i++) {
        Line2d.draw(targetTex, this.points[i - 1], this.points[i], green);
    }

    Line2d.draw(targetTex, this.points[pointsLength - 1], this.points[0], red);
}