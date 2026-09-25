const r = require("raylib");
const windowWidth = 900;
const windowHeight = 700;

const x1 = 200;
const y1 = 100;
const r1 = 30;

const x2 = 300;
const y2 = 600;
const r2 = 30;

const x3 = 500;
const y3 = 500;
const r3 = 30;

// const d1 = distance1();
// const d2 = distance2();

function distance1() {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distancesquare = dx * dx + dy * dy;
    return { dx, dy, distancesquare };
}

function distance2() {
    const dx = x3 - x1;
    const dy = y3 - y1;
    const distancesquare = dx * dx + dy * dy;
    return { dx, dy, distancesquare };
}

r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawCircle(x1, y1, r1, r.RED);

    r.DrawCircle(x2, y2, r2, r.BLUE);

    r.DrawCircle(x3, y3, r3, r.GREEN);

    if (distance1().distancesquare < distance2().distancesquare) {
        r.DrawLine(x1, y1, x2, y2, r.WHITE);
    } else {
        r.DrawLine(x1, y1, x3, y3, r.WHITE);
    }
    r.EndDrawing();
}
