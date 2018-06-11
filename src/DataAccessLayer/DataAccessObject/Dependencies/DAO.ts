export default interface DAO<T> {
    create(_object: T, callback: Function): void;
	read(key: any, callback: Function): void;
    delete(key: any, callback: Function): void;
	readALL(callback: Function): void;
	update(_object: T, callback: Function): void;
} 	