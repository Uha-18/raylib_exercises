const r = require("raylib");

function points() {
    const centerX = 400;
    const centerY = 300;
    const baseRadius = 200;
    const amplitude = 100;
    const frequency = 40;
    const numPoints = 50;
    let prevX = 0;
    let prevY = 0;

    for (let i = 0; i <= numPoints; i++) {
        let angle = (i * (Math.PI * 2)) / numPoints;

        let radius = baseRadius + amplitude * Math.sin(frequency * angle);

        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        r.DrawCircle(x, y, 3, r.RED);
        if (prevX !== 0 && prevY !== 0) {
            r.DrawLine(prevX, prevY, x, y, r.BLACK);
        }
        prevX = x;
        prevY = y;
    }
}

function setup() {
    const windowWidth = 800;
    const windowHeight = 600;
    rec = { x: 0, y: 0 };
    const world = {
        angle: 0,
        radius: 0,
        // points: [],
        cf: 0,
        rec: { x: 0, y: 0, width: 800, height: 600 },
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "sinewave");
    r.SetTargetFPS(8);
    return world;
}
function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    points();
    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        // update(world);
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
