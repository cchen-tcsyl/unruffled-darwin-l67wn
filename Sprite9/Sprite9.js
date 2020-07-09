/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume2", "./Sprite9/costumes/costume2.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume3", "./Sprite9/costumes/costume3.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume4", "./Sprite9/costumes/costume4.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume5", "./Sprite9/costumes/costume5.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume6", "./Sprite9/costumes/costume6.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume7", "./Sprite9/costumes/costume7.svg", {
        x: 23.671494999999993,
        y: -51.27365
      }),
      new Costume("costume8", "./Sprite9/costumes/costume8.svg", {
        x: 175.035035,
        y: -43.164890000000014
      }),
      new Costume("costume9", "./Sprite9/costumes/costume9.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume10", "./Sprite9/costumes/costume10.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite9/sounds/pop.wav")];

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
