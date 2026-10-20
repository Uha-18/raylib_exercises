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

function draw(world, target) {
  r.BeginDrawing();
  r.ClearBackground(r.GRAY);
  r.DrawTexture(target.target1.texture, 0, 0, r.WHITE);
  r.DrawTexture(target.target2.texture, 250, 0, r.WHITE);
  r.DrawTexture(target.target3.texture, 500, 0, r.WHITE);

  r.EndDrawing();
}

function texture() {
  const target1 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target1);
  r.ClearBackground(r.DARKBLUE);

  let startX1 = 3;
  let startY1 = 3;
  for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
      startY1 = i * 30;
      startX1 = j * 10;
      r.DrawCircle(startX1, startY1, 3, r.WHITE);
    }
  }
  r.EndTextureMode();

  const target2 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target2);
  r.ClearBackground(r.DARKBLUE);

  let startX2 = 3;
  let startY2 = 3;
  for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
      startY2 = i * 10;
      startX2 = j * 30;
      r.DrawCircle(startX2, startY2, 3, r.WHITE);
    }
  }
  r.EndTextureMode();
  r.EndTextureMode();
  const target3 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target2);
  r.ClearBackground(r.DARKBLUE);

  let startX3 = 3;
  let startY3 = 3;
  for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
      startY1 = i * 10;
      startX1 = j * 30;
      r.DrawCircle(startX3, startY3, 3, r.WHITE);
    }
  }
  r.EndTextureMode();
  r.EndTextureMode();
  return { target1, target2, target3 };
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
