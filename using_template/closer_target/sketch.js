const r = require("raylib");

const g = require("./geometry");

const windowWidth = 900;
const windowHeight = 700;

const x1 = 200;
const y1 = 100;
const r1 = 30;

const x2 = 500;
const y2 = 500;
const r2 = 30;

const x3 = 260;
const y3 = 500;
const r3 = 30;

function square(x) {
    return x ** 2
}

function distance1() {
    const distance = square(x2 - x1) + square(y2 - y1);
    return { distance };
}

function distance2() {
    const distance = square(x3 - x1) + square(y3 - y1);
    return { distance };
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Raylib");
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawCircle(x1, y1, r1, r.RED);

    r.DrawCircle(x2, y2, r2, r.BLUE);

    r.DrawCircle(x3, y3, r3, r.GREEN);

    if (distance1().distance < distance2().distance) {
        r.DrawLine(x1, y1, x2, y2, r.WHITE);
    } else {
        r.DrawLine(x1, y1, x3, y3, r.WHITE);
    }
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    draw,
    teardown,
};