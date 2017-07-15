function Blob(x, y, r, colorr, colorg, colorb) {
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(0, 0);
    this.colorr = colorr;
    this.colorg = colorg;
    this.colorb = colorb;
    if(colorr == undefined && colorg == undefined && colorb == undefined) {
        this.colorr = random(0, 255);
        this.colorg = random(0, 255);
        this.colorb = random(0, 255);
    }

    this.update = function() {
        var newVel = createVector(mouseX - width / 2, mouseY - height / 2);
        var speed = constrain((1 / this.r) * 400, 3, 5);
        console.log(speed);
        newVel.setMag(speed);
        this.vel.lerp(newVel, 0.2);
        this.pos.add(this.vel);
    }

    this.eats = function(other) {
        var d = p5.Vector.dist(this.pos, other.pos);
        if(d < this.r - other.r) {
            var sum = PI * this.r * this.r + PI * other.r * other.r;
            this.r = sqrt(sum / PI);
            //this.r += other.r * 0.2;
            return true;
        }
        return false;
    }

    this.constrain = function() {
        this.pos.x = constrain(this.pos.x, -width * 2 + this.r, width * 2 - this.r);
        this.pos.y = constrain(this.pos.y, -height * 2 + this.r, height * 2 - this.r);
        if(this.r > width * 2) {
            this.r = width * 2;
        } else if(this.r > height * 2) {
            this.r = height * 2;
        }
    }

    this.show = function() {
        fill(this.colorr, this.colorg, this.colorb);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
}
