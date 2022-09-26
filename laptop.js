status1 = "";
console.log(ml5.version);
objects = [];
img = "";

function preload() {
    img = loadImage("laptop.jpg");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelReady);
    document.getElementById("status").innerHTML = "status detecting objects: ";
}

function gotresults(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    objects = result;
}


function draw() {
    image(img, 0, 0, 600, 500);
    if (status1 != "") {
        console.log(objects);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Objects Detected: ";
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + " % ", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelReady() {
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotresults);
}

function studytable() {
    window.location = "studytable.html";
}

function back() {
    window.location = "index.html";
}

function Diningtable() {
    window.location = "table.html";
}

function house() {
    window.location = "house.html";
}

function Laptop() {
    window.location = "Laptop.html";
}