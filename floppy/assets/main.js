const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let score = 0;
let speed = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.update();
    bird.draw();
    requestAnimationFrame(clearCanvas);
}
clearCanvas();

window.addEventListener('keydown', function (event) {
    if (event.code === "Space") {
        spacePressed = true;
    }
})
window.addEventListener('keyup', function (event) {
    if (event.code === "Space") {
        spacePressed = false;
    }
})