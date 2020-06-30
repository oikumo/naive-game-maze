const forward = () => new Float32Array([0.0, 0.0, 1.0])
const left = () => new Float32Array([1.0, 0.0, 0.0])
const right = () => new Float32Array([0.0, 1.0, 0.0])
const zero = () => new Float32Array(3)

export {
    forward,
    left,
    right,
    zero
}