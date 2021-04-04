import { textures } from "naive-3d";

export function createTexture(width, height, color) {
    return textures.createTexture(width, height, color);
}

export function createCheckerTexture(width, height, color, otherColor, tileWidth = 10, tileHeight = 10) {
    return textured.createCheckerTexture(width, height, color, otherColor, tileWidth, tileHeight);
}