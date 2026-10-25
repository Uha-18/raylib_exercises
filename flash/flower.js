const r = require("raylib");
const g = require("./geometry");
function setup() {
  const windowWidth = 800;
  const windowHeight = 600;
  const FPS = 10;
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "sinewave");
  r.SetTargetFPS(FPS);
  const world = {};
  world.center = { x: 400, y: 300, baseRadius: 200 };
  world.numPoints = 500;
  world.frequency = 25;
  world.amplitude = 70;

  return world;
}

function points(world) {
  for (let i = 0; i <= world.numPoints; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = g.calcDistance(world.center);
    let radius = g.calcRadius(distance, world, angle);

    let x = g.calcX(world.center, radius, angle);
    let y = g.calcY(world.center, radius, angle);

    r.DrawCircle(x, y, 5, {
      r: Math.random() * 255,
      g: Math.random() * 255,
      b: Math.random() * 255,
      a: 255,
    });
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  points(world);
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
  r.CloseWindow();
}

main();
