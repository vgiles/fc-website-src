// Code based on Photo Drawer by Sayama
// https://www.openprocessing.org/sketch/657254


let img;
var osc1;
var synth;

function preload() {
    img = loadImage("cat2.JPG");
}


function setup() {
    createCanvas(100, 100);
    frameRate(1);
    background("rgba(255, 191, 0, 0)");
    initImage();
    noLoop();
    // osc1 = new p5.Oscillator();
    // synth = new p5.PolySynth();
}

// function mouseClicked() {
//     if (!playing) {
//         synth.play();
//     } else {
//         synth.stop();
//     }
// }

function draw() {
    //fc();
    //doggo();
    draw_circle(width/2, height/2, 50, 1);
    //genMusic(); // to do
    // fcText();
    //drawCircle(width/2, height/2, 40);
}

function mouseClicked() {

}

function fcText() {
    fill(30,30 , 0, 120);
    textSize(20);
    textAlign(CENTER);
    text("Faulty Cat Productions.\nWebsite coming soon", width / 2, height - (height * 0.19));
}

function doggo() {
    rectMode(CENTER);
    noStroke();
    let wcircle = width / 2;
    let hcircle = height / 2;
    let rows = height / 100;
    let cols = width / 100;
    for (var x = 0; x < width; x += cols) {
        for (var y = 0; y < height; y += rows) {
            let col = img.get(x, y);
            col = color(red(col), green(col), blue(col), 100);
            fill(col);
            rect(cos(x) * width/2, sin(y) * height/2, cols, rows);
        }
    }
}

function draw_circle(x, y, radius, resolution) {
    noStroke();
    rectMode(CENTER);
    let rows = height / 40;
    let cols = width / 40;
    const tile_size = (radius * 2) / (radius * 2 * resolution);
    print(tile_size);
    const tile_count = ~~((radius * 2) / tile_size);
    print(tile_count);
    for (let tile_y = 0; tile_y < height/2; ++tile_y) {
        for (let tile_x = 0; tile_x < width/2; ++tile_x) {
            const pos_x = (tile_x - tile_count / 2 + 0.5) * tile_size;
            const pos_y = (tile_y - tile_count / 2 + 0.5) * tile_size;
            if (pos_x ** 2 + pos_y ** 2 < radius ** 2) {// Math.hypot(pos_x, pos_y) < radius
                let col = img.get(tile_x, tile_y);
                col = color(red(col), green(col), blue(col), 255);
                fill(col);
                square(x + pos_x, y + pos_y, tile_size);


            }
        }
    }
}
    // strokeWeight(0.8);
    // stroke(45);
    // // blendMode(LIGHTEST);
    // fill("rgba(255, 255, 255, 0.0)");
    // ellipse(width/2, height/2, width, height);


function drawCircle(x, y, radius) {
    for (var i = 0; i <= 360; i++) {
      rect(x, y, cos(i) * radius, sin(i) * radius);
    }
  }

function genMusic() {
    var midiNoteNumber = 70;
    var freq = midiToFreq(midiNoteNumber); // Convert MIDI note to frequency
    // Play note number 70 with velocity 1, starting now, for a duration of 1s
    synth.play(freq, 0.8, 2, 1);
}




function initImage() {

    //rezsizeCanvas
    var wRatio = img.width / windowWidth;
    var hRatio = img.height / windowHeight;

    if (wRatio < hRatio) {resizeCanvas(int((img.width / hRatio) * 0.75), int(windowHeight * 0.75));}
    else {resizeCanvas(int(windowWidth * 0.75), int((img.height / wRatio) * 0.75));}

    img.resize(width, height);

}


