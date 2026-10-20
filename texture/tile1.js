const r = require("raylib");
function setup() {
  r.InitWindow(800, 800, "tile");
  r.SetTargetFPS(50);
  r.SetTraceLogLevel(r.LOG_NONE);

  const world = {};
  world.source = [
    { x: 0, y: 0, width: 200, height: 200 },
    { x: 0, y: 0, width: 200, height: -200 },
  ];

  return world;
}

function position(world, target) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      x = 200 * j;
      y = 200 * i;
      r.DrawTextureRec(
        target.texture,
        world.source[(i + j) % 2],
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
  const target = r.LoadRenderTexture(300, 300);
  r.BeginTextureMode(target);
  r.ClearBackground(r.DARKBLUE);

  let startX = 0;
  for (i = 0; i < 100; i++) {
    startX += 30;
    r.DrawLine(startX, 0, 0, startX, r.WHITE);
  }

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
