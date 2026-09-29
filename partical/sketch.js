const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;

const scanner_X1 = 0;
const scanner_Y1 = 0;
const scanner_width1 = 40;
const scanner_height1 = windowHeight;

function running() {
    return !r.WindowShouldClose();
}

function drawparticle(x, width) {
    r.DrawRectangle(x, 0, width, windowHeight, r.SKYBLUE);
}

function isDetectorOutOfBounds(final, initial) {
    return initial > windowWidth || initial < 0;
}

function changeDirection() {
    speed = -speed;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "partical detector");
    r.SetTargetFPS(50);
}

function update() {
    if (isDetectorOutOfBounds()) changeDirection();
    scanner_X1 = scanner_X1 + 1;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    // drawparticle(100, 50);
    r.DrawRectangle(
        scanner_X1,
        scanner_Y1,
        scanner_width1,
        windowHeight,
        r.WHITE,
    );
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
