import AbstractView from "./AbstractView.js";

export default class Dom extends AbstractView {
  constructor() {
    super();
  }

  render(props) {
    this.setTitle("DOM");
    const span = document.createElement("span");
    span.textContent = "This is the DOM page";
    return span;
  }
}
