const r = require("raylib");

function setup() {
    const windowWidth = 400;
    const windowHeight = 400;
    const FPS = 50;
    const world = {};

    r.InitWindow(windowWidth, windowHeight, "circle points");
    r.SetTargetFPS(FPS);

    return world;
}

function angle(opp, adj) {
    return Math.atan2(opp, adj);
}

function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const startX1 = 350;
    const startY1 = 150;
    const startX2 = 100;
    const startY2 = 300;

    r.DrawCircle(startX1, startY1, 3, r.BLUE);
    r.DrawCircle(startX2, startY2, 3, r.RED);

    r.DrawLine(startX2, startY2, startX1, startY1, r.BLACK); //hyp
    r.DrawLine(startX2, startY2, startX1, startY2, r.BLACK); //adj
    r.DrawLine(startX1, startY1, startX1, startY2, r.BLACK); //opp

    const adj = distance(startX2, startY2, startX1, startY2);
    const opp = distance(startX1, startY1, startX1, startY2);

    const degree = angle(opp, adj) * (180 / Math.PI);

    r.DrawText(`${degree} degrees`, 50, 50, 20, r.RED);

    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}
function main() {
    const world = setup();
    loop(world);
}
main();
