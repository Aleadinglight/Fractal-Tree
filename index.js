var angle=0;

function setup() {
    var canvas = createCanvas(700, 700);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    frameRate(500);
}

function draw(){
    background(51);
    angle = angle+0.005;
    stroke(255);
    translate(width/2,height);
    branch(200);
}

function branch(len){
    // Draw a line with length len
    line(0, 0, 0, -len);
    // The origin is changed to the new end point
    translate(0,-len);
    
    // Recursive call if len is more than 4 pixels
    if (len>4) {
        push();
        // rotate to draw another branch
        rotate(angle);
        branch(len*0.67);
        pop();
        push();
        // rotate again to draw another branch
        rotate(-angle);
        branch(len*0.67);
        pop();
    }
}