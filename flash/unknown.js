const r = require("raylib");

function setup() {
  const windowWidth = 800;
  const windowHeight = 600;
  rec = { x: 0, y: 0 };
  const world = {
    angle: 0,
    radius: 0,
    cf: 0,
    rec: { x: 0, y: 0, width: 800, height: 600 },
  };

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "sinewave");
  r.SetTargetFPS(10);
  return world;
}

function points() {
  const centerX = 400;
  const centerY = 300;
  const baseRadius = 200;
  const amplitude = 70;
  const frequency = 5;
  const numPoints = 500;
  let prevX = 0;
  let prevY = 0;

  for (let i = 0; i <= numPoints; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = baseRadius * Math.sqrt(Math.random());
    let radius = distance + amplitude * Math.sin(frequency * angle);

    let x = centerX + radius * Math.cos(angle);
    let y = centerY + radius * Math.sin(angle);
    r.DrawCircle(x, y, 5, {
      r: Math.random() * 255,
      g: Math.random() * 255,
      b: Math.random() * 255,
      a: Math.random() * 255,
    });
    // if (prevX !== 0 && prevY !== 0) {
    //   r.DrawLineEx({ x: prevX, y: prevY }, { x, y }, 3, {
    //     r: Math.random() * 255,
    //     g: Math.random() * 255,
    //     b: Math.random() * 255,
    //     a: Math.random() * 255,
    //   });
    // }
    // prevX = x;
    // prevY = y;
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  points();
  r.EndDrawing();
}
function loop(world) {
  while (!r.WindowShouldClose()) {
    // update(world);
    // world.cf++;
    draw(world);
  }
}

function main() {
  const world = setup();
  loop(world);
  r.CloseWindow();
}

main();
