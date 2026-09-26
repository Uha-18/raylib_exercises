const s = require("./sketch");

function loop() {
  while (s.running()) {
    s.draw();
  }
}
function main() {
  s.setup();
  loop();
  s.teardown();
}
main();