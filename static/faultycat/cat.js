// Code based on Photo Drawer by Sayama
// https://www.openprocessing.org/sketch/657254


let img;

function preload() {
    img = loadImage("fc.jpg");
}


function setup() {
    createCanvas(100, 100);
    frameRate(30);
    background(0);
    initImage();
}


function draw() {
    for (let i = 0; i < 50; i++) {
        let x = int(random(width));
        let y = int(random(height));
        let col = img.get(x, y);
        col = color(red(col), green(col), blue(col), 120);
        let size = map(brightness(col), 0, 255, width * 0.01, width * 0.07);
        fill(col);
        // stroke();
        strokeWeight(0.2); 
        rect(x, y, size, size);
    }
}


function initImage() {

    //rezsizeCanvas
    var wRatio = img.width / windowWidth;
    var hRatio = img.height / windowHeight;

    if (wRatio < hRatio) resizeCanvas(int((img.width / hRatio) * 0.75), int(windowHeight * 0.75));
    else resizeCanvas(int(windowWidth * 0.75), int((img.height / wRatio) * 0.75));

    img.resize(width, height);

}


