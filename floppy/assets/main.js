const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let ctrlPressed = false;
let frame = 0;
let score = 0;
let speed = 2;
let gameStage = 0;

function frameAni() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  obstacles();
  dino.update();
  dino.draw();
  requestAnimationFrame(frameAni);
  frame++
  score++
}
frameAni();

window.addEventListener("keydown", function (event) {
  console.log(event.code);
  if (event.code === "Space") {
    spacePressed = true;
  }
  if(event.code === "ControlLeft"){
    ctrlPressed = true;
  }
});
window.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    spacePressed = false;
  }
  if(event.code === "ControlLeft"){
    ctrlPressed = false;
  }
});

// const collide = new Image();
// collide.src = 'hit.png'
// function collisions(){
//     for(let i = 0; i < obstaclesArray.length; i++){
//         if(dino.x < )
//     }
// }