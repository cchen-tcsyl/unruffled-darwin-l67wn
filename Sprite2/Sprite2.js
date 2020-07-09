/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 118,
        y: -41
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 35,
        y: -43
      }),
      new Costume("costume3", "./Sprite2/costumes/costume3.svg", {
        x: 32,
        y: 100
      }),
      new Costume("costume4", "./Sprite2/costumes/costume4.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume5", "./Sprite2/costumes/costume5.svg", {
        x: 76.06793000000002,
        y: -40.651160000000004
      }),
      new Costume("costume6", "./Sprite2/costumes/costume6.svg", {
        x: 76.06793000000002,
        y: -40.651160000000004
      }),
      new Costume("costume7", "./Sprite2/costumes/costume7.svg", {
        x: -35.280910000000006,
        y: -37.23256000000001
      }),
      new Costume("costume8", "./Sprite2/costumes/costume8.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume9", "./Sprite2/costumes/costume9.svg", {
        x: 78.06793000000002,
        y: -42.651160000000004
      }),
      new Costume("costume10", "./Sprite2/costumes/costume10.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
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
    this.visible = false;
  }
}
