const r = require("raylib");
const g = require("./geometry");
const s1 = require("./Scanner1");
const s2 = require("./Scanner2");
const s3 = require("./scanner3");

const FPS = 100;
const windowWidth = 900;
const windowHeight = 700;

let movement1 = 1;
let movement2 = 2;
let movement3 = 3;

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
    movement1 = g.changeDirection(s1.X, half, s1.width, 0, movement1);
    s1.X += movement1;

    movement2 = g.changeDirection(s2.X, windowWidth, s2.width, half, movement2);
    s2.X += movement2;

    movement3 = g.changeDirection(s3.Y, windowHeight, s3.height, 0, movement3);
    s3.Y += movement3;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    vertical_drawRange(s1.particalX, s1.particalwidth);
    vertical_drawRange(s2.particalX, s2.particalwidth);
    horizontal_drawRange(s3.particalY, s3.particalheight);

    colour = g.choose_colour(
        s1.X,
        s1.X + s1.width,
        s1.particalX,
        s1.particalX + s1.particalwidth,
    );
    r.DrawRectangle(s1.X, s1.Y, s1.width, s1.height, colour);

    colour = g.choose_colour(
        s2.X,
        s2.X + s2.width,
        s2.particalX,
        s2.particalX + s2.particalwidth,
    );
    r.DrawRectangle(s2.X, s2.Y, s2.width, s2.height, colour);

    colour = g.choose_colour(
        s3.Y,
        s3.Y + s3.height,
        s3.particalY,
        s3.particalY + s3.particalheight,
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
