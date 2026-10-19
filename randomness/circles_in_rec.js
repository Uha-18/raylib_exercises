const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(800, 600, "random circles");
    r.SetTargetFPS(10);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (i = 0; i < 500; i++) {
        const x = 200 + Math.random() * 400;
        const y = 100 + Math.random() * 400;
        const rad = 5;

        r.DrawCircle(x, y, rad, r.WHITE);
    }
    r.DrawRectangleLines(200, 100, 400, 400, r.RED);
    r.EndDrawing();
}
function teardown() {
    r.CloseWindow();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function main() {
    setup();
    loop();
    teardown();
}

main();
