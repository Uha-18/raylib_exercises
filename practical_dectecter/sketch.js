const r = require("raylib");
const g = require("./geometry")

const FPS = 100;
const windowWidth = 900;
const windowHeight = 700;

let scanner_X1 = 0;
const scanner_Y1 = 0;
const scanner_width1 = 40;
const scanner_height1 = windowHeight;
let movement = 1
let movement1 = 1;
let movement2 = 1;
let movement3 = 1;

const partical_X1 = windowWidth / 5;
const partical_Y1 = 0;
const partical_width1 = 100;
const partical_height1 = windowHeight;

const partical_X2 = windowWidth / 1.2;
const partical_Y2 = 0;
const partical_width2 = 20;
const partical_height2 = windowHeight;

const partical_X3 = 0;
const partical_Y3 = windowHeight / 4;
const partical_width3 = windowWidth;
const partical_height3 = 40;

let scanner_X2 = partical_X1 + partical_width1;
const scanner_Y2 = 0;
const scanner_width2 = 40;
const scanner_height2 = windowHeight;

const scanner_X3 = 0;
let scanner_Y3 = 0;
const scanner_width3 = windowWidth;
const scanner_height3 = 40;

const half = windowWidth / 2;
const initial_1 = partical_X1 - scanner_width1;
const final_1 = partical_X1 + partical_width1;

const initial_2 = partical_X2 - scanner_width2;
const final_2 = partical_X2 + partical_width2;

const initial_3 = partical_Y3 - scanner_height3;
const final_3 = partical_Y3 + partical_height3;

function update() {
    let result1 = g.scanner_movement(scanner_X1, scanner_width1, 0, half, 1, movement1);
    scanner_X1 = result1.X;
    movement1 = result1.movement;

    let result2 = g.scanner_movement(scanner_X2, scanner_width2, half, windowWidth, 2, movement2);
    scanner_X2 = result2.X;
    movement2 = result2.movement;

    let result3 = g.scanner_movement(scanner_Y3, scanner_height3, 0, windowHeight, 3, movement3);
    scanner_Y3 = result3.X;
    movement3 = result3.movement;
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
    r.DrawRectangle(partical_X3, partical_Y3, partical_width3, partical_height3, r.BLUE);

    g.choose_colour(scanner_X1, initial_1, final_1);
    r.DrawRectangle(scanner_X1, scanner_Y1, scanner_width1, scanner_height1, colour);

    g.choose_colour(scanner_X2, initial_2, final_2,);
    r.DrawRectangle(scanner_X2, scanner_Y2, scanner_width1, scanner_height2, colour);

    g.choose_colour(scanner_Y3, initial_3, final_3);
    r.DrawRectangle(scanner_X3, scanner_Y3, scanner_width3, scanner_height3, colour);
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