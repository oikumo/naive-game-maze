import { white, black } from '../colors.js'

const Lighting = function (ambientColor, backgroudColor) {
    this.ambientColor = ambientColor || white
    this.backgroudColor = backgroudColor || black
}

export {
    Lighting
}