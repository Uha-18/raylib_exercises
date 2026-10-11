const r = require("raylib");

function setup() {
    const windowWidth = 800;
    const windowHeight = 600;
    rec = { x: 0, y: 0 };
    const world = {
        angle: 0,
        radius: 0,
        // points: [],
        cf: 0,
        rec: { x: 0, y: 0, width: 800, height: 600 },
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "sinewave");
    r.SetTargetFPS(8);
    return world;
}
function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangleGradientEx(world.rec, r.PINK, r.BLUE, r.YELLOW, r.GREEN);
    for (let x = 400; x < 800; x++) {
        let y = 200 - 100 * Math.sin(x * 0.03 - world.cf);

        r.DrawCircle(x, y, 5, r.BLACK);
    }

    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        // update(world);
        // world.cf++;
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}

main();
