const r = require("raylib");
const { wolverine } = require("./volvarine.js");

function setup() {
    const world = {};
    world.screen = { width: 800, height: 400 };
    world.bitmap = wolverine;

    world.pixel = {
        width: world.screen.width / 2 / world.bitmap.width,
        height: world.screen.height / world.bitmap.height,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    drawScreen(world.screen);
    r.SetTargetFPS(50);

    return world;
}

function drawScreen(screen) {
    r.InitWindow(screen.width, screen.height, "rotator");
}

function findPixel(pixel, i, j, start) {
    const x = j * pixel.width + start;
    const y = i * pixel.height;
    const pixel1 = {
        x,
        y,
        width: pixel.width,
        height: pixel.height,
    };
    return pixel1;
}

function drawPixel(i, j, bitmap, pixel, start) {
    const point = bitmap.points[i][j];
    const colour = findColour(point);
    const pixel1 = findPixel(pixel, i, j, start);

    r.DrawRectangleRec(pixel1, colour);
}

function drawBitmap(bitmap, pixel, start) {
    for (let i = 0; i < bitmap.height; i++) {
        for (let j = 0; j < bitmap.width; j++) {
            drawPixel(i, j, bitmap, pixel, start);
        }
    }
}

function findColour(point) {
    return { r: point, g: point, b: point, a: 255 };
}

function newBitmap(bitmap) {
    const invertedBitmap = [];

    for (let row = 0; row < bitmap.height; row++) {
        const newRow = [];

        for (let col = 0; col < bitmap.width; col++) {
            newRow.unshift(bitmap.points[col][row]);
        }

        invertedBitmap.push(newRow);
    }

    return {
        width: bitmap.width,
        height: bitmap.height,
        points: invertedBitmap,
    };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawBitmap(world.bitmap, world.pixel, 0);

    const newMap = newBitmap(world.bitmap);
    drawBitmap(newMap, world.pixel, world.screen.width / 2);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}
function teardown() {
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
