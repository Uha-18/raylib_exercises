const r = require("raylib");

function isOutOfBoundaries(startX, end, width, start_boundary) {
    return startX + width > end || startX < start_boundary;
}

function changeDirection(startX, end, width, start_boundary, speed) {
    return isOutOfBoundaries(startX, end, width, start_boundary)
        ? -speed
        : speed;
}

function choose_colour(start1, end1, start2, end2) {
    return end1 > start2 && start1 <= end2 ? r.RED : r.WHITE;
}

module.exports = {
    isOutOfBoundaries,
    changeDirection,
    choose_colour,
};
