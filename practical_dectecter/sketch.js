const r = require("raylib");

const FPS = 100;
const windowWidth = 700;
const windowHeight = 500;

let scanner_X = 0;
const scanner_Y = 0;
const scanner_width = 40;
const scanner_height = 500;

let movement = 1;

const partical_X1 = 200;
const partical_Y1 = 0;
const partical_width1 = 100;
const partical_height1 = 500;

const partical_X2 = 500;
const partical_Y2 = 0;
const partical_width2 = 20;
const partical_height2 = 500;

function update() {

    scanner_X += 1 * movement
    if (scanner_X + scanner_width >= windowWidth) {
        scanner_X = windowWidth - scanner_width
        movement = -1
    } else if (scanner_X <= 0) {
        scanner_X = 0;
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
    r.DrawRectangle(partical_X1, partical_Y1, partical_width1, partical_height1, r.BLUE);

    r.DrawRectangle(partical_X2, partical_Y2, partical_width2, partical_height2, r.BLUE);

    if (scanner_X > partical_X1 - scanner_width && scanner_X < partical_X1 + partical_width1) {
        r.DrawRectangle(scanner_X, scanner_Y, scanner_width, scanner_height, r.RED);
    } else {
        r.DrawRectangle(scanner_X, scanner_Y, scanner_width, scanner_height, r.WHITE);
    }


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