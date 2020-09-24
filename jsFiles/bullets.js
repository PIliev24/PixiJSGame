function fireBullet(bullets) {
  let bullet = createBullet();
  bullets.push(bullet);
}

function createBullet() {
  let bullet = new PIXI.Sprite.from("images/bullet.png");
  bullet.anchor.set(0.5);
  bullet.x = enemy.x;
  bullet.y = enemy.y + 25;
  bullet.speed = speed + 2;
  app.stage.addChild(bullet);
  return bullet;
}

setFireBulletInterval = (bullets) => {
  setInterval(function () {
    fireBullet(bullets);
    document.getElementById("timer").innerText = meters;
    meters += 10;
  }, 500);
};

function updateBullets(bullets) {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].position.x -= bullets[i].speed;

    if (bullets[i].x < -60) bullets[i].dead = true;
  }
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].dead === true)
      app.stage.removeChild(bullets[i]), bullets.splice(i, 1);
  }
}
