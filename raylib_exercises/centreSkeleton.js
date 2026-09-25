const r = require("raylib");

const windowWidth = 900;
const windowHeight = 700;

const sX = 200;
const sY = 100;
const sR = 30;

const TX1 = 400;
const TY1 = 200;
const TR1 = 30;

const TX2 = 600;
const TY2 = 100;
const TR2 = 30;

function sqr(x) {
    return x * x;
}

function distance(x1, y1, x2, y2) {
    return sqr(x2 - x1) + sqr(y2 - y1);
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "centreskeleton");
    r.SetTargetFPS(60);
}
function drawLineToClosestTarget() {
    const d1 = distance(sX, sY, TX1, TY1);
    const d2 = distance(sX, sY, TX2, TY2);
    if (d1 < d2) {
        r.DrawLine(sX, sY, TX1, TY1, r.WHITE);
    }
    else {
        r.DrawLine(sX, sY, TX2, TY2, r.BLUE);
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawCircle(sX, sY, sR, r.RED);
    r.DrawCircle(TX1, TY1, TR1, r.BLUE);
    r.DrawCircle(TX2, TY2, TR2, r.GREEN);
    drawLineToClosestTarget();

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
