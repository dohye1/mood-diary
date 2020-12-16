import {
  DIARY_SUCCESS,
  DIARY_FAILURE,
  EDIT_DIARY_SUCCESS,
  EDIT_DIARY_FAILURE,
  NEW_DIARY_SUCCESS,
  NEW_DIARY_FAILURE
} from '../actions/types';

const initState = {
  diaries: [],
  isUpdated: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case NEW_DIARY_SUCCESS:
      state.diaries.push(action.data.diary);
      state.isUpdated = action.data.diary._id;
      return { ...state };
    case NEW_DIARY_FAILURE:
      return { ...state };
    case DIARY_SUCCESS:
      state.diaries = action.data.diaries;
      return { ...state };
    case DIARY_FAILURE:
      return { ...state };
    case EDIT_DIARY_SUCCESS:
      const id = state.diaries.findIndex((diary) => {
        if (diary._id === action.data.diary._id) {
          return true;
        }
      });
      state.diaries[id] = action.data.diary;
      state.isUpdated = action.data.diary._id;
      return { ...state };
    case EDIT_DIARY_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
