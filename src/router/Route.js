export default class Route {
  path;
  name;
  props;

  constructor(path, view) {
    this.path = path;
    this.view = view;
  }

  setProps(newProps) {
    this.props = newProps;
  }

  renderView() {
    return this.view.render(this.props);
  }
}
