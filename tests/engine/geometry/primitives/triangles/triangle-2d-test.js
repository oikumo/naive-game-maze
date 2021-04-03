import { test, assertions } from 'naive-tests';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { Triangle2d } from '../../../../../src/engine/geometry/primitives/triangles/triangle-2d.js';
const { equals } = assertions;

test('triangle 2d - create', () => {
    const a = new Point2d(0, 0), b = new Point2d(0, 10), c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);

    equals(true, Point2d.equals(triangle.a, new Point2d(0, 0)));
    equals(true, Point2d.equals(triangle.b, new Point2d(0, 10)));
    equals(true, Point2d.equals(triangle.c, new Point2d(20, 0)));
});

test('triangle 2d - segment parallel to y axis', () => {
    const a = new Point2d(0, 0), b = new Point2d(0, 10), c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);
    const triangleNotParallel = new Triangle2d(new Point2d(1, 0), b, c);

    equals(true, Triangle2d.segmentParallelToYAxis(triangle));
    equals(false, Triangle2d.segmentParallelToYAxis(triangleNotParallel));
});

test('triangle 2d - translate', () => {
    const a = new Point2d(0, 0), b = new Point2d(0, 10), c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);

    Triangle2d.translate(triangle, 10, 1);
    equals(true, Point2d.equals(triangle.a, new Point2d(10, 1)));
    equals(true, Point2d.equals(triangle.b, new Point2d(10, 11)));
    equals(true, Point2d.equals(triangle.c, new Point2d(30, 1)));
});