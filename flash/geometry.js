function calcRadius(distance, world, angle) {
  return distance + world.amplitude * Math.sin(world.frequency * angle);
}

function calcDistance(world) {
  return world.baseRadius * Math.sqrt(Math.random());
}

function calcY(centre, radius, angle) {
  return centre.y + radius * Math.sin(angle);
}

function calcX(centre, radius, angle) {
  return centre.x + radius * Math.cos(angle);
}

module.exports = {
  calcRadius,
  calcDistance,
  calcX,
  calcY,
};
