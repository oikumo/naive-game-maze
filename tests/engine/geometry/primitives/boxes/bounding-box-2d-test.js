import { test, assertions } from 'naive-tests';
import { vector2 } from '../../../../../src/common/math/vector/vector2.js';
import { BoundingBox2d } from '../../../../../src/engine/geometry/primitives/boxes/bounding-box-2d.js';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
const { equals } = assertions;

/*
test('bounding box 2d - create', () => {
    const points = [
        new Point2d(20, 20),
        new Point2d(30, 10),
        new Point2d(40, 30),
        new Point2d(30, 50)
    ];

    const box = BoundingBox2d.createFromPoints2d(points);

    equals(true, Point2d.samePosition(box.topLeft, new Point2d(20, 10)));
    equals(true, Point2d.samePosition(box.bottomRight, new Point2d(40, 50)));
});

test('bounding box 2d - are equals', () => {
    const points1 = [
        new Point2d(20, 20),
        new Point2d(30, 10),
        new Point2d(40, 30),
        new Point2d(30, 50)
    ];
    const points2 = [
        new Point2d(20, 20),
        new Point2d(30, 10),
        new Point2d(40, 30),
        new Point2d(30, 50)
    ];

    const bb1 = BoundingBox2d.createFromPoints2d(points1);
    const bb2 = BoundingBox2d.createFromPoints2d(points2);

    equals(true, BoundingBox2d.areEquals(bb1, bb2));

    const points3 = [
        new Point2d(1, 20),
        new Point2d(30, 10),
        new Point2d(40, 30),
        new Point2d(30, 50)
    ];

    const bb3 = BoundingBox2d.createFromPoints2d(points3);
    equals(false, BoundingBox2d.areEquals(bb1, bb3));
});
*/