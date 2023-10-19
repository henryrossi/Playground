import AbstractView from "./AbstractView.js";

export default class Home extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  

  render(props) {
    const div = document.createElement("div");
    return div;
  }
}
