const r = require("raylib");

function setup() {
    const w = { windowWidth: 400, windowHeight: 600, FPS: 50 };
    w.palette = { 0: r.BLUE, 1: r.RED };
    const n = 500;
    w.data = random(n);
    w.gap = 10;
    w.scale = calcScale(w);
    w.Width = w.windowWidth / w.data.length;

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

function calcY(w, i) {
    return w.windowHeight - w.data[i] * w.scale;
}

function calcX(w, i) {
    return i * w.Width + w.gap / 2;
}

function isPeak(array, i) {
    if (i === 0) return true;
    else if (i === array.length - 1) return true;
    else if (array[i] > array[i + 1] && array[i] > array[i - 1]) return true;
    return false;
}

function drawCircle(w) {
    let prevX = 0;
    let prevY = 0;
    for (let i = 0; i < w.data.length; i++) {
        const x = calcX(w, i);
        const y = calcY(w, i);
        if (prevX !== 0 && prevY !== 0) {
            r.DrawLine(prevX, prevY, x, y, r.BLACK);
        }
        prevX = x;
        prevY = y;
        if (isPeak(w.data, i)) {
            r.DrawCircle(x, y, 3, w.palette[1]);
        }
    }
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
    r.DrawLine(0, avgY, w.windowWidth, avgY, w.palette[1]);
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    drawCircle(w);
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
