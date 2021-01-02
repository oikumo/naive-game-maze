import { test, assertions } from 'naive-tests'
import { vector3, vector3Zero } from '../../../../src/common/math/vector/vector3.js'
import {
    vector3Scale,
    vector3Translate,
    vector3lerp,
    vector3Sub
} from '../../../../src/common/math/vector/vector3-utils.js';

const { sameArrayElementsOnly } = assertions

test('vector3-utils translate', () => {
    const v = vector3Zero();
    const delta = vector3(1, 0, 1);
    vector3Translate(v, delta);
    sameArrayElementsOnly([1, 0.0, 1], v);
});

test('vector-utils vector3lerp', () => {
    const v = vector3Zero();
    const target = vector3(1, 1, 1);
    vector3lerp(v, target, 1);
    sameArrayElementsOnly([1, 1, 1], v);
});

test('vector-utils vector3Scale', () => {
    const v = vector3(1, 1, 1);
    vector3Scale(v, 2);
    sameArrayElementsOnly([2.0, 2.0, 2.0], v);
});

test('vector-utils vector3Sub', () => {
    const v = vector3(2, 3, 4);
    const v2 = vector3(1, 1, 2);
    const result = vector3Sub(v2, v);
    sameArrayElementsOnly([-1, -2, -2], result);
});
