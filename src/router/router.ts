import { Router, Request, Response, RequestHandler } from 'express';
import DbManager from '../DataAccessLayer/DBConnections/MYSQL_dbManager';
import { Query, MysqlError, queryCallback, PoolConnection } from 'mysql';
import MYSQL_UserDAO from '../DataAccessLayer/DataAccessObject/IDAO/MYSQL/MYSQL_UserDAO';
import User from '../DataAccessLayer/Models/user';
import Res from '../Util/response';


export class RouterExample {

    private _router: Router;

    public constructor() {
        this._router = Router();
        this.routes();
    }

    public get router(): Router {
        return this._router;
    }

    private routes(): void {
        this.GET_allUsers();
        this.GET_user();
        this.POST_createUser();
        this.UPDATE_updateUser();
        this.DELETE_deleteUser();
    }

    private GET_allUsers(): void {
        this._router.get('/', (req: Request, res: Response): void => {
            const userDao: MYSQL_UserDAO = new MYSQL_UserDAO();
            userDao.readALL((results: User[] | null): Response => {
                return res.status(200).json(Res.RES<User[]>(true, results, 'Got all users'));
            });
        });
    }

    private GET_user(): void {
        this._router.get('/:id', (req: Request, res: Response): void => {
            if (req.params.id) {
                const userDao: MYSQL_UserDAO = new MYSQL_UserDAO();
                userDao.read(DbManager.db.escape(req.params.id), (results: User | null): Response => {
                    return res.status(200).json(Res.RES<User>(true, results, 'User fetched it successfully'));
                });
            }
        });
    }

    private POST_createUser(): void {
        this._router.post('/', (req: Request, res: Response): void => {
            const user: User = new User(null, (<User>req.body).name, (<User>req.body).lastName);
            if (user.isValid()) {
                const userDao: MYSQL_UserDAO = new MYSQL_UserDAO();
                userDao.create(user, (results: any | null): Response => {
                    return res.status(201).json(Res.RES<any>(true, results, 'Created user !'));
                });
            }
        });
    }

    private DELETE_deleteUser(): void {
        this._router.delete('/:id', (req: Request, res: Response): void => {
            if (req.params.id) {
                const userDao: MYSQL_UserDAO = new MYSQL_UserDAO();
                userDao.delete(DbManager.db.escape(req.params.id), (results: any | null): Response => {
                    return res.status(200).json(Res.RES<any>(true, results, 'Deleted user !'));
                });
            }
        });
    }

    private UPDATE_updateUser(): void {
        this._router.put('/:id', (req: Request, res: Response): void => {
            if (req.params.id) {
                const user: User = new User(DbManager.db.escape(req.params.id), (<User>req.body).name, (<User>req.body).lastName);
                const userDao: MYSQL_UserDAO = new MYSQL_UserDAO();
                userDao.update(user, (results: any | null): Response => {
                    return res.status(200).json(Res.RES<any>(true, results, 'Updated user !'));
                });
            }
        });
    }
}

const allRouters: RouterExample = new RouterExample();

export default allRouters.router;
