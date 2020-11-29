import {DIARY_REQUEST, EDIT_DIARY_REQUEST, NEW_DIARY_REQUEST, DELETE_DIARY_REQUEST, COUNT_REQUEST} from './types';

export const getDiary = () => ({
    type: DIARY_REQUEST
})

export const editDiary = (diaryInfo) => ({
    type: EDIT_DIARY_REQUEST,
    payload: diaryInfo
})

export const newDiary = (diaryInfo) => ({
    type: NEW_DIARY_REQUEST,
    payload: diaryInfo
})

export const deleteDiary = (diaryInfo) => ({
    type: DELETE_DIARY_REQUEST,
    payload: diaryInfo
})

export const countDiary = () => ({
    type: COUNT_REQUEST
})
