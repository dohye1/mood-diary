import { ME_SUCCESS,
ME_FAILURE,
EDIT_ME_SUCCESS,
EDIT_ME_FAILURE,
NEW_ME_SUCCESS,
NEW_ME_FAILURE,
LOGIN_SUCCESS,
LOGIN_FAILURE,
} from '../actions/types';

const initState = {
    register : false,
    isAuth : localStorage.getItem('user_token'),
    user : {}
}

const userReducer = ( state = initState , action) => {
    switch(action.type){
        case NEW_ME_SUCCESS :
            state.register = true;
            return { ...state };
        case NEW_ME_FAILURE :
            state.register = false;
            return { ...state };        
        case LOGIN_SUCCESS :
            state.user = action.data.user;
            state.isAuth = action.data.user.token;
            return { ...state };
        case LOGIN_FAILURE :
            return { ...state };
        case ME_SUCCESS :
            state.user = action.data.user;
            return { ...state };
        case ME_FAILURE :
            return { ...state };
        case EDIT_ME_SUCCESS :
            console.log(action.data);
            console.log('여기가 마지막에 실행되야함')
            state.user = action.data.user;
            console.log(state.user);
            return { ...state };
        case EDIT_ME_FAILURE :
            return { ...state };
        default:
            return {...state};
    }
}

export default userReducer;