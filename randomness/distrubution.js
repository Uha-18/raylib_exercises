const r = require("raylib");
const g = require("./geometry");

function setup() {
  const windowWidth = 400;
  const windowHeight = 400;
  const FPS = 50;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "parallellogram");
  r.SetTargetFPS(FPS);

  const world = {};
  world.rec = { x: 100, y: 100, width: 200, height: 200 };
  world.circle = { x: 200, y: 200, r: 100 };
  world.randPoints = randomPoints(world);

  return world;
}

function randomPoints(world) {
  const circle = world.circle;
  const rec = world.rec;

  const randPoints = [];
  let insideCount = 0;

  for (let i = 0; i < 50; i++) {
    const x = g.calcX(rec);
    const y = g.calcY(rec);
    const distance = g.calcDistance(x, y, circle.x, circle.y);

    if (distance <= circle.r * circle.r) {
      insideCount++;
    }

    randPoints.push({ x, y });
  }
  const area = g.calcArea(randPoints, insideCount);
  const estimatedArea = g.calcEstimatesArea(world.circle, world.rec);

  console.log("area", area, "estimates", estimatedArea);

  return randPoints;
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  const rec = world.rec;
  const circle = world.circle;
  r.DrawRectangleLines(rec.x, rec.y, rec.width, rec.height, r.BLACK);
  r.DrawCircleLines(circle.x, circle.y, circle.r, r.BLACK);

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
