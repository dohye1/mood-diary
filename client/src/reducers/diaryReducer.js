import {
    DIARY_SUCCESS,
    DIARY_FAILURE,
    EDIT_DIARY_SUCCESS,
    EDIT_DIARY_FAILURE,
    NEW_DIARY_SUCCESS,
    NEW_DIARY_FAILURE,
    DELETE_DIARY_SUCCESS,
    DELETE_DIARY_FAILURE,
    COUNT_SUCCESS,
    COUNT_FAILURE
} from '../actions/types';

const initState = {
    diaries :[]
}

const userReducer = ( state = initState , action) => {
    switch(action.type){
        case NEW_DIARY_SUCCESS :
            state.diaries.push(action.data.diary)
            return { ...state };
        case NEW_DIARY_FAILURE :
            return { ...state };
        case DIARY_SUCCESS :
            state.diaries = action.data.diaries;
            return { ...state };
        case DIARY_FAILURE :
            return { ...state };      
        default:
            return {...state};
    }
}

export default userReducer;