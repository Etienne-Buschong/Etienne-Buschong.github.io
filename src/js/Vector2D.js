class Vector2D {

    constructor(u, v) {
        this.u = u;
        this.v = v;
    }

    minus(vec) {
        return new Vector2D(this.u - vec.u, this.v - vec.v);
    }

    plus(vec) {
        return new Vector2D(this.u + vec.u, this.v + vec.v);
    }

    dot(vec) {
        return this.u * vec.u + this.v * vec.v;
    }

    norm() {
        return Math.sqrt(this.u * this.u + this.v * this.v);
    }

    normalize() {
        return new Vector2D(this.u / this.norm(), this.v / this.norm());
    }

    angle() {
        const vec = new Vector2D(1, 0);
        const dot = this.dot(vec);
        const radian = Math.atan2(this.u * vec.v + this.v * vec.u, dot);
        const degree = this.toDegrees(radian);
        return -(360.0 - degree) % 360;
    }

    toDegrees(radians) {
        return radians * 360 / (2 * Math.PI);
    }
}

module.exports = Vector2D;