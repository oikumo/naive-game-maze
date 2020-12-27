import { test, assertions } from 'naive-tests'
import { Vector3 } from '../../src/common/vector.js'
const { sameArrayElementsOnly } = assertions

test('vector create', () => {
    const fwd = Vector3.forward()
    const expected = [0.0, 0.0, 1.0]
    sameArrayElementsOnly(expected, fwd.values)
})