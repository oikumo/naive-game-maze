import { test, assertions } from 'naive-tests';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { Line2d } from '../../../../../src/engine/geometry/primitives/line/line2d.js';
import { Triangle2dRender } from '../../../../../src/engine/geometry/primitives/triangles/triangle-2d-render.js';
import { Triangle2d } from '../../../../../src/engine/geometry/primitives/triangles/triangle-2d.js';
const { equals } = assertions;

test('triangle 2d render - create', () => {
    const a = new Point2d(0, 0), b = new Point2d(0, 10), c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);
    const triangleRenderer = Triangle2dRender.create(triangle);

    const upperVert = new Line2d(c, b);
    const lowerVert = new Line2d(c, a);
    equals(true, Point2d.equals(triangleRenderer.pivot, c));
    equals(true, Line2d.equals(triangleRenderer.upperVert, upperVert));
    equals(true, Line2d.equals(triangleRenderer.lowerVert, lowerVert));
});