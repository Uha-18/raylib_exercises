const r = require("raylib");

function distance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;

    return Math.sqrt(dx * dx + dy * dy);
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(800, 400, "triangle");
    r.SetTargetFPS(60);

    const world = {};
    world.point = [
        { x: 150, y: 150 },
        { x: 450, y: 220 },
        { x: 300, y: 320 },
    ];
    world.ball = { x: 150, y: 150 };

    return world;
}

function slope(x1, x2, y1, y2) {
    return (y2 - y1) / (x2 - x1);
}

function constant(point1, point2, x) {
    const m = slope(point1.x, point2.x, point1.y, point2.y);
    const c = point1.y - m * point1.x;
    const y = m * x + c;
    return { x, y };
}

function update(world) {
    world.ball.x = constant(world.point1, world.point2);
    world.ball.y = constant(world.point1, world.point2);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircleV(world.point[0], 3, r.WHITE);
    r.DrawCircleV(world.point[1], 3, r.WHITE);
    r.DrawCircleV(world.point[2], 3, r.WHITE);

    r.DrawLineV(world.point[0], world.point[1], r.WHITE);
    r.DrawLineV(world.point[1], world.point[2], r.WHITE);
    r.DrawLineV(world.point[2], world.point[0], r.WHITE);

    r.DrawCircleV(world.ball, 10, r.ORANGE);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
