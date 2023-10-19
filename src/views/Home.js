import AbstractView from "./AbstractView.js";

export default class Home extends AbstractView {
  constructor() {
    super();
  }

  render(props) {
    this.setTitle("Home");
    const div = document.createElement("div");
    div.textContent = "This is the Home page"
    return div;
  }
}
