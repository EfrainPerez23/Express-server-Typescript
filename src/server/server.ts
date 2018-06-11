import express from 'express';

export default class Server {

    private _app: express.Application;
    private port: number;

    public constructor(port: number) {
        this._app = express();
        this.port = port;
    }

    public get app(): express.Application {
        return this._app;
    }

    public startServer(callback?: Function): void {
        this.app.listen(this.port, callback);
    } 

    public static initServer(PORT: number): Server {
        return new Server(PORT);
    }
}