/**@type {HTMLCanvasElement} */
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

let pointsArray = [];
pointsArray = points.split(' ');
const indexPath = [];

let step = 0.1;

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
    indexPath.push({ x: pointsArray[i + 1], y: pointsArray[i + 2] });
  }
  if (pointsArray[i] === 'L') {
    indexPath.push({ x: pointsArray[i + 1], y: pointsArray[i + 2] });
  }
  if (pointsArray[i] === 'C') {
    t = 0;
    //----------- кряяявыыыеее ----------//
    indexPath.push(indexPath[indexPath.length - 1]);
    curveBezier(indexPath[indexPath.length - 1].x,
      indexPath[indexPath.length - 1].y,
      pointsArray[i + 1],
      pointsArray[i + 2],
      pointsArray[i + 3],
      pointsArray[i + 4],
      pointsArray[i + 5],
      pointsArray[i + 6]
    )
    indexPath.push({ x: pointsArray[i + 5], y: pointsArray[i + 6] });
    //----------- кряяявыыыеее ----------//
  }
  if (pointsArray[i] === 'Z') {
    indexPath.push({ x: pointsArray[1], y: pointsArray[2] });
  }
}
console.log(indexPath);


function curveBezier(x1, y1, x2, y2, x3, y3, x4, y4) {

  while (t <= 1) {
  x = (((1 - t) * (1 - t) * (1 - t)) * x1) + 3 * (((1 - t) * (1 - t)) * t) * x2 + 3 * (1 - t) * (t * t) * x3 + t * t * t * x4;
  y = (((1 - t) * (1 - t) * (1 - t)) * y1) + 3 * (((1 - t) * (1 - t)) * t) * y2 + 3 * (1 - t) * (t * t) * y3 + t * t * t * y4;
  indexPath.push({x: x, y: y});
    t += step;
  }
}


ctx.beginPath();
// ctx.moveTo(indexPath[1].x, indexPath[1].y)
for (i = 3; i <= indexPath.length - 1; i++) {
  ctx.lineTo(indexPath[i].x, indexPath[i].y);
  // ctx.arc(indexPath[i].x, indexPath[i].y, 3, 0, 2 * Math.PI);
  // ctx.fill();
}
// ctx.fillStyle = 'rgba(50, 197, 148, 1)';
ctx.strokeStyle = 'rgba(50, 197, 148, 1)';
ctx.stroke();
ctx.closePath();





// requestAnimationFrame(move);
// function move() {
//   if (t < 1) {
//     t += step;
//   }

//   // x = (((1 - t) * (1 - t) * (1 - t)) * x1) + 3 * (((1 - t) * (1 - t)) * t) * x2 + 3 * (1 - t) * (t * t) * x3 + t * t * t * x4;
//   // y = (((1 - t) * (1 - t) * (1 - t)) * y1) + 3 * (((1 - t) * (1 - t)) * t) * y2 + 3 * (1 - t) * (t * t) * y3 + t * t * t * y4;

//   ctx.beginPath();

//   ctx.arc(x, y, 9, 0, 2 * Math.PI);
//   ctx.fillStyle = 'rgba(50, 197, 148, 1)';
//   ctx.fill();


//   ctx.stroke();
//   ctx.closePath();
//   requestAnimationFrame(move);
// }
// move();