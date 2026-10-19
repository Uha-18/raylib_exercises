const r = require("raylib");
function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.EndDrawing();
}

function update(world) {}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(400, 400, "triangle");
    r.SetTargetFPS(60);
    const world = {};
    world.dimensions = { x: 200, y: 0, width };

    return world;
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
