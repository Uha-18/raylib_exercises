const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(800, 500, "random circles");
    r.SetTargetFPS(60);

    const world = {};
    const n = 100;
    world.points = random(n);

    return world;
}

function random(n) {
    const points = [];

    for (i = 0; i < n; i++) {
        points.push(200 + Math.random() * 400);
    }
    return points;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (const x of world.points) {
        r.DrawCircle(x, x, 5, r.WHITE);
    }

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
