var PillarPair = cc.Node.extend({
  ctor: function() {
    this._super();
    this.started = false;
    this.topPillar = cc.Sprite.create('res/images/pillar.png');
    this.topPillar.setAnchorPoint(new cc.Point(0.5, 0));
    this.topPillar.setPosition(new cc.Point(0, 100));
    this.addChild(this.topPillar);

    this.bottomPillar = cc.Sprite.create('res/images/pillar.png');
    this.bottomPillar.setAnchorPoint(new cc.Point(0.5, 1));
    this.bottomPillar.setPosition(new cc.Point(0, -100));
    this.addChild(this.bottomPillar);
  },

  update: function(dt) {
    if(this.started == true)
    this.setPositionX(this.getPositionX() - 5);
  },

  start: function(dt) {
    this.started = true;
  }
});
