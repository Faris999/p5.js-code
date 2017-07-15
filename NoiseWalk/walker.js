function Walker(){
    var location = createVector(random(width), random(height));
    var noff = createVector(random(width), random(height));
    this.display = function(){
        strokeWeight(2);
        fill(127);
        stroke(0);
        var vector = createVector(0, 0);
        point(location.x, location.y);
    };

    this.walk = function(){
        location.x = map(noise(noff.x), 0, 1, 0, width);
        location.y = map(noise(noff.y), 0, 1, 0, height);
        if(location.x > width - 48){
            location.x = width - 48;
        }
        if(location.y > height - 48){
            location.y = height - 48;
        }
        noff.add(0.01, 0.01, 0);
    };
}
