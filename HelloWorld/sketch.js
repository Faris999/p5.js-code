function setup() {
    createCanvas($(document).width(), $(document).height());
    mouseX = width / 2;
    mouseY = height / 2;
}

function draw() {
    fill(255, 63);
    noStroke();
    rect(0, 0, width, height);
    fill(255);
    stroke(0);
    ellipse(mouseX, mouseY, 80, 80);
}
