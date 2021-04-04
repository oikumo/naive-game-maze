import { test, assert } from 'naive-tests';
import { Lighting } from '../../../src/common/lighting/lighting.js';
import { red, white } from '../../../src/common/colors.js';

test('lighting create', () => {
    const lighting = new Lighting(red, white);
    assert.areNotUndefinedOrNull(lighting);
    assert.equals(red, lighting.ambientColor);
    assert.equals(white, lighting.backgroundColor);
});