/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Intro extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("download", "./Intro/costumes/download.svg", {
        x: 131.95485519591136,
        y: 77.62050305641849
      }),
      new Costume("costume1", "./Intro/costumes/costume1.svg", {
        x: 155.02069314320897,
        y: 44.67513020833334
      }),
      new Costume("costume2", "./Intro/costumes/costume2.svg", {
        x: 40.50000000000006,
        y: 15.317184999999967
      }),
      new Costume("costume3", "./Intro/costumes/costume3.svg", {
        x: 19.839977264404325,
        y: 15.317187500000017
      }),
      new Costume("costume4", "./Intro/costumes/costume4.svg", {
        x: 20.53997802734375,
        y: 15.317187499999989
      })
    ];

    this.sounds = [
      new Sound(
        "Luis Fonsi - Despacito ft",
        "./Intro/sounds/Luis Fonsi - Despacito ft.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];
  }

  *smoothGlide(x2, y2, speed2) {
    while (
      !(
        Math.round(this.x) == Math.round(x2) &&
        Math.round(this.y) == Math.round(y2)
      )
    ) {
      this.x += (Math.round(x2) - Math.round(this.x)) / speed2;
      this.y += (Math.round(y2) - Math.round(this.y)) / speed2;
      yield;
    }
    this.goto(x2, y2);
  }

  *whenGreenFlagClicked() {
    yield* this.startSound("Luis Fonsi - Despacito ft");
    this.visible = false;
    this.stage.vars.id = 0;
    this.createClone();
    this.stage.vars.id += 1;
    yield* this.wait(2);
    this.createClone();
    this.stage.vars.id += 1;
    yield* this.wait(3);
    this.createClone();
    this.stage.vars.id += 1;
    yield* this.wait(3);
    this.createClone();
    this.stage.vars.id += 1;
    yield* this.wait(3);
    this.createClone();
    this.stage.vars.id += 1;
  }

  *startAsClone() {
    if (this.stage.vars.id == 1) {
      this.visible = true;
      this.size = 100;
      this.costume = "download";
      this.goto(0, 219);
      yield* this.smoothGlide(0, 0, 9);
    } else {
      if (this.stage.vars.id == 2) {
        this.visible = true;
        this.size = 100;
        this.costume = "costume1";
        this.goto(0, 250);
        yield* this.smoothGlide(0, -110, 9);
      } else {
        if (this.stage.vars.id == 3) {
          this.visible = true;
          this.size = 100;
          this.costume = "costume2";
          this.goto(100, 0);
        } else {
          if (this.stage.vars.id == 4) {
            this.visible = true;
            this.size = 100;
            this.costume = "costume3";
            this.goto(-100, 0);
          } else {
            if (this.stage.vars.id == 5) {
              this.visible = true;
              this.size = 100;
              this.costume = "costume4";
              this.goto(0, -160);
              yield* this.wait(3);
              this.broadcast("play");
              this.stopAllSounds();
            } else {
              null;
            }
          }
        }
      }
    }
  }

  *whenIReceivePlay() {
    this.deleteThisClone();
  }
}
