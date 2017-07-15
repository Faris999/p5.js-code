var canvas;

function setup() {
    canvas = createCanvas($(document).width(), $(document).height() - 24);
    canvas.parent('sketch');
    background(255);
}

function draw() {
    fill(0);
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 8, 8);
    }
}

function saveImage() {
    saveCanvas(canvas, 'canvas', 'png');
}
