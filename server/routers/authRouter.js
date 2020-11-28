import express from 'express';
import routes from '../routes';
import { postLogin, getLogout } from '../controllers/authController';

const authRouter = express.Router();

authRouter.post(routes.login, postLogin);
authRouter.get(routes.logout, getLogout);

export default authRouter;