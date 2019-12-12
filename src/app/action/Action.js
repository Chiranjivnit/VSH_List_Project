import {
    FETCH_API_REQUEST,
    FETCH_API_SUCCESS,
    FETCH_API_FAILED
} from '../constant/Actiontype';
import API from "../apiService/Api";

export const fetchApiRequest = () => {
    return {
        type: FETCH_API_REQUEST
    };
};

export const fetchApiSuccess = apiDta => {
    console.log('apiDta',apiDta)
    return {
        type: FETCH_API_SUCCESS,
        apiDta:apiDta
    };
};

export const fetchApiFailed = err => {
    return {
        type: FETCH_API_FAILED,
        err
    };
};

export const fetchApi = () => {
    console.log('fetchApi')
    return dispatch => {
        dispatch(fetchApiRequest());
        API.get()
            .then(res => {
                dispatch(fetchApiSuccess(res.data.data))
                console.log("res", res);
            })
            .catch((err)=>{
                dispatch(fetchApiFailed(err))
            })
    };
};
