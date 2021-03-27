import { test, assertions } from 'naive-tests';
import { white } from '../../../../../src/common/colors.js';
import { Point2d } from '../../../../../src/engine/geometry/primitives/points/point2d.js';
import { QuadTextured2d } from '../../../../../src/engine/geometry/primitives/quads/quad-textured-2d.js';
import { Quad2d } from '../../../../../src/engine/geometry/primitives/quads/quad-2d.js';
import { createTexture } from '../../../../../src/engine/tex.js';
const { equals } = assertions;

test('quad textured 2d - create', () => {
    const targetTex = createTexture(300, 300, white);
    const quadTex = createTexture(100, 100, white);

    const quad = new Quad2d([
        new Point2d(10, 10), new Point2d(50, 10),
        new Point2d(50, 50), new Point2d(10, 60)
    ]);

    const quadTextured = new QuadTextured2d(quad, quadTex);
    quadTextured.drawTextured(targetTex);
});