import { test, assertions } from 'naive-tests';
import { blue, red } from '../../../../../src/common/colors.js';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { createTexture } from '../../../../../src/engine/tex.js';
const { equals, sameArrayElementsOnly } = assertions

test('point2d', () => {
    const point = new Point2d(1, 2);
    equals(1, point.x);
    equals(2, point.y);
});

test('point2d: clone', () => {
    const point = new Point2d(1, 2);
    const cloned = Point2d.clone(point);
    equals(1, cloned.x);
    equals(2, cloned.y);
    point.position[0] = 3;
    point.position[1] = 5;

    equals(1, cloned.x);
    equals(2, cloned.y);
    equals(3, point.x);
    equals(5, point.y);
});

test('point2d: clone list', () => {
    const points = [new Point2d(1, 2), new Point2d(3, 4)];
    const cloned = Point2d.cloneList(points);
    equals(1, cloned[0].x); equals(2, cloned[0].y);
    equals(3, cloned[1].x); equals(4, cloned[1].y);

    points[0].position[0] = 6;
    points[1].position[1] = 7;

    equals(1, cloned[0].x); equals(2, cloned[0].y);
    equals(3, cloned[1].x); equals(4, cloned[1].y);
});

test('point2d: get point orderer by x position asc', () => {
    const points = [new Point2d(3, 50), new Point2d(0, 1), new Point2d(5, 4)];
    const ordered = Point2d.getPointsOrderedByAsc(points);
    equals(0, ordered[0].x); equals(1, ordered[0].y);
    equals(3, ordered[1].x); equals(50, ordered[1].y);
    equals(5, ordered[2].x); equals(4, ordered[2].y);
});


test('point2d: translate', () => {
    const point = new Point2d(1, 2);
    Point2d.translate(point, 5, -6);
    equals(6, point.x);
    equals(-4, point.y);
});

test('point2d: translate', () => {
    const p1 = new Point2d(1, 2);
    const p2 = new Point2d(1, 3);
    const p3 = new Point2d(5, 3);
    equals(true, Point2d.sameX(p1, p2));
    equals(true, Point2d.sameX(p2, p1));
    equals(false, Point2d.sameX(p1, p3));
});


test('point2d: delta', () => {
    const delta1 = Point2d.delta(new Point2d(1, 2), new Point2d(1, 2));
    const delta2 = Point2d.delta(new Point2d(1, 3), new Point2d(-1, 100));
    sameArrayElementsOnly([0, 0], delta1.position);
    sameArrayElementsOnly([2, -97], delta2.position);
});

test('point2d: distance', () => {
    const distance1 = Point2d.distance(new Point2d(1, 2), new Point2d(1, 2));
    const distance2 = Point2d.distance(new Point2d(1, 3), new Point2d(1, 100));
    sameArrayElementsOnly(0, distance1);
    sameArrayElementsOnly(97, distance2);
});

test('point2d: draw', () => {
    const point = new Point2d(10, 20);
    const tex = createTexture(50, 50, blue);
    Point2d.draw(tex, point, red);

    const found = [];
    let col = 0, row = 0;

    for (let i = 0; i < tex.pixels.length; i++) {
        if (tex.pixels[i] === red) found.push([col, row]);
        if (col + 1 === tex.width) {
            col = 0;
            row++;
        } else {
            col++;
        }
    }

    equals(1, found.length);
    sameArrayElementsOnly([10, 20], found[0]);
});