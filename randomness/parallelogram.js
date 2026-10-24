const r = require("raylib");

function setup() {
  const windowWidth = 600;
  const windowHeight = 400;
  const FPS = 50;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "parallellogram");
  r.SetTargetFPS(FPS);

  const world = {};
  world.points = [
    { x: 100, y: 100 }, //top left
    { x: 200, y: 200 }, //bottom left // x1,y1
    { x: 350, y: 100 }, //top right//x2,y2
  ];
  world.randPoints = randomPoints(world);

  return world;
}

function createCoordinates(point) {
  const x1 = point[1].x - point[0].x;
  const y1 = point[1].y - point[0].y;
  const x2 = point[2].x - point[0].x;
  const y2 = point[2].y - point[0].y;

  return { x1, x2, y1, y2 };
}

function randY(world, y1, factor1, y2, factor2) {
  return world.points[0].y + (y1 * factor1 + y2 * factor2);
}

function randX(world, x1, factor1, x2, factor2) {
  return world.points[0].x + (x1 * factor1 + x2 * factor2);
}

function randomPoints(world) {
  const randPoints = [];

  for (let i = 0; i < 300; i++) {
    const factor1 = Math.random();
    const factor2 = Math.random();

    const { x1, x2, y1, y2 } = createCoordinates(world.points);
    const x = randX(world, x1, factor1, x2, factor2);
    const y = randY(world, y1, factor1, y2, factor2);

    randPoints.push({ x, y });
  }
  return randPoints;
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  for (const point of world.randPoints) {
    r.DrawCircleV(point, 5, { r: 253, g: 249, b: 0, a: 170 });
  }

  r.EndDrawing();
}
function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}
function main() {
  const world = setup();
  loop(world);
}
main();
