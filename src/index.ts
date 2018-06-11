import Server from './server/server';
import router from './router/router';
import { Request, Response } from 'express';
import { NextFunction } from 'connect';
import cors = require('cors');
import * as bodyParser from 'body-parser';


// Set the local PORT and prod PORT
const PORT: number | string = process.env.PORT || 4000;

// init express server
const server = Server.initServer(Number(PORT));

// accept body parser as JSON and CORS
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(cors());


// set all routers that you want to add
server.app.use(router);


// If the route do no exist, this will handle it!
server.app.use((req: Request, res: Response, next: NextFunction): Response => {
    return res.status(404).send({ "success": false, "message": 'sorry cant find that!', "data": null });
});

// start the express server
server.startServer((): void => {
    console.log(`Server Started on port ${PORT}`);
});