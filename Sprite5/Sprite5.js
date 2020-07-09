/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume2", "./Sprite5/costumes/costume2.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume3", "./Sprite5/costumes/costume3.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume4", "./Sprite5/costumes/costume4.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume5", "./Sprite5/costumes/costume5.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume6", "./Sprite5/costumes/costume6.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume7", "./Sprite5/costumes/costume7.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume8", "./Sprite5/costumes/costume8.svg", {
        x: 354.927125,
        y: 198.73505
      }),
      new Costume("costume9", "./Sprite5/costumes/costume9.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2)
    ];
  }

  *whenIReceivePlay() {
    this.visible = true;
    while (true) {
      this.costume = "" + "costume" + this.stage.vars.level;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceivePlay2() {
    while (true) {
      for (let i = 0; i < 10; i++) {
        this.y += 1;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.y += -1;
        yield;
      }
      yield;
    }
  }
}
