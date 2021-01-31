import { test, assertions } from 'naive-tests'
import { Lighting } from '../../../src/common/lighting/lighting.js'
import { red, white } from '../../../src/common/colors.js'
const { equals, areNotUndefinedOrNull } = assertions

test('lighting create', () => {
    const lighting = new Lighting(red, white)
    areNotUndefinedOrNull(lighting)
    equals(red, lighting.ambientColor)
    equals(white, lighting.backgroundColor)
})