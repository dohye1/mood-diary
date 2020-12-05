import express from 'express';
import {auth} from '../middleware';
import routes from '../routes';
import {
  getDiary,
  postDiary,
  patchDiary,
  deleteDiary
} from '../controllers/diaryController';

const diaryRouter = express.Router();

diaryRouter.get(routes.root, auth, getDiary);
diaryRouter.post(routes.root, auth, postDiary);
diaryRouter.patch(routes.root, patchDiary);
diaryRouter.delete(routes.root, deleteDiary);

export default diaryRouter;
