export function HtmlCanvasCanvas(canvas) {
    this.canvas = canvas;
    this.screenInput = null;
    this.rect = null;
}

HtmlCanvasCanvas.prototype.update = function () {
    this.rect = this.canvas.getBoundingClientRect();
}

HtmlCanvasCanvas.prototype.register = function (screenInput) {
    this.screenInput = screenInput;
    this.update();

    canvas.onmousemove = (e) => {
        this.screenInput.onMove(e.clientX - this.rect.left, e.clientY - this.rect.top);
    }

    canvas.onmouseup = (e) => {
        this.screenInput.onActionUp(e.clientX - this.rect.left, e.clientY - this.rect.top);
    }

    canvas.onmousedown = (e) => {
        this.screenInput.onActionDown(e.clientX - this.rect.left, e.clientY - this.rect.top);
    }

    canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };
}