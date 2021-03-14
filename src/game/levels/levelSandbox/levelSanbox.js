import { Entity } from "../../entity/entity.js";
import { PlayerAvatar } from "../../player/player-avatar.js";
import { createTexture, createCheckerTexture } from "../../../engine/tex.js";
import { blue, green, red } from "../../../common/colors.js";
import { Polygon2d } from "../../../engine/geometry/complex/polygon.js";
import { Point2d } from "../../../engine/geometry/primitives/points/point2D.js";

export function LevelSandbox() {
    this.player = null;
    this.radiusStep = 0;
}

LevelSandbox.prototype.load = function () {
    this.player = new Entity(new PlayerAvatar(50, 50));
    this.tex = createCheckerTexture(250, 250, blue, green);
    this.polygon2d = new Polygon2d([
        new Point2d(10, 10),
        new Point2d(50, 10),
        new Point2d(50, 50),
        new Point2d(10, 60)
    ], red);
}

LevelSandbox.prototype.update = function (deltaTime) {
}

LevelSandbox.prototype.draw = function (renderer) {
    this.tex.paintTo(renderer.tex(), renderer.texWidth(), 300, 300);
    this.polygon2d.draw({
        pixels: renderer.tex(),
        width: renderer.texWidth(),
        height: renderer.texWidth()
    })
    this.player.draw(renderer);
}