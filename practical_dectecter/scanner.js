const r = require("raylib");

function scanner(x, y, width, height, start, end, speed) {
    return { x, y, width, height, start, end, speed };
}

function updateX(scanner) {
    scanner.speed = changeDirection(
        scanner.x,
        scanner.width,
        scanner.end,
        scanner.start,
        scanner.speed,
    );
    scanner.x += scanner.speed;
}

function updateY(scanner) {
    scanner.speed = changeDirection(
        scanner.y,
        scanner.height,
        scanner.end,
        scanner.start,
        scanner.speed,
    );
    scanner.y += scanner.speed;
}

function isOutOfBoundaries(x, width, end, start) {
    return x + width > end || x < start;
}

function changeDirection(x, width, end, start, speed) {
    return isOutOfBoundaries(x, width, end, start, speed) ? -speed : speed;
}

function chooseColourX(s, p) {
    return s.x + s.width >= p.start && s.x <= p.end;
}

function chooseColourY(s, p) {
    return s.y + s.height >= p.start && s.y <= p.end;
}

function drawX(scanner, partical) {
    colour = chooseColourX(scanner, partical) ? r.RED : r.WHITE;
    return r.DrawRectangleRec(scanner, colour);
}

function drawY(scanner, partical) {
    colour = chooseColourY(scanner, partical) ? r.RED : r.WHITE;
    return r.DrawRectangleRec(scanner, colour);
}

module.exports = {
    scanner,
    updateX,
    updateY,
    drawX,
    drawY,
};
