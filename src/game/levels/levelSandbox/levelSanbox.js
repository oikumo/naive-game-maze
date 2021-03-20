import { Entity } from "../../entity/entity.js";
import { PlayerAvatar } from "../../player/player-avatar.js";
import { createTexture, createCheckerTexture } from "../../../engine/tex.js";
import { blue, green, red } from "../../../common/colors.js";
import { Point2d } from "../../../engine/geometry/primitives/points/point2D.js";
import { Quad2d, QuadTextured2d } from "../../../engine/geometry/primitives/quads/quad-textured2d.js";
import { vector2 } from "../../../common/math/vector/vector2.js";

export function LevelSandbox() {
    this.player = null;
    this.radiusStep = 0;
}

LevelSandbox.prototype.load = function () {
    this.player = new Entity(new PlayerAvatar(50, 50));
    this.tex = createCheckerTexture(250, 250, blue, green);

    const quad = new Quad2d([
        new Point2d(vector2(10, 10)),
        new Point2d(vector2(50, 10)),
        new Point2d(vector2(50, 50)),
        new Point2d(vector2(10, 60))
    ]);

    this.quadTextured = new QuadTextured2d(quad);
}

LevelSandbox.prototype.update = function (deltaTime) {
}

LevelSandbox.prototype.draw = function (renderer) {
    this.tex.paintTo(renderer.tex(), renderer.texWidth(), 300, 300);
    this.quadTextured.draw({
        pixels: renderer.tex(),
        width: renderer.texWidth(),
        height: renderer.texWidth()
    })
    this.player.draw(renderer);
}