// const r = require("raylib");

// r.InitWindow(800, 400, "sine");
// r.SetTargetFPS(60);
// r.SetTraceLogLevel(r.LOG_NONE);

// const target = r.LoadRenderTexture(200, 200);

// r.BeginTextureMode(target);
// r.ClearBackground(r.BLACK);

// r.DrawCircle(100, 100, 60, r.YELLOW);
// r.DrawCircle(80, 110, 8, r.BLACK);
// r.DrawCircle(120, 110, 8, r.BLACK);

// r.EndTextureMode();

// while (!r.WindowShouldClose()) {
//   r.BeginDrawing();
//   r.ClearBackground(r.WHITE);

//   r.DrawTexture(target.texture, 50, 50, r.WHITE);
//   r.DrawTexture(target.texture, 300, 50, r.WHITE);
//   r.DrawTexture(target.texture, 550, 50, r.WHITE);

//   r.EndDrawing();
// }

// const r = require("raylib");

// r.InitWindow(800, 600, "Drawing Pad");
// r.SetTargetFPS(60);
// r.SetTraceLogLevel(r.LOG_NONE);

// const target = r.LoadRenderTexture(800, 600);

// r.BeginTextureMode(target);
// r.ClearBackground(r.BLACK);
// r.EndTextureMode();

// while (!r.WindowShouldClose()) {
//   const mousePos = r.GetMousePosition();

//   if (r.IsMouseButtonDown(r.MOUSE_BUTTON_LEFT)) {
//     r.BeginTextureMode(target);
//     r.DrawCircleV(mousePos, 10, r.RAYWHITE);
//     r.EndTextureMode();
//   }

//   r.BeginDrawing();
//   r.ClearBackground(r.DARKGRAY);
//   r.DrawTexture(target.texture, 0, 0, r.WHITE);
//   r.EndDrawing();
// }

// r.CloseWindow();

// const r = require("raylib");

// r.InitWindow(800, 400, "Drawing Pad");
// r.SetTargetFPS(60);
// r.SetTraceLogLevel(r.LOG_NONE);

// const target = r.LoadRenderTexture(400, 400);
// let posX = 50;
// let speed = 4;

// while (!r.WindowShouldClose()) {
//   posX += speed;
//   if (posX > 370 || posX < 30) {
//     speed *= -1;
//   }

//   r.BeginTextureMode(target);
//   r.ClearBackground(r.DARKBLUE);

//   r.DrawCircle(posX, 200, 30, r.YELLOW);

//   r.EndTextureMode();

//   r.BeginDrawing();
//   r.ClearBackground(r.DARKGRAY);

//   r.DrawTexture(target.texture, 0, 0, r.WHITE);

//   r.EndDrawing();
// }

// r.CloseWindow();

const r = require("raylib");

const screenWidth = 800;
const screenHeight = 600;

r.InitWindow(screenWidth, screenHeight, "Mini-Map Tracker");
r.SetTargetFPS(60);
r.SetTraceLogLevel(r.LOG_NONE);

const mapSize = 150;
const miniMap = r.LoadRenderTexture(mapSize, mapSize);

let playerX = 400;
let playerY = 300;
const speed = 5;

while (!r.WindowShouldClose()) {
  if (r.IsKeyDown(r.KEY_RIGHT) && playerX < screenWidth) playerX += speed;
  if (r.IsKeyDown(r.KEY_LEFT) && playerX > 0) playerX -= speed;
  if (r.IsKeyDown(r.KEY_DOWN) && playerY < screenHeight) playerY += speed;
  if (r.IsKeyDown(r.KEY_UP) && playerY > 0) playerY -= speed;

  const miniX = playerX * (mapSize / screenWidth);
  const miniY = playerY * (mapSize / screenHeight);

  r.BeginTextureMode(miniMap);
  r.ClearBackground(r.DARKGRAY);
  r.DrawCircle(miniX, miniY, 4, r.RED);
  r.EndTextureMode();

  r.BeginDrawing();
  r.ClearBackground(r.LIGHTGRAY);

  r.DrawCircle(playerX, playerY, 20, r.BLUE);
  r.DrawTexture(miniMap.texture, 635, 15, r.WHITE);
  const sourceRec = {
    x: 0,
    y: 0,
    width: miniMap.texture.width,
    height: -miniMap.texture.height,
  };
  const position = { x: 635, y: 15 };
  r.DrawTextureRec(miniMap.texture, sourceRec, position, r.WHITE);

  r.EndDrawing();
}

r.CloseWindow();
