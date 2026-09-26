const sketch = require("./sketch")
const g = require("./geometry")

function loop() {
  while (sketch.running()) {
    sketch.draw();
  }
}
function main() {
  sketch.setup();
  loop();
  sketch.teardown();
}
main()