var checkPlayerPillarCollision = function(playerX, playerY, pillarX, pillarY, gap) {
  if((playerX >= pillarX - 50 && playerX <= pillarX + 50) && (playerY >= pillarY
  + (gap - 20) || playerY <= pillarY - (gap - 20)) || checkBoarder(playerY))
    return true;
  else {
    return false;
  }
};

var checkBoarder = function(playerY) {
  return(playerY < 20 || playerY > 580);
}
