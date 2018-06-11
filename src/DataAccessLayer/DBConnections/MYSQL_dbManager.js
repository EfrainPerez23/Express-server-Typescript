class MySQL_DBManager {
    constructor(dbConfig) {
        // This module also provides built-in connection pooling using mysql.createPool(config)
        this._db = mysql.createPool(dbConfig);
    }
    get db() {
        // Get the Pool connection of the database
        return this._db;
    }
    disconnect() {
        // End connection with Database
        this._db.end();
    }
}
// Data base credentials
// Rather than creating and managing connections one-by-one
const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'typescript',
    connectionLimit: 100,
};
// creating DBManager to export
const DbManager = new MySQL_DBManager(mysqlConfig);
export default DbManager;
