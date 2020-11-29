import express from 'express';
import routes from '../routes';
import {
  getDiary,
  postDiary,
  patchDiary,
  deleteDiary,
  getCount
} from '../controllers/diaryController';

const diaryRouter = express.Router();

diaryRouter.get(routes.root, getDiary);
diaryRouter.post(routes.root, postDiary);
diaryRouter.patch(routes.root, patchDiary);
diaryRouter.delete(routes.root, deleteDiary);
diaryRouter.delete(routes.count, getCount);

export default diaryRouter;
