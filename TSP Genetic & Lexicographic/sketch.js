var cities = [];
var totalCities = 7;
var lexLoop = true;

function setup() {
    createCanvas(1600, 800);
    for (var i = 0; i < totalCities; i++) {
        var v = createVector(random(width / 2), random(height / 2));
        cities[i] = v;
    }
    setupLex();
    setupGA();
}

function draw() {
    background(0);
    drawGA();
    textSize(16);
    fill(255);
    noStroke();
    text("GA: " + recordDistanceGA, 20, height / 2 - 50);
    text("Lex: " + recordDistance, 20, height / 2 - 25);
    drawLex();
}
