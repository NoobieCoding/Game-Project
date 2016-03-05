var PillarPair = cc.Node.extend({
  ctor: function(number) {
    if(number === 1)
      this.positionX = PillarPair.POSX.NUM1;
    else if(number === 2)
      this.positionX = PillarPair.POSX.NUM2;
    else if(number ===3)
      this.positionX = PillarPair.POSX.NUM3;
    else if(number ===4)
      this.positionX = PillarPair.POSX.NUM4;
    this.gap = Math.floor(Math.random() * 50) + 80;
    this._super();
    this.topPillar = cc.Sprite.create('res/images/pillar.png');
    this.topPillar.setAnchorPoint(new cc.Point(0.5, 0));
    this.topPillar.setPosition(new cc.Point(0, this.gap));
    this.addChild(this.topPillar);

    this.bottomPillar = cc.Sprite.create('res/images/pillar2.png');
    this.bottomPillar.setAnchorPoint(new cc.Point(0.5, 1));
    this.bottomPillar.setPosition(new cc.Point(0, -this.gap));
    this.addChild(this.bottomPillar);
  },

  randomPositionY: function() {
    var max = 420;
    var min = 180;
    var randomPos = (Math.floor(Math.random() * (max - min))) + min;
    this.setPosition(new cc.Point(this.positionX, randomPos));
  },

  update: function(dt) {
    this.setPositionX(this.getPositionX() - 5);
    var pos = this.getPosition();
    if(pos.x < 0) {
      if(this.positionX = PillarPair.POSX.NUM1)
        this.randomPositionY(PillarPair.POSX.NUM4);
      else if(this.positionX = PillarPair.POSX.NUM4)
        this.randomPositionY(PillarPair.POSX.NUM1);
      else(this.positionX = PillarPair.POSX.NUM2 || this.positionX == PillarPair.POSX.NUM3)
        this.randomPositionY(this.positionX);
    }
  },

  hit: function(player) {
  var playerPos = player.getPosition();
  var myPos = this.getPosition();
  return checkPlayerPillarCollision( playerPos.x, playerPos.y, myPos.x, myPos.y, this.gap);
  }
});

PillarPair.POSX = {
  NUM1: 900,
  NUM2: 700,
  NUM3: 500,
  NUM4: 1100
};
