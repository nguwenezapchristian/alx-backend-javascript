/* eslint-disable */
/*
Consider this class as an abstract class: This means that Building
should be designed in such a way that it's not meant to be
instantiated directly. Instead, it serves as
a blueprint for other classes to inherit from.
*/
export default class Building {
    constructor(sqft) {
        if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
        if (typeof sqft !== 'number') {
            throw new TypeError('Sqft must be a number');
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }
}