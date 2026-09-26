const r = require("raylib");

const FPS = 60;
const windowWidth = 700;
const windowHeight = 500;

let scanner_X = 0;
const scanner_Y = 0;
const scanner_width = 40;
const scanner_height = 500;

let movement = 1;

function update() {

    X += 4 * movement
    if (X + width >= windowWidth) {
        X = windowWidth - width
        movement = -1
    } else if (X <= 0) {
        X = 200;
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
    r.DrawRectangle(scanner_X, scanner_Y, scanner_width, scanner_height, r.WHITE);
    r.DrawRectangle(300, 0, 80, 500, r.WHITE);
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