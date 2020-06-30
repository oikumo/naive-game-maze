import { test, assertions } from 'naive-tests'
import { forward } from '../../src/common/vector.mjs'
const { sameArrayElementsOnly } = assertions

test('create vectors', () => {
    const fwd = forward()
    const expected = [0.0, 0.0, 1.0]
    sameArrayElementsOnly(expected, fwd)
})