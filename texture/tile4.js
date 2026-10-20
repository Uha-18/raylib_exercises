const r = require("raylib");
function setup() {
  r.InitWindow(800, 800, "tile");
  r.SetTargetFPS(50);
  r.SetTraceLogLevel(r.LOG_NONE);

  const world = {};
  world.source = [
    { x: 0, y: 0, width: -100, height: -100 },
    { x: 0, y: 0, width: -100, height: -100 },
    { x: 0, y: 0, width: 100, height: 100 },
  ];

  return world;
}

function position(world, target) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      x = 100 * j;
      y = 100 * i;
      r.DrawTextureRec(
        target.texture,
        world.source[((i + j) * 2) % 3],
        { x, y },
        r.WHITE,
      );
    }
  }
  return { x, y };
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

  r.DrawTriangle({ x: 100, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 100 }, r.WHITE);

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
