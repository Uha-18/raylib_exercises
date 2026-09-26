const r = require("raylib");

const FPS = 100;
const windowWidth = 700;
const windowHeight = 500;

let scanner_X1 = 0;
const scanner_Y1 = 0;
const scanner_width1 = 40;
const scanner_height1 = 500;

let movement1 = 1;
let movement2 = 1;

const partical_X1 = 200;
const partical_Y1 = 0;
const partical_width1 = 100;
const partical_height1 = 500;

const partical_X2 = 500;
const partical_Y2 = 0;
const partical_width2 = 20;
const partical_height2 = 500;

let scanner_X2 = partical_X1 + partical_width1;
const scanner_Y2 = 0;
const scanner_width2 = 40;
const scanner_height2 = 500;

function update() {

    scanner_X1 = scanner_X1 + 1 * movement1;
    scanner_X2 = scanner_X2 + 2 * movement2;

    if (scanner_X2 + scanner_width2 >= windowWidth) {
        scanner_X2 = windowWidth - scanner_width2;
        movement2 = -1;
    } else if (scanner_X2 <= partical_X1 + partical_width1) {
        scanner_X2 = partical_X1 + partical_width1;
        movement2 = 1;
    }

    if (scanner_X1 + scanner_width1 >= (partical_X1 + partical_width1)) {
        scanner_X1 = (partical_X1 + partical_width1) - scanner_width1;
        movement1 = -1
    } else if (scanner_X1 <= 0) {
        scanner_X1 = 0;
        movement1 = 1
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

    if ((scanner_X1 > partical_X1 - scanner_width1 && scanner_X1 < partical_X1 + partical_width1) || (scanner_X1 > partical_X2 - scanner_width1 && scanner_X1 < partical_X2 + partical_width2)) {
        r.DrawRectangle(scanner_X1, scanner_Y1, scanner_width1, scanner_height1, r.RED);
    } else {
        r.DrawRectangle(scanner_X1, scanner_Y1, scanner_width1, scanner_height1, r.WHITE);
    }
    r.DrawRectangle(scanner_X2, scanner_Y2, scanner_width2, scanner_height1, r.WHITE);

    if ((scanner_X2 > partical_X2 - scanner_width2 && scanner_X2 < partical_X2 + partical_width2)) {
        r.DrawRectangle(scanner_X2, scanner_Y2, scanner_width2, scanner_height2, r.RED);
    } else {
        r.DrawRectangle(scanner_X2, scanner_Y2, scanner_width2, scanner_height2, r.WHITE);
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