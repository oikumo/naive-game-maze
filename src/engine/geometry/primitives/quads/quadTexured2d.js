import { green, red } from "../../../../common/colors.js";
import { createCheckerTexture } from "../../../tex.js";
import { Line2d } from "../line/line2d.js";

export function QuadTextured2d(points, tex) {
    this.points = points || [];
    this.tex = tex || createCheckerTexture(10, 10, red, green);
    this.segments = {
        ab: Line2d([points[0], points[1]]),
        bd: Line2d([points[1], points[2]]),
        dc: Line2d([points[2], points[3]]),
        ca: Line2d([points[3], points[0]])
    };
    this.boundingBox = this.generateBoundingBox();
}

QuadTextured2d.prototype.getTexColor = function (x, y) {
    
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