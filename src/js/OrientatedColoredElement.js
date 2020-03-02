const Vector2D = require('./Vector2D');

class OrientatedColoredElement {

    constructor(name) {
        this.name = name;
        this.element = document.getElementsByClassName(this.name)[0];
        this.bdr = this.element.getBoundingClientRect();
        console.log(this.bdr);
        this.center = new Vector2D(this.bdr.left + this.bdr.width / 2, this.bdr.top + this.bdr.height / 2);
        this.maxDistance = Math.max(document.documentElement.clientWidth - this.center.u, this.center.u);
    }

    updateOrientation(mousePosition) {
        const dir = mousePosition.minus(this.center);
        const angle = Math.floor(dir.angle());
        this.element.style.transform = `rotate(${angle}deg`;
    }

    updateColor(mousePosition) {
        const dir = mousePosition.minus(this.center);
        const angle = Math.floor(dir.angle());
        const norm = dir.norm();
        const h = Math.abs(angle);
        const s = (norm / this.maxDistance) > 1 ? 1.0 : (norm / this.maxDistance);
        const v = 1;
        const rgb = this.HSVToRGB(h, s, v);
        this.element.style.backgroundColor = 'rgb(' + rgb.join(',') + ')';
    }

    // Like described in https://de.wikipedia.org/wiki/HSV-Farbraum#Umrechnung_HSV_in_RGB
    HSVToRGB(h, s, v) {

        function hiSwitch(hi) {
            switch (hi % 6) {
                case 0: return [v, t, p];
                case 1: return [q, v, p];
                case 2: return [p, v, t];
                case 3: return [p, q, v];
                case 4: return [t, p, v];
                case 5: return [v, p, q];
            }
        }

        const hi = Math.floor(h / 60.0);
        const f = h / 60.0 - hi;
        const p = v * (1 - s);
        const q = v * (1 - s * f);
        const t = v * (1 - s * (1 - f));
        const [r, g, b] = hiSwitch(hi);
        return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];

    }

}

module.exports = OrientatedColoredElement;