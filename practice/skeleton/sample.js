const r = require("raylib")

const windowWidth = 800;
const windowHeight = 500;

const CIRCLE_X = 400;
const CIRCLE_Y = 250;
const RADIUS = 150;

const CENTRE_X = windowWidth / 2;
const CENTRE_Y = windowHeight / 2;
const START_Y = CENTRE_Y - RADIUS;
const END_Y = START_Y + RADIUS * 2;

const x = CIRCLE_X + (RADIUS) * Math.sin(30);
const y = CIRCLE_Y + (RADIUS) * Math.cos(30);

function setup() {
    r.InitWindow(windowWidth, windowHeight, "spinner");
    r.SetTargetFPS(60);

}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    // r.DrawCircle(400, 250, 150, r.MAROON);
    r.DrawCircle(CIRCLE_X, CIRCLE_Y, RADIUS, r.WHITE);
    r.DrawLine(CIRCLE_X, CIRCLE_Y, x, y, r.BLACK);


    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw()
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}
main()