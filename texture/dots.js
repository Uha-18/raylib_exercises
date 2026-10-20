const r = require("raylib");
function setup() {
  r.InitWindow(800, 800, "tile");
  r.SetTargetFPS(50);
  r.SetTraceLogLevel(r.LOG_NONE);

  const world = {};
  world.source = [
    { x: 0, y: 0, width: 200, height: 200 },
    { x: 0, y: 0, width: 200, height: -200 },
  ];

  return world;
}

function draw(world, target) {
  r.BeginDrawing();
  r.ClearBackground(r.GRAY);
  r.DrawTexture(target.target1.texture, 0, 0, r.WHITE);
  r.DrawTexture(target.target2.texture, 210, 0, r.WHITE);
  r.DrawTexture(target.target3.texture, 420, 0, r.WHITE);
  r.DrawTexture(target.target5.texture, 210, 210, r.WHITE);
  r.DrawTexture(target.target6.texture, 420, 210, r.WHITE);
  r.DrawTexture(target.target7.texture, 0, 420, r.WHITE);

  r.EndDrawing();
}

function texture() {
  //horizontal line
  const target1 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target1);
  r.ClearBackground(r.DARKBLUE);

  for (let x = 3; x <= 200; x += 30) {
    for (let y = 3; y <= 200; y += 10) {
      r.DrawCircle(x, y, 3, r.WHITE);
    }
  }
  r.EndTextureMode();
  //vertical lines
  const target2 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target2);
  r.ClearBackground(r.DARKBLUE);

  for (let x = 3; x <= 200; x += 10) {
    for (let y = 3; y <= 200; y += 30) {
      r.DrawCircle(x, y, 3, r.WHITE);
    }
  }
  r.EndTextureMode();
  //checker dots
  const target3 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target3);
  r.ClearBackground(r.DARKBLUE);

  let startX3 = 10;
  let startY3 = 10;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      startY3 = i * 30 + 5;
      startX3 = j * 30 + 5;
      if ((i + j) % 2 === 0) r.DrawCircle(startX3, startY3, 3, r.WHITE);
    }
  }

  r.EndTextureMode();

  const target5 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target5);
  r.ClearBackground(r.DARKBLUE);

  for (let y = 10; y <= 200; y += 30) {
    for (let x = 10; x <= 200; x += 30) {
      if ((y + x) % 2 === 0) r.DrawCircle(x, y, 3, r.WHITE);
    }
  }

  r.EndTextureMode();

  const target6 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target6);
  r.ClearBackground(r.DARKBLUE);

  let startX6 = 5;
  let startY6 = 5;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      startY6 = i * 20 + 5;
      startX6 = j * 20 + 5;
      if (i % 3 !== 2 && (i + j) % 3 === 1) {
        r.DrawCircle(startX6, startY6, 3, r.WHITE);
      }
    }
  }
  r.EndTextureMode();

  const target7 = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target7);
  r.ClearBackground(r.DARKBLUE);

  const gridSize = 10;
  const gap = 18;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if ((col + row) % 5 === 0 || (col + row) % 5 === 1) {
        r.DrawCircle(15 + col * gap, 15 + row * gap, 4, r.WHITE);
      }
    }
  }
  r.EndTextureMode();
  return { target1, target2, target3, target5, target6, target7 };
}

function loop(world) {
  target = texture();
  while (!r.WindowShouldClose()) {
    draw(world, target);
  }
}
function teardown() {
  r.CloseWindow();
}
function main() {
  const world = setup();
  loop(world);
  teardown();
}
main();
