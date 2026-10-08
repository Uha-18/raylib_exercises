const r = require("raylib");

function partical(x, y, width, height, start, end) {
    return { x: x, y: y, width: width, height: height, start: start, end: end };
}

function drawVerticalRange(P) {
    r.DrawRectangleRec(P, r.BLUE);
}

function drawHorizontalRange(P) {
    r.DrawRectangleRec(P, r.BLUE);
}

module.exports = {
    partical,
    drawVerticalRange,
    drawHorizontalRange,
};
