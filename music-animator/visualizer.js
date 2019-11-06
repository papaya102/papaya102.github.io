const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = generateRandomColor();
let R = generateRandomValue();

class AbstractVisualizer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.start();
  }

  renderBeatAnimation() {
    throw new Error('Please extend class and override method');
  }

  start() {
    this.drawBackground(this.canvas, {width: CANVAS_WIDTH, height: CANVAS_HEIGHT});
  }

  drawRectangle(point1, point2, point3, point4, rectangleProperties) {
    const context = this.canvas.getContext("2d");
    context.lineWidth = rectangleProperties.width;
    context.strokeStyle = rectangleProperties.color;

    context.moveTo(point1.x, point1.y);
    context.lineTo(point2.x, point2.y);
    context.lineTo(point3.x, point3.y);
    context.lineTo(point4.x, point4.y);
    context.lineTo(point1.x, point1.y);
    context.closePath();
    context.fill();
  }

  drawSquare(startingPoint, sideLength, squareProperties) {
    const context = this.canvas.getContext("2d");
    context.strokeStyle = squareProperties.color;
    context.lineWidth = squareProperties.width;
    context.moveTo(startingPoint.x, startingPoint.y);
    context.beginPath();
    context.lineTo(startingPoint.x+sideLength, startingPoint.y);
    context.lineTo(startingPoint.x+sideLength, startingPoint.y+sideLength);
    context.lineTo(startingPoint.x, startingPoint.y+sideLength);
    context.lineTo(startingPoint.x, startingPoint.y);
    context.fill();
    context.stroke();
  }

  drawCircle(center, radius, width, color) {
    const context = this.canvas.getContext("2d");
    context.lineWidth = width;
    context.strokeStyle = color;
    context.fillStyle = color;
    context.beginPath();
context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
context.stroke();
  }


  drawBackground(canvas, canvasDimensions, color = BACKGROUND_COLOR) {
    const context = canvas.getContext("2d");
    context.canvas.width = canvasDimensions.width;
    context.canvas.height = canvasDimensions.height;
    context.fillStyle = color;
    context.fillRect(0, 0, canvasDimensions.width, canvasDimensions.height);
  }
  clearCanvas(){
  const context = canvas.getContext('2d');
  context.clearRect(0,0, canvas.width, canvas.height )

  }
  //BROKEN PLEASE FIX ME
  //AHHHHHHHHH
  //HELP
  animateCircle(){
  this.clearCanvas();
this.drawCircle(generateRandomPoint(), R, generateRandomValue(), generateRandomColor());
  R = R + 10;
  if(R>=126){
    this.clearCanvas();
  }

    }
}


/**
 * Generates a hexadecimal random color.
 */
function generateRandomColor() {
  const color = generateRandomValue(0x0, 0xFFFFFF);
  return '#' + color.toString(16);
}

/**
 * Generates a random value between [min, max] (inclusive).
 */
function generateRandomValue(minValue = 1, maxValue = 150) {
  min = Math.ceil(minValue);
  max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function generateRandomPoint() {

  return {
    x: generateRandomValue(0, CANVAS_WIDTH),
    y: generateRandomValue(0,CANVAS_HEIGHT)
  };
}
