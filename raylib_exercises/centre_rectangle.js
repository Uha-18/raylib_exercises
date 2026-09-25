const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;

const x = windowWidth / 4;
const y = windowHeight / 4;

const width = windowWidth - x - x;
const height = windowHeight - y - y;

r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, width, height, r.WHITE);

    r.EndDrawing();
}
