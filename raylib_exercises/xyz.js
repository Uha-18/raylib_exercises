const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;

function getRectangle() {
    const x = windowWidth / 6;
    const y = windowHeight / 6;

    const width = windowWidth - x - x;
    const height = windowHeight - y - y;

    return { x, y, width, height };
}

function getInnerRectangle(x, y, width, height) {
    const xin = width / 3;
    const yin = height / 3;

    const widthin = windowWidth - xin - xin;
    const heightin = windowHeight - yin - yin;

    return { xin, yin, widthin, heightin };
}

r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);

    const outer = getRectangle();

    r.DrawRectangle(outer.x, outer.y, outer.width, outer.height, r.WHITE);

    const inner = getInnerRectangle(
        outer.x,
        outer.y,
        outer.width,
        outer.height,
    );

    r.DrawRectangle(inner.xin, inner.yin, inner.widthin, inner.heightin, r.RED);

    r.EndDrawing();
}
