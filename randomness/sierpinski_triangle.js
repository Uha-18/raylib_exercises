const r = require("raylib");
const g = require("./geometry");

function setup() {
  const windowWidth = 500;
  const windowHeight = 500;
  const FPS = 50;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "parallellogram");
  r.SetTargetFPS(FPS);

  const world = {};

  return world;
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  r.DrawTriangleLines(
    { x: 50, y: 450 },
    { x: 450, y: 450 },
    { x: 250, y: 100 },
    r.BLACK,
  );

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
