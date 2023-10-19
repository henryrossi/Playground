import AbstractView from "./AbstractView.js";

export default class Animation extends AbstractView {
  constructor() {
    super();
  }

  render(props) {
    this.setTitle("Animations");
    const div = document.createElement("div");
    div.textContent = `This is the ${props.name} animation page`;
    return div;
  }
}
