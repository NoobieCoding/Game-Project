var Player = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile('res/images/dot.png');
    this.vy = Player.STARTING_VELOCITY;
  },

  update: function(dt) {
  var pos = this.getPosition();
  this.setPosition(new cc.Point(pos.x, pos.y + this.vy));
  this.vy += Player.G;
  },

  jump: function() {
    this.vy = Player.JUMPING_VELOCITY;
  }
});
Player.G = -0.85;
Player.STARTING_VELOCITY = 15;
Player.JUMPING_VELOCITY = 15;
