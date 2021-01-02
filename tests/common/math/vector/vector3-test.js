import { test, assertions } from 'naive-tests'
import {
    vector3,
    vector3Forward,
    vector3Left,
    vector3Right,
    vector3Zero,
    vector3SetXY
} from '../../../../src/common/math/vector/vector3.js'

const { sameArrayElementsOnly } = assertions

test('vector create', () => {
    sameArrayElementsOnly([1.0, 0.0, 0.0], vector3(1, 0, 0));
    sameArrayElementsOnly([0.0, 0.0, 1.0], vector3Forward());
    sameArrayElementsOnly([1.0, 0.0, 0.0], vector3Left());
    sameArrayElementsOnly([0.0, 1.0, 0.0], vector3Right());
    sameArrayElementsOnly([0.0, 0.0, 0.0], vector3Zero());
});

test('vector set xy', () => {
    const v = vector3Zero();
    vector3SetXY(v, 1, 2);
    sameArrayElementsOnly([1, 2, 0], v);
});

