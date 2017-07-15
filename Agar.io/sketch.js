var blob;
var blobs = [];
var zoom = 1;

function setup() {
    createCanvas($(document).width(), $(document).height());
    blob = new Blob(0, 0, 64);
    for (var i = 0; i < 1000; i++) {
        var x = random(-width * 2, width * 2);
        var y = random(-height * 2, height * 2);
        blobs[i] = new Blob(x, y, 16, 255, 255, 255);
    }
    setInterval(function() {
        var x = random(-width * 2, width * 2);
        var y = random(-height * 2, height * 2);
        blobs.push(new Blob(x, y, 16, 255, 255, 255));
    }, 1000);
    stroke(255);
    fill(255);
    strokeWeight(10);
    line(-width * 2, -height * 2, width * 2, 0);
    line(width * 2, 0, width * 2, height * 2);
    line(width * 2, height * 2, 0, height * 2);
    line(0, height * 2, -width * 2, -height * 2);
}

function draw() {
    background(0);
    //translate(width / 2-blob.pos.x, height / 2-blob.pos.y);
    translate(width / 2, height / 2);
    //var newZoom  = constrain(64 / blob.r, 1, );
    var newZoom = 64 / blob.r;
    zoom = lerp(zoom, newZoom, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);
    for (var i = blobs.length - 1; i >= 0; i--) {
        blobs[i].show();
        if(blob.eats(blobs[i])){
            //blobs.splice(i, 1);
            var x = random(-width * 2, width * 2);
            var y = random(-height * 2, height * 2);
            blobs[i].pos = createVector(x, y);
        }
    }
    blob.constrain();
    blob.show();
    blob.update();
}
