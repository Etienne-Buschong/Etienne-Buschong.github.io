const OrientatedColoredElement = require('./OrientatedColoredElement');
const Vector2D = require('./Vector2D');

class OctagonHandler {

    constructor() {
        this.octagons = ['octagon--1', 'octagon--2', 'octagon--3']
            .map(octName => {
                return new OrientatedColoredElement(octName);
            });
        this.bodyElement = document.getElementById('body');
    }

    register() {
        this.bodyElement.addEventListener('mousemove', event => {
            const mousePosition = new Vector2D(event.clientX, event.clientY);
            this.updateOctagons(mousePosition);
        });
    }

    updateOctagons(mousePos) {
        this.octagons.forEach(oct => {
            oct.updateOrientation(mousePos);
            oct.updateColor(mousePos);
        });
    }

}


module.exports = OctagonHandler;