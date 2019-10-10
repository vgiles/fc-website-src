// function preload() {
//     for (let i = 0; i < imgCount; i++) {
//         var passStr = './img_' + i + '.jpg';
//         images[i] = loadImage(passStr);
//     }
// }


function setup() {
    createCanvas(100, 100);
    frameRate(20);
    background(0);

    initImage("cat.jpg");
}


function draw() {
    for (let i = 0; i < 50; i++) {
        let x = int(random(width));
        let y = int(random(height));
        let col = img.get(x, y);
        col = color(red(col), green(col), blue(col), 120);
        let size = map(brightness(col), 0, 255, width * 0.01, width * 0.07);
        fill(col);
        noStroke();
        ellipse(x, y, size, size);
    }
}


// function initImage(index) {
//     if (index >= images.length) index = 0;
//     img = images[index];

//     //rezsizeCanvas
//     var wRatio = img.width / windowWidth;
//     var hRatio = img.height / windowHeight;

//     if (wRatio < hRatio) resizeCanvas(int(img.width / hRatio), int(windowHeight));
//     else resizeCanvas(int(windowWidth), int(img.height / wRatio));

//     img.resize(width, height);

// }


