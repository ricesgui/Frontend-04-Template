import { Component } from "./framework.js"

export class Carousel extends Component {
  constructor() {
    super();
    this.attributes = Object.create(null);
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  // let currentIndex = 0;
    // setInterval(() => {
    //   let children = this.root.children;
    //   let nextIndex = (currentIndex + 1) % children.length;

    //   let current = children[currentIndex];
    //   let next = children[nextIndex];

    //   next.style.transition = "none";
    //   next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

    //   setTimeout(() => {
    //     next.style.transition = "";
    //     current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
    //     next.style.transform = `translateX(${-nextIndex * 100}%)`;

    //     currentIndex = nextIndex;
    //   }, 16);
    // }, 3000);

  render() {
    this.root = document.createElement("div");
    this.root.classList.add("carousel");
    for (const record of this.attributes.src) {
      let child = document.createElement("div");
      child.style.backgroundImage = `url("${record}")`;
      child.style.backgroundRepeat = "no-repeat";
      this.root.appendChild(child);
    }
    let position = 0;
    this.root.addEventListener("mousedown", (event) => {
      let startX = event.clientX,
        children = this.root.children;

      let move = (event) => {
        let x = event.clientX - startX;

        let current = position - (x - x % 615) / 615;

        for (let offset of [-1, 0, 1]) {
          let pos = current + offset;
          pos = (pos + children.length) % children.length;

          children[pos].style.transition = "none";
          children[pos].style.transform = `translateX(${- pos * 615 + offset * 615 + x % 615}px)`;
        }
      };

      let up = (event) => {
        let x = event.clientX - startX;
        position = position - Math.round(x / 615);

        for (let offset of [0,
          - Math.sign(Math.round(x / 615) - x + 308 * Math.sign(x))]) {

          let pos = position + offset;
          pos = (pos + children.length) % children.length;

          children[pos].style.transition = "";
          children[pos].style.transform = `translateX(${- pos * 615 + offset * 615}px)`;
        }

        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
      };
      document.addEventListener("mousemove", move);

      document.addEventListener("mouseup", up);
    });
    return this.root;
  }

  mountTo(parent) {
    parent.appendChild(this.render());
  }
}
