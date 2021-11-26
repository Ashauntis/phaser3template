import "phaser";

export default class GameScene extends Phaser.Scene {
  
  constructor() {
    super("Game");
  }

  preload() {
    this.load.spritesheet("intro", "assets/intro.png", {
      frameWidth: 128,
      frameHeight: 128,
      endFrame: 290,
    });
  }

  create() {
    var config = {
      key: "introAnimation",
      frames: this.anims.generateFrameNumbers("intro", {
        start: 0,
        end: 290,
        first: 23,
      }),
      frameRate: 60,
      repeat: -1,
    };

    this.anims.create(config);

    this.add.sprite(0, 0, "intro").play("introAnimation");
  }
}
