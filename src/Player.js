var Player = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile('res/images/dot.png');
    this.vy = Player.STARTING_VELOCITY;
    this.started = false;
    this.travelDistance = 0;
  },

  update: function(dt) {
    if(this.started == true) {
      var pos = this.getPosition();
      this.setPosition(new cc.Point(pos.x, pos.y + this.vy));
      this.vy += Player.G;
      if(pos.y < 0)
        this.stop();
    }
  },

  jump: function() {
    this.vy = Player.JUMPING_VELOCITY;
  },

  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  addTravelDistance: function(scoreLabel) {
    this.travelDistance += 5;
    if(this.travelDistance % 200 == 0) {
      score += 10;
      scoreLabel.setString(score+"");
    }
  }
});
Player.G = -0.85;
Player.STARTING_VELOCITY = 15;
Player.JUMPING_VELOCITY = 15;
