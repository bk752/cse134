import Part from '../objects/Part';
import Category from '../objects/Category';

export default {
  parts: {
    list: [
      new Category("CPU").addPart([
        new Part("option a", "information about first option", "images/i3.jpeg"),
        new Part("option b", "information about second option", "images/i5.jpeg"),
        new Part("option c", "information about third option", "images/i7.jpeg"),
      ]),
      new Category("Motherboard").addPart([
        new Part("option a", "information about first option", "images/mb1.jpeg"),
        new Part("option b", "information about second option", "images/mb2.jpeg"),
        new Part("option c", "information about third option", "images/mb3.jpeg"),
      ]),
      new Category("GPU").addPart([
        new Part("option a", "information about first option", "images/gpu1.jpeg"),
        new Part("option b", "information about second option", "images/gpu2.jpeg"),
        new Part("option c", "information about third option", "images/gpu3.jpeg"),
      ]),
    ],
    active: 0,
    adding: 0
  }
};
