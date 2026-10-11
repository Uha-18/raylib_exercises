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

    const startAx = 100;
    const startAy = 350;
    const startBx = 200;
    const startBy = 300;

    r.DrawCircle(startAx, startAy, 3, r.BLUE);
    r.DrawCircle(startBx, startBy, 3, r.RED);

    r.DrawLine(startBx, startBy, startAx, startAy, r.BLACK); //hyp
    r.DrawLine(startBx, startBy, startAx, startBy, r.BLACK); //adj
    r.DrawLine(startAx, startAy, startAx, startBy, r.BLACK); //opp

    const adj = distance(startBx, startBy, startAx, startBy);
    const opp = distance(startAx, startAy, startAx, startBy);

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
