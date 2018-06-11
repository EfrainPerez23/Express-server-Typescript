import express from 'express';
export default class Server {
    constructor(port) {
        this._app = express();
        this.port = port;
    }
    get app() {
        return this._app;
    }
    startServer(callback) {
        this.app.listen(this.port, callback);
    }
    static initServer(PORT) {
        return new Server(PORT);
    }
}
