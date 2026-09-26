const s = require("sketch");

function loop() {
  while (sketch.running()) {
    s.update();
    s.draw();
  }
}
function main() {
  s.setup();
  loop();
  s.teardown();
}
main();