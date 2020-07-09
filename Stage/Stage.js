/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("56179628_60x60", "./Stage/costumes/56179628_60x60.svg", {
        x: 241.5,
        y: 225.39999999999998
      }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound(
        "Star Wars- The Imperial March (Darth Vader's Theme)",
        "./Stage/sounds/Star Wars- The Imperial March (Darth Vader's Theme).wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2)
    ];

    this.vars.level = 4;
    this.vars.credits = 1;
    this.vars.x = -0.0025659026318267052;
    this.vars.y = 0;
    this.vars.fps = 30;
    this.vars.frame = 13;
    this.vars.letters =
      "abcdefghijklmnopqrstuvwxyz0123456789 _-=+)(*&^%$#@!~`©{}[]><,.?/:;'\"®™|\\";
    this.vars.i1 = 73;
    this.vars.i2 = 7;
    this.vars.someNumber = 0;
    this.vars.id = 5;
    this.vars.amount = 1;
    this.vars.speed = 1;
    this.vars.points = 0;
    this.vars.bosshealth = 100;
    this.vars.HowManyTimesPeopleHitTheGreenFlag = 0;
    this.vars.famousPeopleWhoClickedTheGreenFlag = [];
  }

  *whenIReceivePlay() {
    while (true) {
      yield* this.playSoundUntilDone(
        "Star Wars- The Imperial March (Darth Vader's Theme)"
      );
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }

  *whenIReceivePlay2() {
    this.costume = "56179628_60x60";
  }
}
