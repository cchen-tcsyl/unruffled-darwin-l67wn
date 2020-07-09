import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Intro from "./Intro/Intro.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite3: new Sprite3({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sprite7: new Sprite7({
    x: -240,
    y: -62,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 7
  }),
  Sprite9: new Sprite9({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Sprite5: new Sprite5({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Intro: new Intro({
    x: -0.4444444444444385,
    y: 219,
    direction: 90,
    costumeNumber: 3,
    size: 70,
    visible: false,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites);
export default project;
