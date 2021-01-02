export function registerScreenInputInCanvas(canvas, screenInput) {
    canvas.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        screenInput.onMove(e.clientX - rect.left, e.clientY - rect.top);
    }

    canvas.onmouseup = (e) => {
        const rect = canvas.getBoundingClientRect();
        screenInput.onActionUp(e.clientX - rect.left, e.clientY - rect.top);
    }

    canvas.onmousedown = (e) => {
        const rect = canvas.getBoundingClientRect();
        screenInput.onActionDown(e.clientX - rect.left, e.clientY - rect.top);
    }

    canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };
}