export default class Route {
  path;
  name;
  params;

  constructor(path, view) {
    this.path = path;
    this.view = view;
  }

  setParams(newParams) {
    this.params = newParams;
  }

  renderView() {
    return this.view.render(this.params);
  }
}
