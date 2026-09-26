const x1 = 200;
const y1 = 100;


const x2 = 260;
const y2 = 600;


const x3 = 500;
const y3 = 500;

function calcOffset(outer, inner) {
  return (outer - inner) / 2;
}

function distance1() {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distancesquare = dx * dx + dy * dy;
  return { distancesquare };
}

function distance2() {
  const dx = x3 - x1;
  const dy = y3 - y1;
  const distancesquare = dx * dx + dy * dy;
  return { distancesquare };
}

module.exports = {
  calcOffset, distance1, distance2
};