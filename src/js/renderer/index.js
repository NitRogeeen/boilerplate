/* @flow */
import Root from './components/root';

class Renderer {
    targetElement: ?Object;
    root: Root;

    constructor(targetElementId: string) {
        this.targetElement = document.getElementById(targetElementId);
        if (this.targetElement !== null) {
            this.root = new Root(this.targetElement);
        }
    }
}

window.myApp = {
    Renderer
};
