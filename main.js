/**@type {HTMLCanvasElement} */
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

let pointsArray = [];
pointsArray = points.split(' ');
const indexPath = [];

let step = 0.09;

let t = 0; // от 0 до 1
// let x;
// let y;
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

for (let i = 0; i <= pointsArray.length; i++) {
  if (pointsArray[i] === 'M') {
    indexPath.push({ 'x': pointsArray[i + 1], 'y': pointsArray[i + 2] });
  }
  if (pointsArray[i] === 'L') {
    indexPath.push({ 'x': pointsArray[i + 1], 'y': pointsArray[i + 2] })
  }
  if (pointsArray[i] === 'C') {
    //----------- кряяявыыыеее ----------//
    x1 = pointsArray[i - 1];
    y1 = pointsArray[i - 1];
    x2 = pointsArray[i + 1];
    y2 = pointsArray[i + 2];
    x3 = pointsArray[i + 3];
    y3 = pointsArray[i + 4];
    x4 = pointsArray[i + 5];
    y4 = pointsArray[i + 6];
    t = 0;
      while (t <= 1) {
        t += step;
        x = (((1 - t) * (1 - t) * (1 - t)) * x1) + 3 * (((1 - t) * (1 - t)) * t) * x2 + 3 * (1 - t) * (t * t) * x3 + t * t * t * x4;
        y = (((1 - t) * (1 - t) * (1 - t)) * y1) + 3 * (((1 - t) * (1 - t)) * t) * y2 + 3 * (1 - t) * (t * t) * y3 + t * t * t * y4;

        indexPath.push({'x': x, 'y': y})

      }    
    //----------- кряяявыыыеее ----------//
  }
  if (pointsArray[i] === 'Z') {
    indexPath.push
  }
}


// function curveBezier(x1, y1, x2, y2, x3, y3, x4, y4) {

  // let x1 = 58;
  // let y1 = 53;
  // let x2 = 139;
  // let y2 = 50;
  // let x3 = 166;
  // let y3 = 86;
  // let x4 = 165;
  // let y4 = 166;

  // x = (((1 - t) * (1 - t) * (1 - t)) * x1) + 3 * (((1 - t) * (1 - t)) * t) * x2 + 3 * (1 - t) * (t * t) * x3 + t * t * t * x4;
  // y = (((1 - t) * (1 - t) * (1 - t)) * y1) + 3 * (((1 - t) * (1 - t)) * t) * y2 + 3 * (1 - t) * (t * t) * y3 + t * t * t * y4;
// }


ctx.beginPath();
for (i = 3; i <= indexPath.length - 1; i++) {
  // ctx.moveTo(indexPath[1].x, indexPath[2].y)
  ctx.lineTo(indexPath[i].x, indexPath[i].y);
  ctx.arc(indexPath[i].x, indexPath[i].y, 9, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(50, 197, 148, 1)';
  ctx.strokeStyle = 'rgba(50, 197, 148, 1)';
  // ctx.fill();
  ctx.stroke();
}
ctx.closePath();





requestAnimationFrame(move);
function move() {
  if (t < 1) {
    t += step;
  }

  // x = (((1 - t) * (1 - t) * (1 - t)) * x1) + 3 * (((1 - t) * (1 - t)) * t) * x2 + 3 * (1 - t) * (t * t) * x3 + t * t * t * x4;
  // y = (((1 - t) * (1 - t) * (1 - t)) * y1) + 3 * (((1 - t) * (1 - t)) * t) * y2 + 3 * (1 - t) * (t * t) * y3 + t * t * t * y4;

  ctx.beginPath();

  ctx.arc(x, y, 9, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(50, 197, 148, 1)';
  ctx.fill();


  ctx.stroke();
  ctx.closePath();
  requestAnimationFrame(move);
}
move();