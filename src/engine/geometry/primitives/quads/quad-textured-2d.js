import { green, red } from "../../../../common/colors.js";
import { createCheckerTexture } from "../../../tex.js";
import { Line2d } from "../line/line2d.js";

export class QuadTextured2d {
    constructor(quad, tex) {
        this.quad = quad;
        this.tex = tex;
    }

    draw(targetTex) {
        const pointsLength = this.quad.points.length;
        if (pointsLength === 0) return;
        if (pointsLength === 1) {
            this.quad.points[0].draw(targetTex);
        }

        const points = this.quad.points;

        for (let i = 1; i < pointsLength; i++) {
            Line2d.draw(targetTex, points[i - 1], points[i], green);
        }

        Line2d.draw(targetTex, points[pointsLength - 1], points[0], green);
    }

    drawTextured(targetTex) {
        const box = this.quad.calculateBoundingBox();
        const [boxWidth, boxHeight] = box.dimension();
        const boxSize = box.size();
        const [dx, dy] = box.topLeft.position;

        let inside = false;
        let prevInside = false;
        let painting = false;

        let col = 0;
        let row = 0;

        for (let i = 0; i < boxSize; i++) {
            prevInside = inside;
            inside = this.quad.inside(col + dx, row + dy);

            if (inside) {
                targetTex.pixels[Math.ceil(dx + col) + Math.ceil(dy + row) * targetTex.width] = red;
            }

            if (col + 1 == boxWidth) {
                col = 0
                row++
            }
            else {
                col++
            }
        }
    }
}