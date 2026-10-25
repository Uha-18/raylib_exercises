const r = require("raylib");

function calcExpectedRatio(circle, rectangle) {
  return (Math.PI * (circle.r * circle.r)) / (rectangle.side * rectangle.side);
}

function calcRatio(randomPoints, pointsInCircle) {
  const ratio = pointsInCircle / randomPoints.length;
  return ratio;
}

function calcDistance(x, y, cX, cY) {
  const dx = x - cX;
  const dy = y - cY;
  return Math.sqrt(dx * dx + dy * dy);
}

function calcY(rectangle) {
  return rectangle.y + Math.random() * rectangle.side;
}

function calcX(rectangle) {
  return rectangle.x + Math.random() * rectangle.side;
}

function findMiddlePoint(newValue, cornerPoint) {
  const x = (newValue.x + cornerPoint.x) / 2;
  const y = (newValue.y + cornerPoint.y) / 2;

  return { x, y };
}

module.exports = {
  calcX,
  calcY,
  calcDistance,
  calcRatio,
  calcExpectedRatio,
  findMiddlePoint,
};
