const r = require("raylib");
const g = require("./geometry");

const windowWidth = 800;
const windowHeight = 500;

const x1 = 100;
const y1 = 200;
const r1 = 30;

const x2 = 160;
const y2 = 200;
const r2 = 40;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "centreskeleton");
    r.SetTargetFPS(60);
}

// function sqr(x) {
//     return x * x;
// }

// function distance(x1, y1, x2, y2) {
//     const dx = x2 - x1;
//     const dy = y2 - y1;
//     return (sqr(dx) + sqr(dy)) ** 0.5;
// }

function draw() {
    const colour = g.distance(x1, y1, x2, y2) <= (r1 + r2) ? r.RED : r.BLACK;

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(x1, y1, r1, colour);
    r.DrawCircle(x2, y2, r2, colour);
    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose()
}

function teardown() {
    return r.CloseWindow
}

module.exports = {
    setup,
    draw,
    running,
    teardown,
} 
