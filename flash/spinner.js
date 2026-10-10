const r = require("raylib");

function setup() {
    const windowWidth = 800;
    const windowHeight = 800;

    const world = {};

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "greece");
    r.SetTargetFPS(8);
    // return world;
}
function positionObject(x, y) {
    return { x, y };
}

const radius = 300;
function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    const position = positionObject(400, 400);
    r.DrawCircle(position.x, position.y, radius, r.RED);
    r.DrawRing(position, radius + 3, radius, -90, 90, 30, r.GRAY);

    // for (let row = 0; row < world.noOfCells; row++) {
    //     let y = row * world.cellHeight;

    //     for (let col = 0; col < world.noOfCells; col++) {
    //         const x = col * world.cellWidth;
    //         const colour = chooseColour(row, col, world);

    //         r.DrawRectangle(x, y, world.cellWidth, world.cellHeight, colour);
    //     }
    // }
    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
        // world.offset = world.offset + 1;
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}

main();
