import { test, assertions } from 'naive-tests';
import { vector2, vector2AreEquals, vector2Left, vector2Right, vector2Sub, vector2Zero } from '../../../../src/common/math/vector/vector2.js';
const { equals } = assertions;

test('vector2d', () => {
    const v = vector2(10, 0);
    equals(10, v[0]);
    equals(0, v[1]);

    const left = vector2Left();
    equals(1, left[0]);
    equals(0, left[1]);

    const right = vector2Right();
    equals(0, right[0]);
    equals(1, right[1]);

    const zero = vector2Zero();
    equals(0, zero[0]);
    equals(0, zero[1]);

    const sub = vector2Sub(vector2(0, 10), vector2(20, -3));
    equals(-20, sub[0]);
    equals(13, sub[1]);

    const a = vector2(1, 2);
    const b = vector2(2, 100);
    equals(true, vector2AreEquals(a, a));
    equals(false, vector2AreEquals(a, b));
});