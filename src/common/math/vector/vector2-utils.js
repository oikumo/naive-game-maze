import { vector3 } from "./vector3.js";

export function vector2Translate(v, delta) {
    v[0] += delta[0];
    v[1] += delta[1];
}

export function vector2lerp(v, target, t = 1) {
    v[0] += t * (target[0] - v[0]);
    v[1] += t * (target[1] - v[1]);
}

export function vector2Scale(v, factor) {
    v[0] *= factor;
    v[1] *= factor;
}

export function vector2Sub(v2, v1) {
    return vector3(
        v2[0] - v1[0],
        v2[1] - v1[1]
    );
}

export function vector2Distance(v1, v2) {
    const diff = vector2Sub(v1, v2);
    return Math.sqrt(Math.pow(diff[0], Math.pow(diff[1], 2)) + d2);
}
