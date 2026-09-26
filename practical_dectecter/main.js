const s = require("./sketch");

function loop() {
  while (s.running()) {
    s.draw();
    s.update();
  }
}
function main() {
  s.setup();
  loop();
  s.teardown();
}
main();