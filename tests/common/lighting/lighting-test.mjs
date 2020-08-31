import { test, assertions } from 'naive-tests'
import { Lighting } from '../../../src/common/lighting/lighting.mjs'
import { red, white } from '../../../src/common/colors.mjs'
const { equals, areNotUndefinedOrNull } = assertions

test('lighting create', () => {
    const lighting = new Lighting(red, white)
    areNotUndefinedOrNull(lighting)
    equals(red, lighting.ambientColor)
    equals(white, lighting.backgroudColor)
})