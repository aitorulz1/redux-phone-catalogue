import{
    GET_DATA,
    DATA_SUCCEED,
    DATA_ERROR
} from '../types';


// Cada reducer tiene su propio state

const initialState = {
    phones: [],
    listado: false,
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){

        case GET_DATA:
            return{
                ...state,
                loading: true
            }
        case DATA_SUCCEED:
            return{
                ...state,
                loading: false,
                phones: action.payload
            }
        case DATA_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }


        default:
            return state;
    }
}

