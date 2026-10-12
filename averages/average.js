const r = require("raylib");

function setup() {
    const w = { windowWidth: 600, windowHeight: 600, FPS: 50 };
    w.palette = { 0: r.BLUE };
    w.data = [62, 80, 56, 50, 70, 36, 70, 60, 43, 40];
    // const n = 100;
    // w.data = random(n);
    w.gap = 10;
    w.scale = calcScale(w);
    w.barWidth = w.windowWidth / w.data.length;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.windowWidth, w.windowHeight, "average");
    r.SetTargetFPS(w.FPS);

    return w;
}

function random(n) {
    const data = [];
    for (i = 0; i < n; i++) {
        data.push(Math.random() * n + 1);
    }
    return data;
}

function calcScale(w) {
    return (w.windowHeight * 0.9) / findMax(w.data);
}

function findMax(data) {
    let max = data[0];
    for (const num of data) {
        if (max < num) max = num;
    }
    return max;
}

function calcHeight(w, y) {
    return w.windowHeight - y;
}

function calcWidth(w) {
    return w.barWidth - w.gap;
}

function calcY(w, i) {
    return w.windowHeight - w.data[i] * w.scale;
}

function calcX(w, i) {
    return i * w.barWidth + w.gap / 2;
}

function drawBar(w, i) {
    const x = calcX(w, i);
    const y = calcY(w, i);
    const width = calcWidth(w);
    const height = calcHeight(w, y);

    const bar = { x, y, width, height };
    r.DrawRectangleRec(bar, w.palette[0]);
}

function sum(array) {
    let total = 0;
    for (const num of array) {
        total += num;
    }
    return total;
}

function avg(array) {
    return sum(array) / array.length;
}

function drawAvgLine(w) {
    const avgY = w.windowHeight - avg(w.data) * w.scale;
    r.DrawLine(0, avgY, w.windowWidth, avgY, r.RED);
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    for (let i = 0; i < w.data.length; i++) {
        drawBar(w, i);
    }
    drawAvgLine(w);
    r.EndDrawing();
}

function loop(w) {
    while (!r.WindowShouldClose()) {
        draw(w);
    }
}

function main() {
    const w = setup();
    loop(w);
}
main();
