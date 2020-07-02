import { white } from '../colors.mjs'

const Lighting = function (ambientColor) {
    this.ambientColor = ambientColor || white
}

export {
    Lighting
}