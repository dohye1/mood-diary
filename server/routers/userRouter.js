import express from 'express';
import routes from '../routes';
import { upload, auth } from '../middleware';

import { postAvatar, getMe, patchMe, postUser, postLogin, getLogout } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post(routes.avatar, upload.single('avatar'), postAvatar);
userRouter.post(routes.login, postLogin);
userRouter.get(routes.logout, getLogout);
userRouter.get(routes.me, getMe);
userRouter.patch(routes.me, patchMe);
userRouter.post(routes.root, postUser);

export default userRouter;