import { TimeLine, Animation } from "./animation.js"
import { linear, ease } from "./ease.js"

let tl = new TimeLine();
tl.start();

tl.add(new Animation(document.querySelector("#el").style, "transform", 0, 500, 2000, 0, ease, v => `translateX(${v}px)`),0);

document.querySelector("#pause").addEventListener("click", () => tl.pause());
document.querySelector("#resume").addEventListener("click", () => tl.resume());
