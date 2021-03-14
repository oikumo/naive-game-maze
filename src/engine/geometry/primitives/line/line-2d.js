export function drawLine2D(tex, p, q, color) {
    let i, t, x, y;
    const delta1 = q.x - p.x;
    const delta2 = q.y - p.y;
    const n = Math.max(Math.abs(delta1), Math.abs(delta2));

    for (i = n - 1; i >= 0; --i) {
        t = i / n

        x = Math.floor(p.x + (t * delta1))
        if (x < 0 || x >= tex.width)
            continue

        y = p.y + Math.floor(t * delta2)
        if (y < 0 || y >= tex.height)
            continue

        tex.pixels[Math.floor(y * tex.width) + x] = color
    }
}