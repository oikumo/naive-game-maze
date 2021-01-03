import { createTexture } from '../../engine/tex.js';
import { vector3 } from '../../common/math/vector/vector3.js'
import { blue } from '../../common/colors.js';

export function PlayerAvatar(width, height) {
    this.tex = createTexture(width, height, blue);
    this.offset = vector3(width * 0.5, height * 0.5, 0);
}

PlayerAvatar.prototype.draw = function (position, tex, texWidth) {
    this.tex.paintTo(tex, texWidth,
        position[0] - this.offset[0],
        position[1] - this.offset[1]);
}
