import { red } from "../../../../common/colors.js";
import { vector2Distance, vector2lerp } from "../../../../common/math/vector/vector2-utils.js";
import { vector2Sub, vector2Zero, vectorsAreEquals } from "../../../../common/math/vector/vector2.js";

export function Point2d(position, color = red) {
    this.position = position || vector2Zero();
    this.color = color;
}

Point2d.delta = function (a, b) {
    return vector2Sub(a.position, b.position);
}

Point2d.distance = function (a, b) {
    return vector2Distance(a.position, b.position);
}

Point2d.lerp = function (a, b, t) {
    return new Point2d(vector2lerp(a.position, b.position, t));
}

Point2d.samePosition = function (p, q) {
    return vectorsAreEquals(p.position, q.position);
}

Point2d.prototype.draw = function (tex) {
    const x = Math.floor(this.position[0]);
    if (x < 0 || x >= tex.width)
        return;

    const y = Math.floor(this.position[1]);
    if (y < 0 || y >= tex.height)
        return;

    tex.pixels[Math.floor(y * tex.width) + x] = this.color;
}