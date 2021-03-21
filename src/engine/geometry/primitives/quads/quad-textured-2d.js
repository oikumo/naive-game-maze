import { texture2bmp } from "naive-3d";
import { green, red, yellow } from "../../../../common/colors.js";
import { vector2 } from "../../../../common/math/vector/vector2.js";
import { createCheckerTexture } from "../../../tex.js";
import { Line2d } from "../line/line2d.js";
import { Point2d } from "../points/point2d.js";

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
        let rX = Math.floor(this.quad.scanLine(row + dy));
        let sX = Math.floor(this.quad.scanLineEnd(row + dy));
        let rsSize = sX - rX;
        let tR = this.quad.getPointT(rX, row + dy);
        let tS = this.quad.getPointT(sX, row + dy);
        let color;

        let pIndex = 0;
        for (let i = 0; i < boxSize; i++) {

            if (rX < col + dx && sX > col + dx) {
                let tP = (pIndex) / rsSize;
                pIndex++;

                let rPrimaX = tR * this.tex.width;
                let sPrimaY = tS * this.tex.height;

                let rP = new Point2d(vector2(rPrimaX, 0));
                let sP = new Point2d(vector2(this.tex.width, sPrimaY));

                let p = Point2d.lerp(rP, sP, tP);

                const u = Math.floor(p.position[0]);
                const v = Math.floor(p.position[1]);

                color = this.tex.pixels[u + (this.tex.width * v)];

                targetTex.pixels[Math.ceil(dx + col) + Math.ceil(dy + row) * targetTex.width] = color;
            }

            if (col + 1 == boxWidth) {
                col = 0;
                row++;
                rX = Math.floor(this.quad.scanLine(row + dy));
                sX = Math.floor(this.quad.scanLineEnd(row + dy));
                rsSize = sX - rX;
                tR = this.quad.getPointT(rX, row + dy);
                tS = this.quad.getPointT(sX, row + dy);
                pIndex = 0;
            }
            else {
                col++
            }
        }
    }
}