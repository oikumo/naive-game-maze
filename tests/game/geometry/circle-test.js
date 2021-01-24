import { texture2bmp } from 'naive-3d';
import { test, assertions } from 'naive-tests';
import { red } from '../../../src/common/colors.js';
import { createTexture } from '../../../src/engine/tex.js';
const { equals } = assertions;

function printTex(tex) {
    for (let line = 0; line < tex.width; line++) {
        console.log(tex.pixels.slice(line * tex.width, line * tex.width + tex.width).join(' '));
    }
}

function drawAxis(tex) {
    const offset = Math.floor(tex.height * tex.width / 2);

    for (let x = 0; x < tex.width; x++) {
        tex.pixels[offset + x] = 1;
    }
}

function drawCircle(tex) {
    let xMax = tex.width;
    let yMax = tex.height

    const xMid = xMax / 2;
    const yMid = yMax / 2;
    const normalizer = xMax / 2;

    for (let w = xMax - 1; w >= xMid; --w) {
        const u = w / normalizer;
        const v = Math.sin(u * Math.PI / 2);

        const x = w;
        const y = Math.floor(v * xMid);

        tex.pixels[(y + yMid) + (x * xMax)] = 1;
        tex.pixels[(y + yMid) + ((xMax - x) * xMax)] = 2;

        tex.pixels[(yMid - y) + (x * xMax)] = 3;
        tex.pixels[(yMid - y) + ((xMax - x) * xMax)] = 4;
    }
}

test('circle create', () => {
    const tex = createTexture(50, 50, red);
    tex.fill(() => 0);
});