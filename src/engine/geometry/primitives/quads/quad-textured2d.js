import { green, red } from "../../../../common/colors.js";
import { createCheckerTexture } from "../../../tex.js";
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

export function QuadTextured2d(quad, tex) {
    this.quad = quad;
    this.tex = tex || createCheckerTexture(10, 10, red, green);
}

QuadTextured2d.prototype.drawTextured = function (targetTex, dx = 0, dy = 0) {
    const size = this.boundingBox.size();
    let col = 0
    let row = 0

    for (let i = 0; i < size; i++) {
        if (!insideQuad(col, row)) continue;
        const color = this.getTexColor(col, row);
        this.targetTex.pixels = [Math.ceil(dx + col) + Math.ceil(dy + row) * this.targetTex.width];

        if (col + 1 == this.width) {
            col = 0
            row++
        }
        else {
            col++
        }
    }
}

QuadTextured2d.prototype.draw = function (targetTex) {
    const pointsLength = this.quad.points.length;
    if (pointsLength === 0) return;
    if (pointsLength === 1) {
        this.quad.points[0].draw(targetTex);
    }

    const points = this.quad.points;

    for (let i = 1; i < pointsLength; i++) {
        Line2d.draw(targetTex, points[i - 1], points[i], green);
    }

    Line2d.draw(targetTex, points[pointsLength - 1], points[0], red);
}