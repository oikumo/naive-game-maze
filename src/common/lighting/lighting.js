import { white, black } from '../colors.js'

export function Lighting(ambientColor, backgroudColor) {
    this.ambientColor = ambientColor || white
    this.backgroudColor = backgroudColor || black
}