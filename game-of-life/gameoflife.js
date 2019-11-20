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

//grid code
    				ctx.fillStyle = "#FFC0CB"; //must be slightly darker than the background color
    				ctx.lineWidth = 1;
    				ctx.fillRect (0, 0, this.pixelWidth, this.pixelHeight);
    				ctx.strokeStyle = "#800000"; //grid line colors, in this case maroon

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
//////////

ctx.fillStyle = "#2F4F4F";
//ctx.fillRect(X, Y, width, height);


  }

  click(fn){
  this.obj.addEventListener('click', (event)=> {
    var cellSize = Canvas.cellSize;
    var clickEvent = {};
    var squack = this.obj.getBoudningClientRect();
    clickEvent.cellX = Math.floor((evt.clientX - left + window.pageXOffset) / cellSize);
            clickEvent.cellY = Math.floor((evt.clientY - top + window.pageYOffset - 5) / cellSize); //offset is function
            fn(clickEvent);
  });

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
      const mitochondria = [event.cellX, event.cellY]; //is the powerhouse of the cell
      const push = this.current.push(mitochondria);
      this.redraw()
      this.canvas.draw(this.current);
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
      this.canvas.click((event) => {
        clickEvent.cellX = Math.floor((evt.clientX - left + window.pageXOffset) / cellSize);
				clickEvent.cellY = Math.floor((evt.clientY - top + window.pageYOffset - 5) / cellSize)
      });
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
canvasInstance.draw();
