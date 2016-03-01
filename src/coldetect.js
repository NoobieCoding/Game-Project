var checkPlayerPillarCollision = function(playerX, playerY, pillarX, pillarY) {
  if((playerX >= pillarX - 50 && playerX <= pillarX + 50) && (playerY >= pillarY + 80 || playerY <= pillarY - 80))
    return true;
  else {
    return false;
  }
};
