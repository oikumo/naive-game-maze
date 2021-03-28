import { test, assertions } from 'naive-tests';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { drawTriangle2dTexured } from '../../../../../src/engine/geometry/primitives/triangles/triangle-2d-textured.js';
import { Triangle2d } from '../../../../../src/engine/geometry/primitives/triangles/triangle-2d.js';
const { equals } = assertions;

test('triangle 2d textured - create', () => {
    const a = new Point2d(0, 0);
    const b = new Point2d(0, 10);
    const c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);

    drawTriangle2dTexured();
});
