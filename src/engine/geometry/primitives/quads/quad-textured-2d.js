import { texture2bmp } from "naive-3d";
import { green, red, yellow } from "../../../../common/colors.js";
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
        let [dx, dy] = box.topLeft.position;

        let col = 0;
        let row = 0;
        let scanLine = Math.floor(this.quad.scanLine(row + dy));
        let scanLineEnd = Math.floor(this.quad.scanLineEnd(row + dy));
        let color;

        for (let i = 0; i < boxSize; i++) {

            if (scanLine < col + dx && scanLineEnd > col + dx) {
                const u = Math.floor((col / boxWidth) * this.tex.width);
                const v = Math.floor((row / boxHeight) * this.tex.height);

                color = this.tex.pixels[u + (this.tex.width * v)];
                targetTex.pixels[Math.ceil(dx + col) + Math.ceil(dy + row) * targetTex.width] = color;
            }

            if (col + 1 == boxWidth) {
                col = 0;
                row++;
                scanLine = Math.floor(this.quad.scanLine(row + dy));
                scanLineEnd = Math.floor(this.quad.scanLineEnd(row + dy));
            }
            else {
                col++
            }
        }
    }
}