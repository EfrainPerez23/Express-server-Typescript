import { Router } from 'express';
import DbManager from '../DataAccessLayer/DBConnections/MYSQL_dbManager';
import MYSQL_UserDAO from '../DataAccessLayer/DataAccessObject/IDAO/MYSQL/MYSQL_UserDAO';
export class RouterExample {
    constructor() {
        this._router = Router();
        this.routes();
    }
    get router() {
        return this._router;
    }
    routes() {
        this.getHome();
        this.getExample();
        this.insert();
        this.delete();
    }
    getHome() {
        this._router.get('/', (req, res) => {
            DbManager.db.getConnection((err, connection) => {
                if (!err) {
                    return connection.query('SELECT id, Name, LastName FROM user', (error, results, fields) => {
                        connection.release();
                        res.status(200).json({ message: results });
                    });
                }
                else {
                    return res.status(404).send({ "success": false, "status": 505, "message": 'There is a problem with the Data base', "data": null });
                }
            });
        });
    }
    getExample() {
        this._router.get('/example', (req, res) => {
            const userDao = new MYSQL_UserDAO();
            userDao.readALL((results) => {
                return res.status(202).json({ var: results });
            });
        });
    }
    insert() {
        this._router.post('/', (req, res) => {
            const body = req.body;
            DbManager.db.getConnection((err, connection) => {
                connection.query('INSERT INTO `user` VALUES(?, ?, ?)', [null, body.name, body.lastName], (error, results, fields) => {
                    connection.release();
                    res.status(200).json({ message: results });
                });
            });
        });
    }
    delete() {
        this._router.delete('/:id', (req, res) => {
            DbManager.db.getConnection((err, connection) => {
                connection.query(`DELETE FROM user WHERE id = ${req.params.id}`, (error, results, fields) => {
                    connection.release();
                    res.status(200).json({ message: results });
                });
            });
        });
    }
}
const allRouters = new RouterExample();
export default allRouters.router;
