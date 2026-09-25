const r = require("raylib")

let startX = 250;
let startY = 300;
let endX = 500;
let endY = 300;

function setup() {
    r.InitWindow(800, 400, "spinner");
    r.SetTargetFPS(60);

}
function update() {
    startX = endX;
    startY = endY;
}

function Draw() {

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawLine(startX, startY, endX, endY, r.BLACK);
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        Draw()
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}
main()