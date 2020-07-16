import { tns } from "tiny-slider/src/tiny-slider"

class Slider {
  constructor(container,items,slideBy,mouseDrag,speed) {
    this.container = container;
    this.items = items;
    this.slideBy = slideBy;
    this.mouseDrag = mouseDrag;
    this.speed = speed;
  }
  activate(){
    console.log(tns);
    var slider = tns({
      container: '.slider',
    });
  }

}

export { Slider };