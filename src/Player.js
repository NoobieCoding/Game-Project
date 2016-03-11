var Player = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.vy = Player.STARTING_VELOCITY;
    this.initWithFile('res/images/dot.png' );
    this.started = false;
    this.travelDistance = 0;
    this.movingAction = this.createAnimationAction();
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
    this.runAction( this.movingAction );
  },

  stop: function() {
    this.started = false;
    this.stopAction( this.movingAction );
  },

  addTravelDistance: function(scoreLabel) {
    this.travelDistance += 5;
    this.addScore(scoreLabel);
  },

  fall: function() {
    var pos = this.getPosition();
    var fallAction = cc.MoveTo.create( 0.3, new cc.Point( pos.x, -50 ) );
    this.runAction( fallAction );
  },

  createAnimationAction: function() {
    var animation = new cc.Animation.create();
    animation.addSpriteFrameWithFile('res/images/dot.png');
    animation.addSpriteFrameWithFile('res/images/dot2.png');
    animation.setDelayPerUnit(0.2);
    return cc.RepeatForever.create(cc.Animate.create(animation));
  },

  addScore: function(scoreLabel) {
    if(this.travelDistance % 200 == 0) {
      score += 10;
      scoreLabel.setString(score+"");
    }
  }
});
Player.G = -0.85;
Player.STARTING_VELOCITY = 15;
Player.JUMPING_VELOCITY = 15;
