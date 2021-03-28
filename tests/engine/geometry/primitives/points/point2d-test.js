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

test('point2d - translate', () => {
    const point = new Point2d(1, 2);
    Point2d.translate(point, 5, -6);
    equals(6, point.x);
    equals(-4, point.y);
});

test('point2d - delta', () => {
    const delta1 = Point2d.delta(new Point2d(1, 2), new Point2d(1, 2));
    const delta2 = Point2d.delta(new Point2d(1, 3), new Point2d(-1, 100));
    sameArrayElementsOnly([0, 0], delta1.position);
    sameArrayElementsOnly([2, -97], delta2.position);
});

test('point2d - distance', () => {
    const distance1 = Point2d.distance(new Point2d(1, 2), new Point2d(1, 2));
    const distance2 = Point2d.distance(new Point2d(1, 3), new Point2d(1, 100));
    sameArrayElementsOnly(0, distance1);
    sameArrayElementsOnly(97, distance2);
});

test('point2d - draw', () => {
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