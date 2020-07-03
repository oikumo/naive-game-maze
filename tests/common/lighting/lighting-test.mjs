import { test, assertions } from 'naive-tests'
import { Lighting } from '../../../src/common/lighting/lighting.mjs'
import { red } from '../../../src/common/colors.mjs'
const { areNotUndefinedOrNull } = assertions

test('lighting create', () => {
    const lighting = new Lighting(red)
    areNotUndefinedOrNull(lighting)
})