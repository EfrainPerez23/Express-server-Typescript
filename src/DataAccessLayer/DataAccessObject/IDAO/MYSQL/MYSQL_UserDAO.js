import DbManager from "../../../DBConnections/MYSQL_dbManager";
export default class MYSQL_UserDAO {
    create() {
        throw new Error("Method not implemented.");
    }
    read(key) {
        throw new Error("Method not implemented.");
    }
    delete(key) {
        throw new Error("Method not implemented.");
    }
    readALL(callback) {
        DbManager.db.getConnection((err, connection) => {
            if (!err) {
                connection.query('SELECT id, Name, LastName FROM user', (error, results, fields) => {
                    connection.release();
                    callback(results);
                });
            }
        });
    }
    update(_object) {
        throw new Error("Method not implemented.");
    }
}
