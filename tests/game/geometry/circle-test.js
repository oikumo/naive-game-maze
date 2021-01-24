import { test, assertions } from 'naive-tests';
import { red } from '../../../src/common/colors.js';
import { createTexture } from '../../../src/engine/tex.js';
const { equals } = assertions;

test('circle create', () => {
    const tex = createTexture(50, 50, red);
    tex.fill(() => 0);
});