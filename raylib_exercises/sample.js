const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;
const scale = 0.5;

const width = windowWidth * scale;
const height = windowHeight * scale;

const x = (windowWidth - width) / 2;
const y = (windowHeight - height) / 2;

r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, width, height, r.WHITE);

    r.EndDrawing();
}
