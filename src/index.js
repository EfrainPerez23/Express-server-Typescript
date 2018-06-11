import Server from './server/server';
import router from './router/router';
import * as bodyParser from 'body-parser';
const PORT = process.env.PORT || 4000;
const server = Server.initServer(Number(PORT));
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(cors());
server.app.use(router);
server.app.use((req, res, next) => {
    return res.status(404).send({ "success": false, "status": 404, "message": 'sorry cant find that!', "data": null });
});
server.startServer(() => {
    console.log(`Server Started on port ${PORT}`);
});
