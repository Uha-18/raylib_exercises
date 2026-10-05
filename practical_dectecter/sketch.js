const r = require("raylib");
const s = require("./scanner");
const p = require("./particle");

function running(world) {
    return !r.WindowShouldClose();
}

function setup(world) {
    world.windowWidth = 700;
    world.FPS = 100;
    world.windowHeight = 500;

    r.SetTraceLogLevel(r.LOG_ERROR);
    r.InitWindow(world.windowWidth, world.windowHeight, "partical_detector");
    r.SetTargetFPS(world.FPS);

    world.s1 = s.scanner(
        0,
        0,
        40,
        world.windowHeight,
        0,
        world.windowWidth / 2,
        1,
    );
    world.s2 = s.scanner(
        world.windowWidth / 2,
        0,
        40,
        world.windowHeight,
        world.windowWidth / 2,
        world.windowWidth,
        2,
    );
    world.s3 = s.scanner(0, 0, world.windowWidth, 40, 0, world.windowHeight, 3);

    world.p1 = p.partical(
        world.windowWidth / 5,
        0,
        100,
        world.windowHeight,
        world.windowWidth / 5,
        world.windowWidth / 5 + 100,
    );
    world.p2 = p.partical(
        world.windowWidth / 1.2,
        0,
        20,
        world.windowHeight,
        world.windowWidth / 1.2,
        world.windowWidth / 1.2 + 20,
    );
    world.p3 = p.partical(
        0,
        world.windowHeight / 4,
        world.windowWidth,
        40,
        world.windowHeight / 4,
        world.windowHeight / 4 + 40,
    );
}

function update(world) {
    console.log(world.s1);
    s.update_x(world.s1);
    s.update_x(world.s2);
    s.update_y(world.s3);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    p.drawVerticalRange(world.p1);
    p.drawVerticalRange(world.p2);
    p.drawHorizontalRange(world.p3);

    s.draw_x(world.s1, world.p1);
    s.draw_x(world.s2, world.p2);
    s.draw_y(world.s3, world.p3);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    update,
    setup,
    draw,
    teardown,
};
