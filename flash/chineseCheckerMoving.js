const r = require("raylib");

function setup() {
    const windowWidth = 800;
    const windowHeight = 800;

    const world = {};
    world.noOfCells = 8;
    world.cellWidth = windowWidth / world.noOfCells;
    world.cellHeight = windowHeight / world.noOfCells;
    world.offset = 0;

    r.InitWindow(windowWidth, windowHeight, "chinese checker");
    r.SetTargetFPS(7);
    return world;
}

function chooseColour(row, col, world) {
    return (row + col + world.offset) % 3 === 1 ? r.RED : r.GOLD;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    for (let row = 0; row < world.noOfCells; row++) {
        let y = row * world.cellHeight;

        for (let col = 0; col < world.noOfCells; col++) {
            let x = col * world.cellWidth;
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
        world.offset = (world.offset + 1) % 3;
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}

main();
