const r = require("raylib");
const s = require("./scanner_check");
const s1 = require("./Scanner1");
const s2 = require("./Scanner2");
const s3 = require("./scanner3");

const FPS = 100;
const windowWidth = 700;
const windowHeight = 500;

let movement1 = 1;
let movement2 = 2;
let movement3 = 3;

const partical_X1 = windowWidth / 5;
const partical_width1 = 100;

const partical_X2 = windowWidth / 1.2;
const partical_width2 = 20;

const partical_Y3 = windowHeight / 4;
const partical_height3 = 40;

const half = windowWidth / 2;

let colour = r.WHITE;

function vertical_drawRange(start, width) {
    r.DrawRectangle(start, 0, width, windowHeight, r.BLUE);
}

function horizontal_drawRange(start, height) {
    r.DrawRectangle(0, start, windowWidth, height, r.BLUE);
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "partical_detector");
    r.SetTargetFPS(FPS);
}

function update() {
    movement1 = s.changeDirection(s1.X, half, s1.width, 0, movement1);
    s1.X += movement1;

    movement2 = s.changeDirection(s2.X, windowWidth, s2.width, half, movement2);
    s2.X += movement2;

    movement3 = s.changeDirection(s3.Y, windowHeight, s3.height, 0, movement3);
    s3.Y += movement3;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    vertical_drawRange(partical_X1, partical_width1);
    vertical_drawRange(partical_X2, partical_width2);
    horizontal_drawRange(partical_Y3, partical_height3);

    colour = s.choose_colour(
        s1.X,
        s1.X + s1.width,
        partical_X1,
        partical_X1 + partical_width1,
    );
    r.DrawRectangle(s1.X, s1.Y, s1.width, s1.height, colour);

    colour = s.choose_colour(
        s2.X,
        s2.X + s2.width,
        partical_X2,
        partical_X2 + partical_width2,
    );
    r.DrawRectangle(s2.X, s2.Y, s2.width, s2.height, colour);

    colour = s.choose_colour(
        s3.Y,
        s3.Y + s3.height,
        partical_Y3,
        partical_Y3 + partical_height3,
    );
    r.DrawRectangle(s3.X, s3.Y, s3.width, s3.height, colour);
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
