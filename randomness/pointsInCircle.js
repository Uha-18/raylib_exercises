const r = require("raylib");

function setup() {
  const windowWidth = 400;
  const windowHeight = 400;
  const FPS = 50;

  const world = {};
  world.circle = { x: 200, y: 200, rad: 150 };
  world.points = generatePoints(700, world.circle);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "points in circle");
  r.SetTargetFPS(FPS);

  return world;
}

function generatePoints(count, circle) {
  const pointsArray = [];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = circle.rad * Math.sqrt(Math.random());
    const x = circle.x + distance * Math.cos(angle);
    const y = circle.y + distance * Math.sin(angle);

    pointsArray.push({ x, y });
  }
  return pointsArray;
}
function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  r.DrawCircleLines(world.circle.x, world.circle.y, world.circle.rad, r.BLACK);

  for (const point of world.points) {
    r.DrawCircleV(point, 5, { r: 253, g: 249, b: 0, a: 170 });
  }
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
