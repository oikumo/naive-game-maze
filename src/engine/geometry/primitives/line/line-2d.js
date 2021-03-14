export function drawLine2D(tex, texWidth, texHeight, color, p1, p2, q1, q2) {
    let i, t, x, y;
    const delta1 = q1 - p1;
    const delta2 = q2 - p2;
    const n = Math.max(Math.abs(delta1), Math.abs(delta2));

    for (i = n - 1; i >= 0; --i) {
        t = i / n

        x = Math.floor(p1 + (t * delta1))
        if (x < 0 || x >= texWidth)
            continue

        y = p2 + Math.floor(t * delta2)
        if (y < 0 || y >= texHeight)
            continue

        tex[Math.floor(y * texWidth) + x] = color
    }
}