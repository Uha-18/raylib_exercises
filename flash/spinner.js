const r = require("raylib");

function setup() {
    const windowWidth = 800;
    const windowHeight = 800;

    const world = {
        angle: 0,
        radius: 0,
        points: [],
        cf: 0,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "spinner");
    r.SetTargetFPS(50);
    return world;
}

function update(world) {
    world.angle = world.angle + 0.1;
    world.radius = world.radius + 0.4;

    let x = 400 + world.radius * Math.cos(world.angle);
    let y = 400 + world.radius * Math.sin(world.angle);

    world.points.push({ x: x, y: y });
}

function draw(world) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    for (let i = 0; i < world.points.length; i++) {
        let point = world.points[i];

        r.DrawCircle(point.x, point.y, 3, r.RED);
    }

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    world.cf++;
    r.CloseWindow();
}

main();
