const r = require("raylib");

function setup() {
    const world = {};
    world.windowWidth = 800;
    world.windowHeight = 600;
    world.FPS = 5;
    world.gap = 10;
    world.width = 70;
    world.innerRadius = 40;
    world.outerRadius = 50;
    world.noOfCol = world.windowWidth / world.outerRadius;
    world.noOfRows = world.windowHeight / world.outerRadius;

    world.height = 70;
    world.colour = r.GOLD;
    world.cf = 0;

    r.InitWindow(world.windowWidth, world.windowHeight, "ring experiments");
    r.SetTargetFPS(world.FPS);
    return world;
}

function chooseColour(i, j, world) {
    return (2 * i + j + world.cf) % 2 === 0 ? r.RED : r.GOLD;
}
function chooseRings(i, j, ring, world) {
    if ((i + j + world.cf) % 2 === 0) {
        return ring1(ring, world);
    }
    return ring2(ring, world);
}

function ringPosition(x, y) {
    return { x, y };
}
function ring1(ring, world) {
    r.DrawRing(
        ring,
        world.innerRadius,
        world.outerRadius,
        270,
        90,
        30,
        world.colour,
    );
}
function ring2(ring, world) {
    r.DrawRing(
        ring,
        world.innerRadius,
        world.outerRadius,
        -90,
        90,
        30,
        world.colour,
    );
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    const ring = ringPosition(50, 50);
    const thickness = world.outerRadius - world.innerRadius;
    for (let i = 1; i <= world.noOfRows; i++) {
        for (let j = 1; j <= world.noOfCol; j++) {
            // world.colour = chooseColour(i, j, world);
            chooseRings(i, j, ring, world);
            ring.x = ring.x + 2 * world.innerRadius + thickness;
        }
        ring.x = world.innerRadius;
        ring.y = ring.y + 2 * world.innerRadius + thickness;
    }
    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
        world.cf++;
    }
}

function main() {
    const world = setup();
    loop(world);
}
main();
