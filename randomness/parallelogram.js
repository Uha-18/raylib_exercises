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
  const point = world.points;
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  r.DrawLineV(point[0], point[1], r.BLACK);
  r.DrawLineV(point[1], point[2], r.BLACK);
  r.DrawLineV(point[2], point[3], r.BLACK);
  r.DrawLineV(point[3], point[0], r.BLACK);
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
