var PillarPair = cc.Node.extend({
  ctor: function() {
    this._super();
    this.topPillar = cc.Sprite.create('res/images/pillar.png');
    this.topPillar.setAnchorPoint(new cc.Point(0.5, 0));
    this.topPillar.setPosition(new cc.Point(0, 100));
    this.addChild(this.topPillar);

    this.bottomPillar = cc.Sprite.create('res/images/pillar.png');
    this.bottomPillar.setAnchorPoint(new cc.Point(0.5, 1));
    this.bottomPillar.setPosition(new cc.Point(0, -100));
    this.addChild(this.bottomPillar);
  },

  randomPositionY: function() {
    var max = 420;
    var min = 180;
    var randomPos = (Math.floor(Math.random() * (max - min))) + min;
    this.setPosition(new cc.Point(900, randomPos));
    console.log(randomPos);
  },

  update: function(dt) {
    this.setPositionX(this.getPositionX() - 5);
    var pos = this.getPosition();
    if(pos.x < 0) {
      this.randomPositionY();
    }
  },

  hit: function(player) {
  var playerPos = player.getPosition();
  var myPos = this.getPosition();
  return checkPlayerPillarCollision( playerPos.x, playerPos.y, myPos.x, myPos.y );
  }

});
