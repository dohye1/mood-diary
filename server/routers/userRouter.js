import express from 'express';
import routes from '../routes';
import { auth } from '../middleware';

import {
  getUser,
  patchUser,
  postUser,
  postLogin,
  deleteUser
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.post(routes.login, postLogin);
userRouter.delete(routes.root, auth, deleteUser);
userRouter.post(routes.root, postUser);
userRouter.get(routes.root, auth, getUser);
userRouter.patch(routes.root, auth, patchUser);

export default userRouter;
