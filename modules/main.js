// const numbers = require("./numbers");

// console.log(numbers.double(5));
// console.log(numbers.square(5));

// const geometry = require("./geometry");

// const x = geometry.calcOffset(400, 200);

// console.log(x);


// const sketch = require("./sketch") ;
// console.log(typeof sketch);
function loop(){
while (sketch.running()) {
  sketch.update();
  sketch.draw();
}
}
function main(){
    sketch.setup();
    loop() ;
    sketch.teardown();
}
main() ;