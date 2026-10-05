const r = require("raylib");
const rectangle = {};
rectangle.rect1 = { x: 50, y: 50, width: 100, height: 100 };
rectangle.rect2 = { x: 200, y: 50, width: 100, height: 100 };
rectangle.rect3 = { x: 200, y: 200, width: 100, height: 100 };
rectangle.rect4 = { x: 50, y: 200, width: 100, height: 100 };

// function isOutOfBounds(rectangle) {
//     return rectangle.x >= windowWidth || rectangle.x < 0;
// }

// function drawRectangle(rectangle) {}

const colours = {};
colours.colour1 = { r: 255, g: 0, b: 0, a: 255 };
colours.colour2 = { r: 0, g: 0, b: 255, a: 100 };
colours.colour3 = { r: 0, g: 200, b: 0, a: 50 };
colours.colour4 = { r: 155, g: 250, b: 0, a: 210 };

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(700, 500, "flash");
    r.SetTargetFPS(50);
}

function update() {
    // rectangle.x = rectangle.x + rectangle.width
    colours.colour1.a -= 10;
    colours.colour1.r -= 10;
    colours.colour1.b += 10;
    colours.colour2.a -= 10;
    colours.colour2.b -= 10;
    colours.colour2.g -= 10;
    colours.colour2.r += 10;
    colours.colour3.a -= 10;
    colours.colour3.r += 10;
    colours.colour3.g += 10;
    colours.colour4.a -= 10;
    colours.colour4.r -= 10;
    colours.colour4.g += 10;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangleRec(rectangle.rect1, colours.colour1);
    r.DrawRectangleRec(rectangle.rect2, colours.colour2);
    r.DrawRectangleRec(rectangle.rect3, colours.colour3);
    r.DrawRectangleRec(rectangle.rect4, colours.colour4);
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
