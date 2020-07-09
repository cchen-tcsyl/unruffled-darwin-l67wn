/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 267.8459259742914,
        y: -77.5
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 279.56685620684954,
        y: 54.328120000000055
      }),
      new Costume("costume3", "./Sprite1/costumes/costume3.svg", {
        x: 251.1017399277798,
        y: 63.57812000000004
      }),
      new Costume("costume4", "./Sprite1/costumes/costume4.svg", {
        x: 264.4970887649891,
        y: -77.50000180232553
      }),
      new Costume("costume5", "./Sprite1/costumes/costume5.svg", {
        x: 263.6598794626635,
        y: -77.49999075581388
      }),
      new Costume("costume6", "./Sprite1/costumes/costume6.svg", {
        x: 260.31104225336117,
        y: -77.49999000000003
      }),
      new Costume("costume7", "./Sprite1/costumes/costume7.svg", {
        x: 301.33429806731465,
        y: -77.50000941860458
      }),
      new Costume("costume8", "./Sprite1/costumes/costume8.svg", {
        x: 345.00715143303677,
        y: 243.78372030468748
      }),
      new Costume("costume9", "./Sprite1/costumes/costume9.svg", {
        x: 301.3343014330368,
        y: -77.50000969531254
      }),
      new Costume("costume10", "./Sprite1/costumes/costume10.svg", {
        x: 267.8459259742914,
        y: -77.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];
  }

  *whenGreenFlagClicked() {
    this.broadcast("Restart");
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.visible = true;
    while (true) {
      this.costume = "" + "costume" + this.stage.vars.level;
      yield;
    }
  }
}
