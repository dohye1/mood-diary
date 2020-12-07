import express from 'express';
import {auth} from '../middleware';
import routes from '../routes';
import {
  getDiary,
  postDiary,
  patchDiary
} from '../controllers/diaryController';

const diaryRouter = express.Router();

diaryRouter.get(routes.root, auth, getDiary);
diaryRouter.post(routes.root, auth, postDiary);
diaryRouter.patch(routes.root, patchDiary);

export default diaryRouter;
