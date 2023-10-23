export default class Router {
  routes;
  renderNode;

  constructor(routes, renderNode) {
    this.routes = routes;
    this.renderNode = renderNode;
    this.navigate(location.pathname + location.hash);
  }

  addRoutes(routes) {
    this.routes = [...this.routes, ...routes];
  }

  match(route, requestPath) {
    let paramNames = [];

    // create the regular expression of the route
    let regexPath =
      route.path.replace(/([:*])(\w+)/g, (full, colon, name) => {
        paramNames.push(name);
        return "([^/]+)";
      }) + "(?:/|$)";

    let params = {};
    let routeMatch = requestPath.match(new RegExp(regexPath));
    if (routeMatch != null) {
      params = routeMatch.slice(1).reduce((params, value, index) => {
        if (params == null) params = {};
        params[paramNames[index]] = value;
        return params;
      }, null);
    }

    route.setParams(params);

    return routeMatch;
  }

  navigate(path) {
    const route = this.routes.filter((route) => this.match(route, path))[0];
    if (!route) this.renderNode.innerText = "404 Page not found";
    else {
      window.location.href = path.search("/#") === -1 ? "#" + path : path;
      // clear children
      while (this.renderNode.lastElementChild) {
        this.renderNode.removeChild(this.renderNode.lastElementChild);
      }
      this.renderNode.appendChild(route.renderView());
    }
  }
}
