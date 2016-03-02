var checkPlayerPillarCollision = function(playerX, playerY, pillarX, pillarY) {
  if((playerX >= pillarX - 50 && playerX <= pillarX + 50) && (playerY >= pillarY
  + 80 || playerY <= pillarY - 80) || checkBoarder(playerY))
    return true;
  else {
    return false;
  }
};

var checkBoarder = function(playerY) {
  return(playerY < 20 || playerY > 580);
}
