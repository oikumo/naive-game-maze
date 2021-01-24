import { createTexture } from '../../engine/tex.js';
import { vector3 } from '../../common/math/vector/vector3.js'
import { black, blue, green, red, yellow } from '../../common/colors.js';

const textures = new Map();

export function Enemy2d(width, height, tex) {
    this.tex = tex;
    this.offset = vector3(width * 0.5, height * 0.5, 0);
    this.it = 0.0;
}

function drawCircleOnTexture(tex, color, coverage = 0.99) {
    const texWidth = tex.width;
    const textHeigth = tex.height
    const xMid = Math.floor(texWidth * 0.5);
    const yMid = Math.floor(textHeigth * 0.5);
    const PIHalf = Math.PI * 0.5;
    const radiusCoverage = xMid * coverage;

    let theta = 0;
    let x = 0;
    let y = 0;

    for (let w = xMid - 1; w >= 0; --w) {
        theta = (w / radiusCoverage) * PIHalf;
        x = Math.floor(Math.cos(theta) * (radiusCoverage));
        y = Math.floor(Math.sin(theta) * (radiusCoverage));
        tex.pixels[(yMid + y) + ((xMid - x) * texWidth)] = color;
        tex.pixels[(yMid - y) + ((xMid - x) * texWidth)] = color;
        tex.pixels[(yMid + y) + ((xMid + x) * texWidth)] = color;
        tex.pixels[(yMid - y) + ((xMid + x) * texWidth)] = color;
    }
}

Enemy2d.prototype.draw = function (position, tex, texWidth) {
    const color = Math.random() > 0.5 ? red : green;
    drawCircleOnTexture(this.tex, color, Math.abs(Math.sin(this.it)));

    this.it += Math.PI * 0.01;

    this.tex.paintTo(tex, texWidth,
        position[0] - this.offset[0],
        position[1] - this.offset[1]);
}
