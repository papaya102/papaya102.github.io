console.log('PIKA PIKA, PIKACHU!!!');
class Gameoflife{
  constructor(){

  }
    next(shape){ // shape = [[0, 0], [3, 4], ...]
      let neighbor = {n: 8, cell:[], pop: true};
      for(var i = 0; i < shape.length; i++){
        var cell = shape[i];
      }

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
  draw(cells){
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



    this.ctx.fillStyle = "#2F4F4F";
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = cell[0];
            let y = cell[1];
            this.ctx.fillRect(
              x * this.cellSize + 1,
              y * this.cellSize + 1,
              this.cellSize - 1,
              this.cellSize - 1)
}

  }

  click(fn){
  this.obj.addEventListener('click', (event)=> {
    var cellSize = Canvas.cellSize;
    var clickEvent = {};
    var squack = this.obj.getBoundingClientRect();
  let clientX = clickEvent.clientX;
  let clientY = clickEvent.clientY;

  let canvasX = clientX - squack.left;
  let canvasY = clientY - squack.top;

  let cellX = Math.floor(canvasX/this.cellSize);
  let cellY = Math.floor(canvasY/this.cellSize);

fn({cellX: cellX, cellY: cellY});

console.log("cellX: " + cellX, "cellY: " + cellY);


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
      return this.current;
    }
    set(shape){

    }
    copy(shape){

    }
    redraw(){
      this.canvasInstance.draw(this.current);

    }
    center(){

    }
    offset(dx, dy){

    }
    toggle(cell){
      //const mitochondria = [event.cellX, event.cellY]; //is the powerhouse of the cell
    //  const push = this.current.push(mitochondria);
    //  this.redraw();
      //this.canvas.draw(this.current);
      this.current.push(cell);
      this.redraw();
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

      });
        this.canvas.click((event) => {
              this.shape.toggle([event.cellX, event.cellY])
          });
    }
    setGeneration(gen){

    }
    animate(){

    }
    next(){
let cellShape = this.shape.get();
  shape = this.gameOfLife.next(cellShape);
  this.shape.set(shape);
  this.shape.redraw();
  this.setGeneration(this.generation + 1);
    }
  }

let canvasElement = document.getElementById("canvas-div");
let canvasInstance = new Canvas(canvasElement);
let shapeInstance = new Shape(canvasInstance);
let gameoflifeInstance = new Gameoflife();
let controlsInstance = new Controls(canvasInstance, shapeInstance, gameoflifeInstance);
canvasInstance.draw(1);
controlsInstance.init();
