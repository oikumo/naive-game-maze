import { test, assertions } from 'naive-tests';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { Triangle2d } from '../../../../../src/engine/geometry/primitives/triangles/triangle-2d.js';
const { equals } = assertions;

test('triangle 2d - create', () => {
    const a = new Point2d(0, 0);
    const b = new Point2d(0, 10);
    const c = new Point2d(20, 0);

    const triangle = new Triangle2d(a, b, c);
    equals(true, Point2d.equals(triangle.a, new Point2d(0, 0)));
    equals(true, Point2d.equals(triangle.b, new Point2d(0, 10)));
    equals(true, Point2d.equals(triangle.c, new Point2d(20, 0)));
});