const r = require("raylib");

function setup() {
    const world = {};
    world.windowWidth = 600;
    world.windowHeight = 400;
    world.frequency = 0.03;
    world.centreX = 50;
    world.centreY = 200;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.windowWidth, world.windowHeight, "sinewave");
    r.SetTargetFPS(8);

    return world;
}

function axisX(x1, y1, x2, y2) {
    r.DrawLine(x1, y1, x2, y2, r.BLACK);
}

function axisY(x1, y1, x2, y2) {
    r.DrawLine(x1, y1, x2, y2, r.BLACK);
}

function sine(world) {
    const amplitude = 80;
    for (let x = world.centreX; x < 800; x++) {
        const angle = (x - world.centreX) * world.frequency;
        let y = world.centreY - amplitude * Math.sin(angle);

        r.DrawCircle(x, y, 2, r.BLUE);
    }
}

function cosine(world) {
    const amplitude = 80;
    for (let x = world.centreX; x < 800; x++) {
        const angle = (x - world.centreX) * world.frequency;
        const y = world.centreY - amplitude * Math.cos(angle);

        r.DrawCircle(x, y, 2, r.RED);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const startX = world.centreX;
    const startY = world.windowHeight / 9;
    const endX = world.centreX;
    const endY = world.windowHeight / 1.15;

    r.DrawCircle(world.centreX, world.centreY, 3, r.RED);

    axisX(world.centreX, world.centreY, world.windowWidth, world.centreY);
    axisY(startX, startY, endX, endY);

    sine(world);
    cosine(world);

    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        // world.cf++;
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}

main();
