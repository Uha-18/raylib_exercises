const r = require("raylib");
const s = require("./scanner");
const s1 = require("./Scanner1");
const s2 = require("./Scanner2");
const s3 = require("./scanner3");
const S = require("./screenDimensions");

let movement1 = 1;
let movement2 = 2;
let movement3 = 3;

const partical_X1 = S.windowWidth / 5;
const partical_width1 = 100;

const partical_X2 = S.windowWidth / 1.2;
const partical_width2 = 20;

const partical_Y3 = S.windowHeight / 4;
const partical_height3 = 40;

const half = S.windowWidth / 2;

let colour = r.WHITE;

function drawVerticalRange(start, width) {
    r.DrawRectangle(start, 0, width, S.windowHeight, r.BLUE);
}

function drawHorizontalRange(start, height) {
    r.DrawRectangle(0, start, S.windowWidth, height, r.BLUE);
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(S.windowWidth, S.windowHeight, "partical_detector");
    r.SetTargetFPS(S.FPS);
}

function update() {
    movement1 = s.changeDirection(s1.X, half, s1.width, 0, movement1);
    s1.X += movement1;

    movement2 = s.changeDirection(
        s2.X,
        S.windowWidth,
        s2.width,
        half,
        movement2,
    );
    s2.X += movement2;

    movement3 = s.changeDirection(
        s3.Y,
        S.windowHeight,
        s3.height,
        0,
        movement3,
    );
    s3.Y += movement3;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawVerticalRange(partical_X1, partical_width1);
    drawVerticalRange(partical_X2, partical_width2);
    drawHorizontalRange(partical_Y3, partical_height3);

    colour = s.choose_colour(
        s1.X,
        s1.X + s1.width,
        partical_X1,
        partical_X1 + partical_width1,
    )
        ? r.RED
        : r.WHITE;

    r.DrawRectangle(s1.X, s1.Y, s1.width, s1.height, colour);

    colour = s.choose_colour(
        s2.X,
        s2.X + s2.width,
        partical_X2,
        partical_X2 + partical_width2,
    )
        ? r.RED
        : r.WHITE;
    r.DrawRectangle(s2.X, s2.Y, s2.width, s2.height, colour);

    colour = s.choose_colour(
        s3.Y,
        s3.Y + s3.height,
        partical_Y3,
        partical_Y3 + partical_height3,
    )
        ? r.RED
        : r.WHITE;
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
