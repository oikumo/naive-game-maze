import { red } from "../../../../common/colors.js";
import { Point2d } from "../points/point2d.js";

export class Line2d {
    constructor(a, b, color) {
        this.a = a || new Point2d();
        this.b = b || new Point2d();
        this.color = color || red;
    }

    draw(tex) {
        Line2d.draw(tex, this.a, this.b, this.color);
    }

    getXAt(y) {
        const deltaX = this.b.position[0] - this.a.position[0];
        if (deltaX === 0) return 0;
        const deltaY = this.b.position[1] - this.a.position[1];

        const slope = deltaY / deltaX;
        const x = this.a.position[0] + ((y - this.a.position[1]) / slope);

        return Math.floor(x);
    }

    static draw(tex, p, q, color) {
        const delta = Point2d.delta(q, p);
        const n = Math.max(Math.abs(delta[0]), Math.abs(delta[1]));
        let i, t, x, y;

        for (i = n - 1; i >= 0; --i) {
            t = i / n

            x = Math.floor(p.position[0] + (t * delta[0]))
            if (x < 0 || x >= tex.width)
                continue

            y = p.position[1] + Math.floor(t * delta[1])
            if (y < 0 || y >= tex.height)
                continue

            tex.pixels[Math.floor(y * tex.width) + x] = color
        }
    }
}