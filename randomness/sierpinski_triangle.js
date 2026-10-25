const r = require("raylib");
const g = require("./geometry");

function setup() {
  const windowWidth = 500;
  const windowHeight = 500;
  const FPS = 50;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "sierpinski triangle");
  r.SetTargetFPS(FPS);

  const world = {};
  world.corners = [
    { x: 50, y: 450 }, //left
    { x: 250, y: 50 }, //top
    { x: 450, y: 450 }, //right
  ];
  world.noOfPoints = 30000;
  world.points = generatePoints(world.corners, world.noOfPoints);

  return world;
}

function selectCorners(corner) {
  const index = Math.floor(Math.random() * 3);
  const cornerPoint = corner[index];

  return cornerPoint;
}

function generatePoints(corner, noOfPoints) {
  const point = [];
  let newPoint = corner[1];

  for (i = 0; i < noOfPoints; i++) {
    const cornerPoint = selectCorners(corner);
    const middlePoint = g.findMiddlePoint(newPoint, cornerPoint);
    newPoint = middlePoint;

    point.push(newPoint);
  }
  return point;
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  for (const point of world.points) {
    r.DrawCircleV(point, 1, r.RED);
  }

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function main() {
  const world = setup();
  loop(world);
  teardown();
}

main();
