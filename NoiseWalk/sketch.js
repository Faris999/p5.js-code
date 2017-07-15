var w = [];

function setup() {
    createCanvas($(document).width(), $(document).height());
    frameRate(100);
    for (var i = 0; i < 100; i++) {
        w[i] = new Walker();
    }
    background(255);
    }

function draw() {
    background(255);
    fill(255, 63);
    noStroke();
    rectMode(CORNER);
    //rect(0, 0, width, height);
    for (var i = 0; i < w.length; i++) {
        w[i].display();
        w[i].walk();
    }
}
