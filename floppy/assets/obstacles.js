const obstaclesArray = [];
const obstacles1Array = [];

class Obstacles {
  constructor() {
    this.bottom = (Math.random() * (canvas.height/6) + 20);
    this.x = canvas.width;
    this.width = 20;
    this.color = 'red';
  }
  update() {
    this.x -= speed;
    this.draw();
  }
  draw() {
    ctx.fillstyle = this.color;
    ctx.fillRect(this.x, canvas.height - this.bottom , this.width, 20);
    ctx.fillRect(this.x + this.bottom, canvas.height - this.bottom - 20, this.width, 20);
  }
}

function obstacles() {
  if (frame % 100 === 0|| frame%82 === 0) {
    obstaclesArray.unshift(new Obstacles());
  }
  for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
  if (obstaclesArray > 20) {
    obstaclesArray.pop(obstaclesArray[0]);
  }
}