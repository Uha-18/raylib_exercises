const r = require("raylib");

function scanner(x, y, width, height, start, end, speed) {
    return { x, y, width, height, start, end, speed };
}

function update_x(scanner) {
    scanner.speed = changeDirection(
        scanner.x,
        scanner.width,
        scanner.end,
        scanner.start,
        scanner.speed,
    );
    scanner.x += scanner.speed;
}

function update_y(scanner) {
    scanner.speed = changeDirection(
        scanner.y,
        scanner.height,
        scanner.end,
        scanner.start,
        scanner.speed,
    );
    scanner.y += scanner.speed;
}

function isOutOfBoundaries(x, width, end, start, speed) {
    return x + width > end || x < start;
}

function changeDirection(x, width, end, start, speed) {
    return isOutOfBoundaries(x, width, end, start, speed) ? -speed : speed;
}

function choose_colour_x(s, p) {
    return s.x + s.width >= p.start && s.x <= p.end;
}

function choose_colour_y(s, p) {
    return s.y + s.height >= p.start && s.y <= p.end;
}

function draw_x(scanner, partical) {
    colour = choose_colour_x(scanner, partical) ? r.RED : r.WHITE;
    return r.DrawRectangleRec(scanner, colour);
}

function draw_y(scanner, partical) {
    colour = choose_colour_y(scanner, partical) ? r.RED : r.WHITE;
    return r.DrawRectangleRec(scanner, colour);
}

module.exports = {
    scanner,
    update_x,
    update_y,
    draw_x,
    draw_y,
};
