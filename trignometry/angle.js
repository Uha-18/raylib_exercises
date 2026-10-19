const r = require("raylib");

function setup() {
    const windowWidth = 400;
    const windowHeight = 400;
    const FPS = 50;
    const world = {
        A: { x: 20, y: 200 },
        B: { x: 100, y: 300 },
    };

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

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(world.A.x, world.A.y, 3, r.BLUE);
    r.DrawCircle(world.B.x, world.B.y, 3, r.RED);

    r.DrawLine(world.B.x, world.B.y, world.A.x, world.A.y, r.BLACK); //opp
    r.DrawLine(world.B.x, world.B.y, 400, world.B.y, r.BLACK); //adj
    r.DrawLine(world.A.x, world.A.y, 200, 300, r.BLACK); //hyp

    const adj = distance(world.B.x, world.B.y, 400, world.B.y);
    const opp = distance(world.B.x, world.B.y, world.A.x, world.A.y);

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
