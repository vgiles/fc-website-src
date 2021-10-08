// let sounds = [];
let blorb;
let value;
let blorbs = [];
let env;
let osc;
let totalBlorbs = 10;
let icSetMinor = [2, 3, 5, 7, 8, 10];
let startingNoteSet = [58, 60, 62, 63, 64, 67];
let t1 = 0.1;
let l1 = 0.7;
let t2 = 0.8;
let l2 = 0.1;

function preload() {
}


function setup() {
    createCanvas(720, 400);
    frameRate(25);
    env = new p5.Envelope(t1, l1, t2, l2);
    osc = new p5.Oscillator('triangle');
    for (i = 0; i <= totalBlorbs; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(5, 15);
        // this could assign a random pitch to each blorb...
        // let randSound = Math.ceil(Math.random() * 10);
        // console.log(randSound);
        let randStart = Math.floor(Math.random() * startingNoteSet.length);
        let randInt = Math.floor(Math.random() * icSetMinor.length);
        let oscFreq = midiToFreq(startingNoteSet[randStart] + icSetMinor[randInt]);
        let s = osc.freq(oscFreq);
        env.play(osc);
        blorb = new Blorb(x, y, r);
        blorbs.push(blorb);
    }
    console.log(blorbs);
}

function draw() {
    background(220);
    for (i = 0; i <= totalBlorbs; i++)
    {
        blorbs[i].display();
    }
}


function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
      }
}
function mouseMoved() {
    for (i = 0; i <= totalBlorbs; i++) {
        blorbs[i].hover(mouseX, mouseY);
    } 
}
// Constructor

class Blorb {
    constructor(x, y, r, s) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.f = random(255);
        this.s = s;
    }

    display() {
        stroke(20);
        fill(this.f);
        ellipse(this.x, this.y, this.r * 2);
    }

    hover(px, py) {
        // let randNum = random(0, 2);
        let d = dist(px, py, this.x, this.y);
        if (d < this.r)
        {
            this.f = random(255);
            this.r = this.r + random(-2, 2);
            this.x = this.x + random(-50, 50);
            this.y = this.y + random(-50, 50);
            // Sound playback per blorb.

            // this.s.setVolume(Math.random());
            // if (this.x < width - width/2)
            // {
            //     this.s.pan(random(0,1));
            // } else {
            //     this.s.pan(random(0,-1));
            // }
            // if (this.y < height - height/2)
            // {
            //     this.s.rate(random(0, 1));
            // } else {
            //     this.s.rate(random(1, 8));
            // }
            // if (randNum > 1) {
            //     this.s.reverseBuffer();
            // }
            // this.s.play();
        }
    }
}
