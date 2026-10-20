const r = require("raylib");
function setup() {
  r.InitWindow(800, 800, "tile");
  r.SetTargetFPS(50);
  r.SetTraceLogLevel(r.LOG_NONE);

  const world = {};

  return world;
}

function draw(world) {
  const target = r.LoadRenderTexture(300, 300);

  r.BeginTextureMode(target);
  r.ClearBackground(r.DARKBLUE);
  let startX = 0;
  for (i = 0; i < 100; i++) {
    startX += 30;
    r.DrawLine(startX, 0, 0, startX, r.WHITE);
  }
  r.EndTextureMode();

  r.BeginDrawing();
  r.ClearBackground(r.GRAY);
  const source = { x: 0, y: 0, width: 200, height: 200 };
  const source1 = { x: 0, y: 0, width: -200, height: 200 };

  r.DrawTextureRec(target.texture, source, { x: 0, y: 0 }, r.WHITE);
  r.DrawTextureRec(target.texture, source1, { x: 200, y: 0 }, r.WHITE);
  r.DrawTextureRec(target.texture, source, { x: 400, y: 0 }, r.WHITE);
  r.DrawTextureRec(target.texture, source1, { x: 600, y: 0 }, r.WHITE);

  r.DrawTextureRec(target.texture, source1, { x: 0, y: 200 }, r.WHITE);
  r.DrawTextureRec(target.texture, source, { x: 200, y: 200 }, r.WHITE);
  r.DrawTextureRec(target.texture, source1, { x: 400, y: 200 }, r.WHITE);
  r.DrawTextureRec(target.texture, source, { x: 600, y: 200 }, r.WHITE);

  r.DrawTextureRec(target.texture, source, { x: 0, y: 400 }, r.WHITE);
  r.DrawTextureRec(target.texture, source1, { x: 200, y: 400 }, r.WHITE);
  r.DrawTextureRec(target.texture, source, { x: 400, y: 400 }, r.WHITE);
  r.DrawTextureRec(target.texture, source1, { x: 600, y: 400 }, r.WHITE);

  r.DrawTextureRec(target.texture, source1, { x: 0, y: 600 }, r.WHITE);
  r.DrawTextureRec(target.texture, source, { x: 200, y: 600 }, r.WHITE);
  r.DrawTextureRec(target.texture, source1, { x: 400, y: 600 }, r.WHITE);
  r.DrawTextureRec(target.texture, source, { x: 600, y: 600 }, r.WHITE);

  r.EndDrawing();
}
function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
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
