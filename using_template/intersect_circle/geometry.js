function calcOffset(outer, inner) {
  return (outer - inner) / 2;
}

function sqr(x) {
  return x * x;
}

function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return (sqr(dx) + sqr(dy)) ** 0.5;
}

module.exports = {
  calcOffset, distance, sqr
};