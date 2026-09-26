const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;

function width() {
    const x = windowWidth / 6;
    const width = windowWidth - x - x;
    return { x, width };
}

function height() {
    const y = windowHeight / 6;
    const height = windowHeight - y - y;
    return { y, height };
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
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(width().x, height().y, width().width, height().height, r.WHITE);
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

