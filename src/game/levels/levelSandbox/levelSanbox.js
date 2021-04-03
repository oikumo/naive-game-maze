import { Entity } from "../../entity/entity.js";
import { PlayerAvatar } from "../../player/player-avatar.js";
import { createCheckerTexture } from "../../../engine/tex.js";
import { blue, green, red } from "../../../common/colors.js";
import { Point2d } from "../../../engine/geometry/primitives/points/point2d.js";
import { QuadTextured2d } from "../../../engine/geometry/primitives/quads/quad-textured-2d.js";
import { vector2 } from "../../../common/math/vector/vector2.js";
import { Quad2d } from "../../../engine/geometry/primitives/quads/quad-2d.js";

export class LevelSandbox {
    constructor() {
        this.player = null;
        this.radiusStep = 0;
    }

    load() {
        this.player = new Entity(new PlayerAvatar(500, 50));

        const quad = new Quad2d([
            new Point2d(40, 80),
            new Point2d(80, 40),
            new Point2d(140, 100),
            new Point2d(80, 140)
        ]);

        const tex = createCheckerTexture(100, 100, blue, green, 20, 20);
        this.quadTextured = new QuadTextured2d(quad, tex);
    }

    update(deltaTime) {
    }

    draw(renderer) {
        const targetTex = {
            pixels: renderer.tex(),
            width: renderer.texWidth(),
            height: renderer.texWidth()
        };

        this.quadTextured.drawTextured(targetTex);
        this.player.draw(renderer);
    }
}