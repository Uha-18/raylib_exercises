const r = require("raylib");

function setup() {
  const windowWidth = 400;
  const windowHeight = 400;
  const FPS = 50;

  const world = {};
  world.points = [
    { x: 50, y: 50 },
    { x: 250, y: 50 },
    { x: 180, y: 170 },
    { x: 0, y: 170 },
  ];

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "parallellogram");
  r.SetTargetFPS(FPS);

  return world;
}

const x1 = 50;
const y1 = 50;
const x2 = 180;
const y2 = 170;
const factor1 = 1;
const factor2 = 1;
const randX = x1 * factor1 + x2 * factor2;
const randY = y1 * factor1 + y2 * factor2;
function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  r.DrawLineV(point[0], point[1], r.BLACK);
  r.DrawLineV(point[1], point[2], r.BLACK);
  r.DrawLineV(point[2], point[3], r.BLACK);
  r.DrawLineV(point[3], point[0], r.BLACK);
  r.DrawCircle(randX, randY, 5, r.YELLOW);
  r.EndDrawing();
}
function loop(world) {
  while (!r.WindowShouldClose()) {
    // update();
    draw(world);
  }
}
function main() {
  const world = setup();
  loop(world);
}
main();
