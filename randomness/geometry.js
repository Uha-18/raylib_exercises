const r = require("raylib");

function calcEstimatesArea(circle, rec) {
  return (Math.PI * (circle.r * circle.r)) / (rec.width * rec.width);
}

function calcArea(randomPoints, insideCount) {
  const area = insideCount / randomPoints.length;
  console.log(randomPoints, insideCount);
  return area;
}

function calcDistance(x, y, cX, cY) {
  const dx = x - cX;
  const dy = y - cY;
  return dx * dx + dy * dy;
}

function calcY(rec) {
  return rec.y + Math.random() * rec.height;
}

function calcX(rec) {
  return rec.x + Math.random() * rec.width;
}
module.exports = { calcX, calcY, calcDistance, calcArea, calcEstimatesArea };
