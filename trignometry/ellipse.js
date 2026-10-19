const r = require("raylib");

function setup() {
    const windowWidth = 800;
    const windowHeight = 800;
    const FPS = 50;

    const world = {};
    world.centreX = 300;
    world.centreY = 200;
    world.horizontalRadius = 200;
    world.verticalRadius = 150;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "ellipse");
    r.SetTargetFPS(FPS);

    return world;
}

function points(world) {
    const noOfPoints = 50;
    const radians = (2 * Math.PI) / noOfPoints;
    let prevX = 0;
    let prevY = 0;

    for (let i = 0; i <= noOfPoints; i++) {
        const angle = i * radians;
        const x = world.centreX + 200 * Math.cos(angle);
        const y = world.centreY + 100 * Math.sin(angle);
        r.DrawCircle(x, y, 3, r.RED);

        if (prevX !== 0 && prevY !== 0) {
            r.DrawLine(prevX, prevY, x, y, r.BLACK);
        }
        prevX = x;
        prevY = y;
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    points(world);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();
