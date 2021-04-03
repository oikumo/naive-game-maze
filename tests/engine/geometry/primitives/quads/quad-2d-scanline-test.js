import { test, assertions } from 'naive-tests';
import { blue, green } from '../../../../../src/common/colors.js';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { Quad2dScanline } from '../../../../../src/engine/geometry/primitives/quads/quad-2d-scanline.js';
import { Quad2d } from '../../../../../src/engine/geometry/primitives/quads/quad-2d.js';
import { createCheckerTexture } from '../../../../../src/engine/tex.js';

test('quad 2d - get scanline', () => {
    const tex = createCheckerTexture(100, 100, blue, green, 10, 10);
    const quad = new Quad2d([
        new Point2d(40, 80),
        new Point2d(80, 40),
        new Point2d(140, 100),
        new Point2d(80, 140),
    ]);

    const quadScanline = new Quad2dScanline();
    let y = 10;

    quadScanline.scan(quad, y);
});