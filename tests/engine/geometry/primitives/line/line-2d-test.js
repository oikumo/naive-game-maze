import { test, assertions } from 'naive-tests';
import { Line2d } from '../../../../../src/engine/geometry/primitives/line/line2d.js';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
const { equals } = assertions;

test('line 2d - create', () => {
    const line = new Line2d(new Point2d(1, 0), new Point2d(1, 10));
    equals(true, Point2d.equals(line.a, new Point2d(1, 0)));
    equals(true, Point2d.equals(line.b, new Point2d(1, 10)));
})

test('line 2d - equals', () => {
    const line1 = new Line2d(new Point2d(1, 0), new Point2d(1, 10));
    const line2 = new Line2d(new Point2d(-5.1, 1), new Point2d(15, 20));

    equals(true, Line2d.equals(line1, line1));
    equals(false, Line2d.equals(line1, line2));
})

test('line 2d - get X at Y', () => {
    const line = new Line2d(new Point2d(0, 0), new Point2d(1, 1));
    equals(0.5, line.getXfromY(0.5));
})