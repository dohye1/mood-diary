import { ME_SUCCESS,
ME_FAILURE,
EDIT_ME_SUCCESS,
EDIT_ME_FAILURE,
NEW_ME_SUCCESS,
NEW_ME_FAILURE} from '../actions/types';

const initState = {
    userToken : '',
    register : false
}

const userReducer = ( state = initState , action) => {
    switch(action.type){
        case ME_SUCCESS :
            return { ...state };
        case ME_FAILURE :
            return { ...state };
        case EDIT_ME_SUCCESS :
        case EDIT_ME_FAILURE :
            return { ...state };
        case NEW_ME_SUCCESS :
            state.register = true;
            return { ...state };
        case NEW_ME_FAILURE :
            state.register = false;
            return { ...state };
        default:
            return {...state};
    }
}

export default userReducer;