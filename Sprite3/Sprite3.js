/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", {
        x: 39.17707999999999,
        y: 155.4140575
      }),
      new Costume("costume3", "./Sprite3/costumes/costume3.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume4", "./Sprite3/costumes/costume4.svg", {
        x: 138.32848,
        y: 154.8112275
      }),
      new Costume("costume5", "./Sprite3/costumes/costume5.svg", {
        x: 165.11918,
        y: 171.5554225
      }),
      new Costume("costume6", "./Sprite3/costumes/costume6.svg", {
        x: 203.63081,
        y: 151.4623925
      }),
      new Costume("costume7", "./Sprite3/costumes/costume7.svg", {
        x: 118.23546,
        y: 145.6019275
      }),
      new Costume("costume8", "./Sprite3/costumes/costume8.svg", {
        x: 99.15174000000002,
        y: 43.071064999999976
      }),
      new Costume("costume9", "./Sprite3/costumes/costume9.svg", {
        x: 155.96047500000003,
        y: 159.5790225
      }),
      new Costume("costume10", "./Sprite3/costumes/costume10.svg", {
        x: 141.54152390053127,
        y: 142.2743111563854
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];
  }

  *whenGreenFlagClicked() {
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
