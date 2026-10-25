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
  world.corners = [
    { x: 50, y: 450 }, //left
    { x: 250, y: 50 }, //top
    { x: 450, y: 450 }, //right
  ];
  return world;
}

function findMiddlePoint(newValue, cornerPoint) {
  const x = newValue.x + cornerPoint.x / 2;
  const y = newValue.y + cornerPoint.y / 2;
  return { x, y };
}

function points(world) {
  let newValue = { x: 250, y: 50 };
  const index = Math.floor(Math.random() + Math.random() + Math.random());
  const cornerPoint = world.corners[index];
  const middlePoint = findMiddlePoint(newValue, cornerPoint);
  newValue = middlePoint;
  console.log(newValue, middlePoint);
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  const corners = world.corners;
  r.DrawTriangleLines(corners[0], corners[1], corners[2], r.BLACK);
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
}

main();
