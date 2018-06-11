import DAO from "../../Dependencies/DAO";
import User from "../../../Models/user";
import { Router, Request, Response, RequestHandler } from 'express';
import DbManager from "../../../DBConnections/MYSQL_dbManager";
import { Query, MysqlError, queryCallback, PoolConnection } from 'mysql';


export default class MYSQL_UserDAO implements DAO<User> {
    
    public create(_object: User, callback: Function): void {
        DbManager.db.getConnection((err: MysqlError, connection: PoolConnection): void => {
            connection.query('INSERT INTO `user` VALUES(?, ?, ?)', [null, _object.name, _object.lastName], (error: MysqlError | null, results: any, fields: any): void => {
                connection.release();
                callback(results);
            });
        });
    }


    public read(key: any, callback: Function): void {
        DbManager.db.getConnection((err: MysqlError, connection: PoolConnection): void => {
            if (!err) {
                connection.query('SELECT id, Name, LastName FROM user WHERE id = ' + <String>key, (error: MysqlError, results: User[], fields: any): void => {
                    connection.release();
                    callback(results[0]);
                });
            } else {
                callback(null);
            }
        });
    }
    public delete(key: any, callback: Function): void {
        DbManager.db.getConnection((err: MysqlError, connection: PoolConnection): void => {
            connection.query(`DELETE FROM user WHERE id = ${String(key)}`, (error: MysqlError | null, results: any, fields: any) => {
                connection.release();
                callback(results);
            });
        });
    }

    public readALL(callback: Function): void {
        DbManager.db.getConnection((err: MysqlError, connection: PoolConnection): void => {
            if (!err) {
                connection.query('SELECT id, Name, LastName FROM user', (error: MysqlError, results: User[], fields: any): void => {
                    connection.release();
                    callback(results);
                });
            } else {
                callback(null);
            }
        });
    }
    public update(_object: User, callback: Function): void {
        DbManager.db.getConnection((err: MysqlError, connection: PoolConnection): void => {
            connection.query('UPDATE `user` SET Name = ?, LastName = ? WHERE id = ' + _object.id, [_object.name, _object.lastName], (error: MysqlError | null, results: any, fields: any): void => {
                connection.release();
                callback(results);
            });
        });
    }
} 