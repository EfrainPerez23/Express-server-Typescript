import DTO from '../DataAccessObject/Dependencies/DTO';

export default class User implements DTO {


    private _id: number | string | null = '';
    private _name: string | null;
    private _lastName: string | null;

    public constructor(_id: number | string | null, name: string | null, lastName: string | null) {
        this._id = _id;
        this._name = name;
        this._lastName = lastName;
    }

    public get id(): number | string | null {
        return this._id;
    }

    public set id(_id: number | string | null) {
        this._id = _id;
    }

    public get name(): string | null {
        return this._name;
    }

    public set name(_name: string | null) {
        this._name = _name;
    }

    public get lastName(): string | null {
        return this._lastName;
    }

    public set lastName(_lastName: string | null) {
        this._lastName = _lastName;
    }

    public isValid(): boolean {
        return this._name !== null && this.name !== '' && this._lastName !== null && this._lastName !== '';
    }
}