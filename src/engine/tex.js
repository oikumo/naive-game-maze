import { Texture } from "naive-3d";

export function createTexture(width, height, color) {
    const tex = new Texture(width, height);
    tex.fill(() => color);
    return tex;
}