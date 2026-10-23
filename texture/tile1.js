const r = require("raylib");
const t = require("./tilePatterns");

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(800, 800, "tile");
  r.SetTargetFPS(50);

  const world = {};
  world.source = [
    { x: 0, y: 0, width: 30, height: 30 },
    { x: 0, y: 0, width: -30, height: -30 },
    { x: 0, y: 0, width: -30, height: -30 },
  ];
  world.tile = [t.tile1, t.tile2, t.tile3, t.tile4, t.tile5, t.tile6];

  return world;
}

function position(world, target) {
  let { x, y } = world.tile[0](target, world);
  return { x, y };
}

function draw(world, target) {
  r.BeginDrawing();
  r.ClearBackground(r.DARKBLUE);
  position(world, target);
  r.EndDrawing();
}

function texture() {
  const target = r.LoadRenderTexture(100, 100);
  r.BeginTextureMode(target);
  r.ClearBackground(r.DARKBLUE);

  r.DrawTriangle(
    { x: 100, y: 100 },
    { x: 100, y: 0 },
    { x: 0, y: 100 },
    r.WHITE,
  );

  r.EndTextureMode();

  return target;
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
