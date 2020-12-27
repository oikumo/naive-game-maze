export function Vector3(x, y, z) {
    this.values = new Float32Array([x || 0, y || 0, z || 0])
}

Vector3.forward = function () {
    return new Vector3(0.0, 0.0, 1.0)
}

Vector3.left = function () {
    return new Vector3(1.0, 0.0, 0.0)
}

Vector3.right = function () {
    return new Vector3(0.0, 1.0, 0.0)
}

Vector3.zero = function () {
    return new Vector3()
}