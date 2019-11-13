console.log('PIKA PIKA, PIKACHU!!!');
class Gameoflife{
  constructor(){

  }
    next(shape){

    }
}

class Canvas{
  constructor(container){
    let canvasElement = document.createElement('canvas');
    this.obj = canvasElement;
    this.pixelWidth = 803;
    canvasElement.width = this.pixelWidth;
		this.pixelHeight = 506;
    canvasElement.height = this.pixelHeight;
		container.appendChild(canvasElement);
    this.ctx = this.obj.getContext('2d');
    this.setGridSize(11);
  }
  draw(cell){
    var ctx = this.ctx;
    var size = this.cellSize;

    				ctx.fillStyle = "#FFB6C1";
    				ctx.lineWidth = 1;
    				ctx.fillRect (0, 0, this.pixelWidth, this.pixelHeight);
    				ctx.strokeStyle = "#999";

            for(var n = this.cellSize; n < this.pixelWidth; n += this.cellSize) {
					ctx.beginPath();
					ctx.moveTo(n+.5, 0);
					ctx.lineTo(n+.5, this.pixelHeight);
					ctx.stroke();
				}
				for(var n = this.cellSize; n < this.pixelHeight; n += this.cellSize) {
					ctx.beginPath();
					ctx.moveTo(0, n+.5);
					ctx.lineTo(this.pixelWidth, n+.5);
					ctx.stroke();
				}

  }
  click(fn){

  }
  getDemension(){
return {width: this.pixelWidth, height: this.pixelHeight};
  }
  getGridSize(){
return this.cellSize;   //the chubbier the cell the chubbier the grid
  }
  setGridSize(size){
 this.cellSize = size;
 this.width = Math.floor(this.pixelWidth/this.cellSize);
this.height = Math.floor(this.pixelHeight/this.cellSize);
  }
}
  class Shape{
    constructor(canvas){
      this.canvas = canvas;
      this.current = []; //remains empty
      this.collection = {}; //this is where the pre-set shapes go
    }

    get(){

    }
    set(shape){

    }
    copy(shape){

    }
    redraw(){

    }
    center(){

    }
    offset(dx, dy){

    }
    toggle(cell){

    }
  }

  class Controls{
    constructor(canvas, shape, gameoflife){
      this.canvas = canvas;
      this.shape = shape;
      this.gameoflife = gameoflife;

      this.started = false;
      this.timer = null;
      this.generation = 0;
    }
    init(shapes){

    }
    setGeneration(gen){

    }
    animate(){

    }
    next(){

    }
  }

let canvasElement = document.getElementById("canvas-div");
let canvasInstance = new Canvas(canvasElement);
let shapeInstance = new Shape(canvasInstance);
let gameoflifeInstance = new Gameoflife();
let controlsInstance = new Controls(canvasInstance, shapeInstance, gameoflifeInstance);
