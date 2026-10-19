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
        const x = Math.random() * r.GetScreenWidth();
        const y = Math.random() * r.GetScreenHeight();
        const rad = Math.random() * 8;
        r.DrawCircle(x, y, rad, r.WHITE);
    }

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
