import { red } from "../../../../common/colors.js";

export function Point2d(x, y, color = red) {
    this.x = x;
    this.y = y;
    this.color = color;
}

Point2d.prototype.draw = function (tex) {
    const x = Math.floor(this.x);
    if (x < 0 || x >= tex.width)
        return;

    const y = Math.floor(this.y);
    if (y < 0 || y >= tex.height)
        return;

    tex.pixels[Math.floor(y * tex.width) + x] = this.color;
}