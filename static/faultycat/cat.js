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
    noLoop();
}

function fc() {
    for (let i = 0; i < 50; i++) {
        let x = int(random(width));
        let y = int(random(height));
        let col = img.get(x, y);
        col = color(red(col), green(col), blue(col), 120);
        let size = map(brightness(col), 0, 255, width * 0.01, width * 0.07);
        fill(col);
        strokeWeight(0.2); 
        rect(x, y, size, size);
    }
}

function draw() {
    //fc();
    doggo();
    //genMusic(); // to do
}

function doggo() {
    ellipseMode(CENTER);
    strokeWeight(0.8);
    let rows = height / 70;
    let cols = width / 70;
    for (var i = 0; i < width; i += cols) {				
        for (var j = 0; j < height; j += rows) {
            let col = img.get(i, j);
            col = color(red(col), green(col), blue(col), 120);
            fill(col);											
            ellipse(i, j, 50, 50);
        }
    }
}

function genMusic() {
    
}




function initImage() {

    //rezsizeCanvas
    var wRatio = img.width / windowWidth;
    var hRatio = img.height / windowHeight;

    if (wRatio < hRatio) resizeCanvas(int((img.width / hRatio) * 0.75), int(windowHeight * 0.75));
    else resizeCanvas(int(windowWidth * 0.75), int((img.height / wRatio) * 0.75));

    img.resize(width, height);

}


