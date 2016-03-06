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
  },

  fall: function() {
    var pos = this.getPosition();
    var fallAction = cc.MoveTo.create( 0.3, new cc.Point( pos.x, -50 ) );
    this.runAction( fallAction );
  }
});
Player.G = -0.85;
Player.STARTING_VELOCITY = 15;
Player.JUMPING_VELOCITY = 15;
