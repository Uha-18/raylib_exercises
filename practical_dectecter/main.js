const s = require("./sketch");

function loop(world) {
    while (s.running(world)) {
        s.draw(world);
        s.update(world);
    }
}
function main() {
    const world = {};
    s.setup(world);
    loop(world);
    s.teardown();
}
main();
