import { vector3 } from '../../../common/math/vector/vector3.js'
import { black, blue, green, red, yellow } from '../../../common/colors.js';
import { drawCircleOnTexture } from '../primitives/circles/circle-on-texture.js'

export function Enemy2d(width, height, tex) {
    this.tex = tex;
    this.offset = vector3(width * 0.5, height * 0.5, 0);
    this.it = 0.0;
}

Enemy2d.prototype.draw = function (position, tex, texWidth) {
    const color = Math.random() > 0.5 ? red : green;
    drawCircleOnTexture(this.tex, color, Math.abs(Math.sin(this.it)));

    this.it += Math.PI * 0.01;

    this.tex.paintTo(tex, texWidth,
        position[0] - this.offset[0],
        position[1] - this.offset[1]);
}