 status;
 video;
 detector;
 objectName;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  centerCanvas();
  status = select('#modelStatus');
}

function start() {
  detector = ml5.objectDetector('cocossd', modelLoaded);
  status.html('Status: Detecting Objects');
  objectName = select('#objectName').value();
  
}

function modelLoaded() {
  console.log('Model loaded');
}

function draw() {
  image(video, 0, 0, width, height);
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}
