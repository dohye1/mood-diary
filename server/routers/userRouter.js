import express from 'express';
import routes from '../routes';
import { upload } from '../middleware';

import { postAvatar, getMe, patchMe, postUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post(routes.avatar, upload.single('avatar'), postAvatar);
userRouter.get(routes.me, getMe);
userRouter.patch(routes.me, patchMe);
userRouter.post(routes.root, postUser);

export default userRouter;