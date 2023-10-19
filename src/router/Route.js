export default class Route {
    constructor(path, view){
        this.path = path;
        this.view = view;
    }

    // setProps(newProps) {
    //     this.props = newProps;
    // }

    renderView(params) {
        // return this.view(this.props);
        return this.view.render(params);
    }
}