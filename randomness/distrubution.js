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
  world.square = { x: 100, y: 100, side: 200 };
  world.circle = { x: 200, y: 200, r: 100 };
  world.noOfPoints = 10;
  world.randPoints = generateRandomPoints(
    world.circle,
    world.square,
    world.noOfPoints,
  );
  return world;
}

function generateRandomPoints(circle, square, noOfPoints) {
  const randPoints = [];
  let pointsInCircle = 0;

  for (let i = 0; i < noOfPoints; i++) {
    const x = g.calcX(square);
    const y = g.calcY(square);
    const distance = g.calcDistance(x, y, circle.x, circle.y);

    if (distance <= circle.r) {
      pointsInCircle++;
    }

    randPoints.push({ x, y });
  }
  const ratio = g.calcRatio(randPoints, pointsInCircle);
  const expectedRatio = g.calcExpectedRatio(circle, square);
  console.log(`"ratio" :${ratio}`, `"expected" :  ${expectedRatio}`);

  return randPoints;
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  const square = world.square;
  const circle = world.circle;

  r.DrawRectangleLines(square.x, square.y, square.side, square.side, r.BLACK);
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
