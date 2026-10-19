const r = require("raylib");

r.InitWindow(800, 400, "sine");
r.SetTargetFPS(60);
r.SetTraceLogLevel(r.LOG_NONE);

const target = r.LoadRenderTexture(600, 310);

while (!r.WindowShouldClose()) {
  r.BeginTextureMode(target);
  // r.ClearBackground(r.BLACK);

  for (angle = 0; angle <= 360; angle += 10) {
    const rad = angle * (Math.PI / 180);
    const x = 50 + angle;
    const y = 200 - Math.sin(rad) * 100;

    r.DrawCircle(x, y, 5, r.RED);
  }

  r.EndTextureMode();
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawTexture(target.texture, 50, 50, r.BLUE);
  r.EndDrawing();
}
