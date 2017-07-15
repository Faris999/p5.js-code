function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 4;
    this.tail = [];
    this.canChangeDir = true;

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        }
        return false;
    }

    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d < 1){
                console.log("game over");
                this.total = 4;
                this.tail = [];
            }
        }
    }

    this.dir = function(x, y) {
        if(this.canChangeDir){
            if(this.xSpeed == 1 && x == -1)
                this.xSpeed = 1;
            else if(this.xSpeed == -1 && x == 1)
                this.xSpeed = -1;
            else
                this.xSpeed = x;
            if(this.ySpeed == 1 && y == -1)
                this.ySpeed = 1;
            else if(this.ySpeed == -1 && y == 1)
                this.ySpeed = -1;
            else
                this.ySpeed = y;
            this.canChangeDir = false;
        }
    }

    this.update = function() {
        // if (this.total === this.tail.length) {
        //     for (var i = 0; i < this.tail.length - 1; i++) {
        //         this.tail[i] = this.tail[i + 1];
        //     }
        // }
        // console.log(this.total - 1);
        // this.tail[this.total - 1] = createVector(this.x, this.y);
        this.tail[this.tail.length] = createVector(this.x, this.y);
        if(this.total == 0){
            this.tail = [];
        } else if(this.total < this.tail.length){
            this.tail.splice(0, 1);
        }
        this.x += this.xSpeed * scl;
        this.y += this.ySpeed * scl;
        if(this.x > width - scl){
            this.x = 0;
        } else if (this.x < 0) {
            this.x = width - scl;
        } else if(this.y > height - scl){
            this.y = 0;
        } else if (this.y < 0) {
            this.y = height - scl;
        }
        //this.x = constrain(this.x, 0, width - scl);
        //this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
        this.canChangeDir = true;
    }
}
