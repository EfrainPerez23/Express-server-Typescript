
import { MysqlError } from 'mysql';
import mysql = require('mysql');

class MySQL_DBManager {

    // database object
    private _db: mysql.Pool;

    public constructor(dbConfig: mysql.ConnectionConfig) {
        // This module also provides built-in connection pooling using mysql.createPool(config)
        this._db = mysql.createPool(dbConfig);
    }

    public get db(): mysql.Pool {
        // Get the Pool connection of the database
        return this._db;
    }

    public disconnect(): void {
        // End connection with Database
        this._db.end()
    }
}

// Data base credentials
// Rather than creating and managing connections one-by-one
const mysqlConfig: mysql.PoolConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'typescript',
    connectionLimit: 100,
};

// creating DBManager to export
const DbManager: MySQL_DBManager = new MySQL_DBManager(mysqlConfig);

export default DbManager;

