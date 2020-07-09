/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("5", "./Sprite7/costumes/5.svg", {
        x: 25.246155000000016,
        y: 25.413560000000018
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenIReceivePlay() {
    this.visible = true;
    this.direction = 90;
    this.effects.ghost = 0;
    this.stage.vars.level = 1;
    this.stage.vars.x = 0;
    this.stage.vars.y = 0;
    this.size = 60;
    this.goto(-216, 40);
    while (true) {
      this.stage.vars.y += -1;
      this.stage.vars.x =
        (this.stage.vars.x +
          ((this.keyPressed("right arrow") ||
            this.keyPressed("d") || this.keyPressed("l")) *
            1 +
            (this.keyPressed("left arrow") ||
              this.keyPressed("a") || this.keyPressed("j")) *
              -1)) *
        0.9;
      this.x += this.stage.vars.x;
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.y += 1;
        if (this.touching(this.sprites["Sprite1"].andClones())) {
          this.y += 1;
          if (this.touching(this.sprites["Sprite1"].andClones())) {
            this.y += 1;
            if (this.touching(this.sprites["Sprite1"].andClones())) {
              this.y += 1;
              if (this.touching(this.sprites["Sprite1"].andClones())) {
                this.y += 1;
                if (this.touching(this.sprites["Sprite1"].andClones())) {
                  this.y += -5;
                  this.x += this.stage.vars.x * -1;
                  if (
                    this.keyPressed("up arrow") ||
                    this.keyPressed("w") || this.keyPressed("i")
                  ) {
                    this.stage.vars.x =
                      (Math.abs(this.stage.vars.x) / this.stage.vars.x) * -10;
                    this.stage.vars.y = 12;
                  } else {
                    this.stage.vars.x = 0;
                  }
                }
              }
            }
          }
        }
      }
      this.y += this.stage.vars.y;
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.y += this.stage.vars.y * -1;
        this.stage.vars.y = 0;
      }
      this.y += -1;
      if (
        this.touching(this.sprites["Sprite1"].andClones()) &&
        (this.keyPressed("up arrow") ||
          this.keyPressed("w") || this.keyPressed("i"))
      ) {
        this.direction = 0;
        this.stage.vars.y = 13;
      }
      if (this.x > 239) {
        yield* this.winDie(10);
        this.direction = 90;
        this.stage.vars.x = 0;
        this.stage.vars.y = 0;
        this.stage.vars.level += 1;
        this.goto(-216, 40);
        this.effects.ghost = 0;
      }
      if (this.touching(this.sprites["Sprite9"].andClones())) {
        this.stage.vars.y = 18;
      }
      if (
        this.touching(this.sprites["Sprite2"].andClones()) ||
        this.touching(this.sprites["Sprite5"].andClones())
      ) {
        yield* this.winDie(10);
        this.direction = 90;
        this.stage.vars.x = 0;
        this.stage.vars.y = 0;
        this.goto(-216, 40);
        this.effects.ghost = 0;
      }
      if (this.x < -240) {
        this.x = -240;
      }
      this.y += 1;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *winDie(by) {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += by;
      yield;
    }
  }

  *startAsClone() {
    for (let i = 0; i < 10; i++) {
      this.size += -2;
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceivePlay2() {
    while (true) {
      this.createClone();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.frame = 0;
    while (true) {
      this.stage.vars.frame += 1;
      if (this.timer > 1) {
        this.stage.vars.fps = this.stage.vars.frame;
        this.stage.vars.frame = 0;
        this.restartTimer();
      }
      yield;
    }
  }
}
