const r = require("raylib");
const rect = { x: 0, y: 0, width: 20, height: 20 };

const windowWidth = 700;
const windowHeight = 500;

let movement = rect.width;

function isOutOfBounds() {
    return rect.x >= windowWidth || rect.x < 0;
}

function vertical(rect) {
    return (rect.y = rect.y + 2 * rect.height);
}
function changeDirection(rect, windowWidth, movement) {
    return isOutOfBounds(rect.x, rect.width, windowWidth, movement)
        ? (vertical(rect), -movement)
        : movement;
}

function running() {
    return !r.WindowShouldClose();
}
function update() {
    movement = changeDirection(rect, windowWidth, movement);
    rect.x += movement;
}
function setup() {
    r.InitWindow(windowWidth, windowHeight, "objects");
    r.SetTargetFPS(5);
}

function draw() {
    r.BeginDrawing();
    // r.ClearBackground(r.BLACK);
    r.DrawRectangleRec(rect, r.WHITE);
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
