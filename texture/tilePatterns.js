const r = require("raylib");

function tile1(target, world) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      x = 30 * j;
      y = 30 * i;
      r.DrawTextureRec(target.texture, world.source[i % 2], { x, y }, r.WHITE);
    }
  }
  return { x, y };
}

function tile2(target, world) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      x = 30 * j;
      y = 30 * i;
      r.DrawTextureRec(target.texture, world.source[j % 2], { x, y }, r.WHITE);
    }
  }
  return { x, y };
}

function tile3(target, world) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      x = 30 * j;
      y = 30 * i;
      r.DrawTextureRec(
        target.texture,
        world.source[(i + j) % 2],
        { x, y },
        r.WHITE,
      );
    }
  }
  return { x, y };
}

function tile4(target, world) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      x = 30 * j;
      y = 30 * i;
      r.DrawTextureRec(
        target.texture,
        world.source[((i + j) * 2) % 3],
        { x, y },
        r.WHITE,
      );
    }
  }
  return { x, y };
}

function tile5(target, world) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      x = 30 * j;
      y = 30 * i;
      if (i % 2 === 0) {
        r.DrawTextureRec(target.texture, world.source[0], { x, y }, r.WHITE);
      } else {
        r.DrawTextureRec(
          target.texture,
          world.source[j % 2],
          { x, y },
          r.WHITE,
        );
      }
    }
  }
  return { x, y };
}

function tile6(target, world) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      x = 30 * j;
      y = 30 * i;
      if (i % 3 === 0 || i % 3 === 2) {
        r.DrawTextureRec(target.texture, world.source[0], { x, y }, r.WHITE);
      } else if (j % 2 === 1) {
        source = world.source[1];
      }
      r.DrawTextureRec(
        target.texture,
        world.source[(i + j) % 3],
        { x, y },
        r.WHITE,
      );
    }
  }
  return { x, y };
}

module.exports = {
  tile1,
  tile2,
  tile3,
  tile4,
  tile5,
  tile6,
};
