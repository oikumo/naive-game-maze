import { test, assertions } from 'naive-tests';
import { vector2 } from '../../../../../src/common/math/vector/vector2.js';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { Quad2d } from '../../../../../src/engine/geometry/primitives/quads/quad-2d.js';
const { equals } = assertions;

test('quad 2d - create', () => {
    const quad = new Quad2d([
        new Point2d(vector2(10, 10)),
        new Point2d(vector2(50, 10)),
        new Point2d(vector2(50, 50)),
        new Point2d(vector2(10, 60))
    ]);
});