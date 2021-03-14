export function vector2(x, y) {
    return new Float32Array([x, y])
}

export function vector2Left() {
    return vector3(1.0, 0.0);
}

export function vector2Right() {
    return vector3(0.0, 1.0);
}

export function vector2Zero() {
    return vector3(0, 0);
}

export function vector2SetXY(v, x, y) {
    v[0] = x;
    v[1] = y;
}