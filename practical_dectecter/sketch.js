const r = require("raylib");

const FPS = 60;
const windowWidth = 700;
const windowHeight = 500;

let X = 0;
const Y = 0;
const width = 40;
const height = 500;

let movement = 1;

function update() {

    X += 4 * movement
    if (X + width >= windowWidth + 200) {
        X = windowWidth - width
        movement = -1
    } else if (X <= 0) {
        X = 0;
        movement = 1
    }
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "partical_detector");
    r.SetTargetFPS(FPS);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(X, Y, width, height, r.WHITE);
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