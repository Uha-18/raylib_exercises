const r = require("raylib");

function setup() {
    const windowWidth = 400;
    const windowHeight = 400;
    const FPS = 50;
    const world = {};
    world.centreX = 200;
    world.centreY = 200;
    world.radius = 150;

    r.InitWindow(windowWidth, windowHeight, "polygon");
    r.SetTargetFPS(FPS);

    return world;
}

function points(world) {
    const noOfPoints = 7;
    const radians = (2 * Math.PI) / noOfPoints;
    let prevX = 0;
    let prevY = 0;

    for (let i = 0; i <= noOfPoints; i++) {
        const angle = i * radians;
        const x = world.centreX + world.radius * Math.cos(angle);
        const y = world.centreY + world.radius * Math.sin(angle);
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
    r.DrawCircleLines(world.centreX, world.centreY, world.radius, r.BLUE);
    points(world);

    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        // update();
        draw(world);
    }
}
function main() {
    const world = setup();
    loop(world);
}
main();
