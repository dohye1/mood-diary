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
    login : false
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
            state.login = true;
            return { ...state };
        case LOGIN_FAILURE :
            state.login = false;
            return { ...state }; 
        case ME_SUCCESS :
            return { ...state };
        case ME_FAILURE :
            return { ...state };
        case EDIT_ME_SUCCESS :
        case EDIT_ME_FAILURE :
            return { ...state };
       
        default:
            return {...state};
    }
}

export default userReducer;