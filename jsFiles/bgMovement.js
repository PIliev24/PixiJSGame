function updateBg(
  mountainX,
  mountainTrees,
  mountainClose,
  mountainFar,
  mountainForegroundTrees,
  mountainBg
) {
  mountainX = mountainX + mountainSpeed;
  mountainTrees.tilePosition.x = mountainX;
  mountainClose.tilePosition.x = mountainX / 2;
  mountainFar.tilePosition.x = mountainX / 4;
  mountainForegroundTrees.tilePosition.x = mountainX / 8;
  mountainBg.tilePosition.x = mountainX / 16;
}

function createBg(texture) {
  let tiling = new PIXI.TilingSprite(texture, 800, 600);
  tiling.position.set(0, 0);
  app.stage.addChild(tiling);

  return tiling;
}
