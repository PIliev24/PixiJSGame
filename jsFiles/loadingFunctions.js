
function onLoadFunction(app) {
  app.loader.baseUrl = "assets";
  app.loader
    .add("mountainBg", "parallax_mountain_pack/layers/parallax-mountain-bg.png")
    .add(
      "mountainForegroundTrees",
      "parallax_mountain_pack/layers/parallax-mountain-foreground-trees.png"
    )
    .add(
      "mountainFar",
      "parallax_mountain_pack/layers/parallax-mountain-montain-far.png"
    )
    .add(
      "mountainClose",
      "parallax_mountain_pack/layers/parallax-mountain-mountains.png"
    )
    .add(
      "mountainTrees",
      "parallax_mountain_pack/layers/parallax-mountain-trees.png"
    );
}

function addRocks(app) {
  for (let i = 0; i < 3; i++) {
    rock = new PIXI.Sprite.from("images/rock.png");
    rock.anchor.set(0.1);
    rock.x = app.view.width + 10;
    rock.y = app.view.height / Math.floor(Math.random() * 6) + 1 + heightPlus;
    rocks.push(rock);
    heightPlus += 70;
  }
}
