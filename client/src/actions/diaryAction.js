import { DIARY_REQUEST, EDIT_DIARY_REQUEST, NEW_DIARY_REQUEST } from './types';

export const getDiary = () => ({
  type: DIARY_REQUEST
});

export const editDiary = (diaryInfo) => ({
  type: EDIT_DIARY_REQUEST,
  payload: diaryInfo
});

export const newDiary = (diaryInfo) => ({
  type: NEW_DIARY_REQUEST,
  payload: diaryInfo
});
