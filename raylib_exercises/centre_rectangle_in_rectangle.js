const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;

const x = windowWidth / 6;
const y = windowHeight / 6;

const width = windowWidth - x - x;
const height = windowHeight - y - y;

const xin = width / 3;
const yin = width / 4;

const widthin = windowWidth - xin - xin;
const heightin = windowHeight - yin - yin;

r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, width, height, r.WHITE);

    r.DrawRectangle(xin, yin, widthin, heightin, r.RED);

    r.EndDrawing();
}
