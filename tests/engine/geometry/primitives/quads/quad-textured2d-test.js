import { test, assertions } from 'naive-tests';
import { white } from '../../../../../src/common/colors.js';
import { createTexture } from '../../../../../src/engine/tex.js';
const { equals } = assertions;

test('quad textured 3d - create', () => {
    const targetTex = createTexture(300, 300, white);
    const quadTex = createTexture(100, 100, white);

    const quad = {
        ab: Line2d([points[0], points[1]]),
        bd: Line2d([points[1], points[2]]),
        dc: Line2d([points[2], points[3]]),
        ca: Line2d([points[3], points[0]])
    };


});