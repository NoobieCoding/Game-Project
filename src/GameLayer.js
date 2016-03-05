var GameLayer = cc.LayerColor.extend({
  init: function() {
    this._super(new cc.Color(144, 238, 144, 144));
    this.setPosition(new cc.Point( 0, 0 ));
    this.state = GameLayer.STATES.FRONT;

    this.player = new Player();
    this.player.setPosition(new cc.Point(screenWidth / 3, screenHeight / 3));
    this.addChild(this.player, 1);

    this.pillarPair = null;
    this.pillarPair2 = null;
    this.pillarPair3 = null;
    this.pillarPair4 = null;

    this.scoreLabel = cc.LabelTTF.create('0', 'Arial', 40);
    this.scoreLabel.setPosition(new cc.Point(50, 550));
    this.addChild(this.scoreLabel);

    this.player.scheduleUpdate();
    this.scheduleUpdate();
    this.addKeyboardHandlers();

    return true;
  },

  createPillarPairs: function() {
    this.pillarPair = new PillarPair(1);
    this.pillarPair.randomPositionY();
    this.addChild(this.pillarPair);
    this.pillarPair.scheduleUpdate();

    this.pillarPair2 = new PillarPair(2);
    this.pillarPair2.randomPositionY();
    this.addChild(this.pillarPair2);
    this.pillarPair2.scheduleUpdate();

    this.pillarPair3 = new PillarPair(3);
    this.pillarPair3.randomPositionY();
    this.addChild(this.pillarPair3);
    this.pillarPair3.scheduleUpdate();

    this.pillarPair4 = new PillarPair(4);
    this.pillarPair4.randomPositionY();
    this.addChild(this.pillarPair4);
    this.pillarPair4.scheduleUpdate();
  },

  update: function(dt) {
    if (this.state == GameLayer.STATES.STARTED) {
      if (this.pillarPair && this.pillarPair.hit(this.player) ||
      this.pillarPair2 && this.pillarPair2.hit(this.player) ||
      this.pillarPair3 && this.pillarPair3.hit(this.player) ||
      this.pillarPair4 && this.pillarPair4.hit(this.player)) {
        this.endGame();
        this.state = GameLayer.STATES.DEAD;
      }
    this.player.addTravelDistance(this.scoreLabel);
    }
  },

  addKeyboardHandlers: function() {
    var self = this;
    cc.eventManager.addListener({
      event: cc.EventListener.KEYBOARD,
      onKeyPressed : function(keyCode, event) {
        self.onKeyDown(keyCode, event);
      },
      onKeyReleased: function(keyCode, event) {
        self.onKeyUp(keyCode, event);
      }
    }, this);
  },

  onKeyDown: function(keyCode, event) {
    if(this.state == GameLayer.STATES.FRONT) {
      this.state = GameLayer.STATES.STARTED;
      this.startGame();
    } else if(this.state == GameLayer.STATES.STARTED) {
      this.player.jump();
    } else if(this.state == GameLayer,STATES.DEAD) {
      reset();
    }

  },

  onKeyUp: function(keyCode, event) {
  },

  startGame: function() {
    this.createPillarPairs();
    this.player.start();
    this.player.jump();
  },

  endGame: function() {
    if (this.pillarPair) {
      this.pillarPair.unscheduleUpdate();
    }
    if (this.pillarPair2) {
      this.pillarPair2.unscheduleUpdate();
    }
    if (this.pillarPair3) {
      this.pillarPair3.unscheduleUpdate();
    }
    if (this.pillarPair4) {
      this.pillarPair4.unscheduleUpdate();
    }
    this.unscheduleUpdate();
  },

  reset: function() {
    
  }
});

GameLayer.STATES = {
  FRONT: 1,
  STARTED: 2,
  DEAD: 3
};

var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild( layer );
  }
});
