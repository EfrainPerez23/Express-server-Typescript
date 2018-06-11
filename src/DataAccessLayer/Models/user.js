export default class User {
    constructor(_id, name, lastName) {
        this._id = _id;
        this._name = name;
        this._lastName = lastName;
    }
    get id() {
        return this._id;
    }
    set id(_id) {
        this._id = _id;
    }
    get name() {
        return this._name;
    }
    set name(_name) {
        this._name = _name;
    }
    get lastName() {
        return this._name;
    }
    set lastName(_lastName) {
        this._lastName = _lastName;
    }
    isValid() {
        return this._id !== null && this._id !== '';
    }
}
