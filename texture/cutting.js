const r = require("raylib");

r.InitWindow(800, 400, "sine");
r.SetTargetFPS(60);
r.SetTraceLogLevel(r.LOG_NONE);

const target = r.LoadRenderTexture(200, 200);
r.BeginTextureMode(target);
r.ClearBackground(r.BLACK);

r.DrawCircle(100, 100, 60, r.RED);
r.DrawCircle(80, 80, 15, r.WHITE);

r.EndTextureMode();

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.GRAY);

  const source = { x: 0, y: 0, width: 200, height: 200 };
  const source1 = { x: 0, y: 0, width: -200, height: 200 };
  const source2 = { x: 0, y: 0, width: 200, height: -200 };

  r.DrawTextureRec(target.texture, source, { x: 50, y: 100 }, r.WHITE);
  r.DrawText("normal", 100, 70, 30, r.BLACK);
  r.DrawTextureRec(target.texture, source1, { x: 550, y: 100 }, r.WHITE);
  r.DrawText("hori flip", 550, 70, 30, r.BLACK);
  r.DrawTextureRec(target.texture, source2, { x: 300, y: 100 }, r.WHITE);
  r.DrawText("vert flip", 300, 70, 30, r.BLACK);

  r.EndDrawing();
}
