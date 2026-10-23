const r = require("raylib");
function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(800, 800, "tile");
  r.SetTargetFPS(50);

  const world = {};
  world.source = [
    { x: 0, y: 0, width: 100, height: 100 },
    { x: 0, y: 0, width: -100, height: -100 },
    { x: 0, y: 0, width: 100, height: -100 },
  ];

  return world;
}

function position(world, target) {
  return tile6(target, world);
}

function draw(world, target) {
  r.BeginDrawing();
  r.ClearBackground(r.GRAY);
  position(world, target);
  r.EndDrawing();
}

function texture() {
  const target = r.LoadRenderTexture(100, 100);
  r.BeginTextureMode(target);
  r.ClearBackground(r.DARKBLUE);

  r.DrawTriangle(
    { x: 100, y: 100 },
    { x: 100, y: 0 },
    { x: 0, y: 100 },
    r.WHITE,
  );

  r.EndTextureMode();

  return target;
}

function loop(world) {
  target = texture();
  while (!r.WindowShouldClose()) {
    draw(world, target);
  }
}
function teardown() {
  r.CloseWindow();
}
function main() {
  const world = setup();
  loop(world);
  teardown();
}
main();
