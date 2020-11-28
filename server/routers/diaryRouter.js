import express from 'express';
import routes from '../routes';
import {
  getDiary,
  postDiary,
  patchDiary,
  deleteDiary
} from '../controllers/diaryController';

const diaryRouter = express.Router();

diaryRouter.get(routes.root, getDiary);
diaryRouter.post(routes.root, postDiary);
diaryRouter.patch(routes.root, patchDiary);
diaryRouter.delete(routes.root, deleteDiary);

export default diaryRouter;
