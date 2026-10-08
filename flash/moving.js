const r = require("raylib");

function setup() {
    const windowWidth = 800;
    const windowHeight = 800;

    const world = {};
    world.noOfCells = 10;
    world.cellWidth = windowWidth / world.noOfCells;
    world.cellHeight = windowHeight / world.noOfCells;
    world.offset = 0;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "greece");
    r.SetTargetFPS(8);
    return world;
}

function chooseColour(row, col, world) {
    if (row % 3 === 0) {
        return (colour = r.BLUE);
    }
    return (col + row * 2 + world.offset) % 3 === 0 ? r.WHITE : r.BLUE;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let row = 0; row < world.noOfCells; row++) {
        let y = row * world.cellHeight;

        for (let col = 0; col < world.noOfCells; col++) {
            const x = col * world.cellWidth;
            const colour = chooseColour(row, col, world);

            r.DrawRectangle(x, y, world.cellWidth, world.cellHeight, colour);
        }
    }
    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
        world.offset = world.offset + 1;
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}

main();
