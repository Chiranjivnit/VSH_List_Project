import {
    FETCH_API_REQUEST,
    FETCH_API_SUCCESS,
    FETCH_API_FAILED
} from '../constant/Actiontype';


const initialState = {
    ListApiData: [],
    err: ""
};

const reducer = (state = initialState, action) => {
    console.log('action',action, state)
    switch (action.type) {
        case FETCH_API_REQUEST:
            return { ...state, fetch: true, };
        case FETCH_API_SUCCESS:
            return { ...state, fetch: false, ListApiData: action.apiDta };
        case FETCH_API_FAILED:
            return { ...state, fetch: false, err: action.err };
        default:
            return state;
    }
};
export default reducer;
