import AbstractView from "./AbstractView.js";

export default class Dom extends AbstractView {
  constructor() {
    super();
    this.setTitle("DOM");
  }

  render(props) {
    const div = document.createElement("div");
    return div;
  }
}
