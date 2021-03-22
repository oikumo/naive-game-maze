import { test, assertions } from 'naive-tests';
import { vector2 } from '../../../../../src/common/math/vector/vector2.js';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { Quad2d } from '../../../../../src/engine/geometry/primitives/quads/quad-2d.js';
const { equals } = assertions;

test('quad 2d - create', () => {
    const quad = new Quad2d([
        new Point2d(20, 20),
        new Point2d(30, 10),
        new Point2d(40, 30),
        new Point2d(30, 50)
    ]);

    const box = quad.calculateBoundingBox();

    equals(true, Point2d.samePosition(box.topLeft, new Point2d(20, 10)));
    equals(true, Point2d.samePosition(box.bottomRight, new Point2d(40, 50)));
});