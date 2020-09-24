function checkForRocksAndEnemies(rocks, enemy) {
  enemy.x -= speed;
  rocks[0].x -= speed * 1.5;
  rocks[1].x -= speed * 2.5;
  rocks[2].x -= speed * 3;

  if (enemy.x < -60) {
    enemy.x = enemy.x = app.view.width + 10;
    enemy.y =
      app.view.height / Math.floor(Math.random() * 6) +
      1 -
      100 +
      Math.floor(Math.random() * 31) +
      50;
  }
  if (rocks[0].x < -60) {
    rocks[0].x = rocks[0].x = app.view.width + 10;
    rocks[0].y =
      app.view.height / Math.floor(Math.random() * 6) +
      1 -
      100 +
      Math.floor(Math.random() * 31) +
      50;
  }
  if (rocks[1].x < -60) {
    rocks[1].x = rocks[1].x = app.view.width + 10;
    rocks[1].y =
      app.view.height / Math.floor(Math.random() * 6) +
      1 -
      100 +
      Math.floor(Math.random() * 31) +
      50;
  }
  if (rocks[2].x < -60) {
    rocks[2].x = rocks[2].x = app.view.width + 10;
    rocks[2].y =
      app.view.height / Math.floor(Math.random() * 6) +
      1 -
      100 +
      Math.floor(Math.random() * 31) +
      50;
  }
}

function checkForContact(player, bullets, rocks, enemy, keys) {
  for (let i = 0; i < bullets.length; i++) {
    if (intersect(player, bullets[i])) {
      location.reload();
    }
  }

  if (
    intersect(player, enemy) ||
    intersect(player, rocks[1]) ||
    intersect(player, rocks[0]) ||
    intersect(player, rocks[2])
  )
    location.reload();
  else {
    if (keys["38"]) player.y -= 5;
    if (keys["40"]) player.y += 5;
    if (keys["39"]) player.x += 5;
    if (keys["37"]) player.x -= 5;
  }
}

function intersect(a, b) {
  let aBox = a.getBounds();
  let bBox = b.getBounds();

  return (
    aBox.x + aBox.width > bBox.x &&
    aBox.x < bBox.x + bBox.width &&
    aBox.y + aBox.height > bBox.y &&
    aBox.y < bBox.height + bBox.y
  );
}
