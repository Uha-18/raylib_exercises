const r = require("raylib");

function calcOffset(outer, inner) {
  return (outer - inner) / 2;
}

function scanner_movement(X, Y, start, end, speed, movement) {
  X = X + speed * movement;
  if (X + Y >= end) {
    X = end - Y;
    movement = -1;
  } else if (X <= start) {
    X = start;
    movement = 1;
  }
  return { X, movement }
}

function choose_colour(X, initial, final,) {
  return colour = (X > initial && X < final) ? r.RED : r.WHITE;
}

module.exports = {
  scanner_movement,
  choose_colour,
  calcOffset,
};