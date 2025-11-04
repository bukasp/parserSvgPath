console.log(points);
/**@type {HTMLCanvasElement} */
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');


let step = 0.01;

let t = 0; // от 0 до 1
let x;
let y;



let x1 = 58;
let y1 = 53;
let x2 = 139;
let y2 = 50;
let x3 = 166;
let y3 = 86;
let x4 = 165;
let y4 = 166

// x = ((1 - t) * (1 - t)) * x1 + (2 * (1 - t) * t * x2) + (t * t) * x3;
// y = ((1 - t) * (1 - t)) * y1 + (2 * (1 - t) * t * y2) + (t * t) * y3;

requestAnimationFrame(move);
function move() {
  if (t < 1) {

    t += step;
  }

  x = (((1 - t) * (1 - t) * (1 - t)) * x1) + 3 * (((1 - t) * (1 - t)) * t) * x2 + 3 * (1 - t) * (t * t) * x3 + t * t * t * x4;
  y = (((1 - t) * (1 - t) * (1 - t)) * y1) + 3 * (((1 - t) * (1 - t)) * t) * y2 + 3 * (1 - t) * (t * t) * y3 + t * t * t * y4;

  ctx.beginPath();

  ctx.arc(x, y, 9, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(50, 197, 148, 1)';
  ctx.fill();


  ctx.stroke();
  ctx.closePath();
  requestAnimationFrame(move);
}
move();