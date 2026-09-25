const r = require("raylib");

const windowWidth = 700;
const windowHeight = 500;

const scale = 0.8;

function getRectangle() {
    const x = windowWidth / 6;
    const y = windowHeight / 6;

    const width = windowWidth - x - x;
    const height = windowHeight - y - y;

    return { x, y, width, height };
}

function InnerRectangle(x, y, width, height) {
    const widthin = width * scale;
    const heightin = height * scale;

    const xin = x + (width - widthin) / 2;
    const yin = y + (height - heightin) / 2;

    return { xin, yin, widthin, heightin };
}

r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);

    const outer = getRectangle();

    r.DrawRectangle(outer.x, outer.y, outer.width, outer.height, r.WHITE);
    const inner = InnerRectangle(outer.x, outer.y, outer.width, outer.height);

    r.DrawRectangle(inner.xin, inner.yin, inner.widthin, inner.heightin, r.RED);

    r.EndDrawing();
}
