import { BG_SUCCESS,BG_FAILURE} from '../actions/types';

const initState = {
    colors:["#ba9595","#768e93", "#d0dcb6"]
}

const globalReducer = ( state = initState , action) => {
    switch(action.type){
        case BG_SUCCESS :
            state.colors = action.data
            return { ...state };
        case BG_FAILURE :
            return { ...state };
        
        default:
            return {...state};
    }
}

export default globalReducer;