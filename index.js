var slider;
var angle;
function setup() {
    createCanvas(800, 800);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw(){
    background(51);
    angle = slider.value();
    stroke(255);
    translate(width/2,height);
    branch(200);
}

function branch(len){
    // Draw a line with length len
    line(0, 0, 0, -len);
    // The origin is changed to the new end point
    translate(0,-len);
    // rotate to draw another branch
    rotate(angle);
    // Recursive call if len is more than 4 pixels
    if (len>4) {
        branch(len*0.67);
    }
}