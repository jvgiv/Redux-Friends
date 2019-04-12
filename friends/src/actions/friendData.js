import axios from 'axios'

import axiosWithAuth from '../utils/axiosWithAuth'


export const FETCH_FD_START = 'FETCH_FD_START'
export const FETCH_FD_SUCCESS = 'FETCH_FD_SUCCESS'
export const FETCH_FD_FAILURE = 'FETCH_FD_FAILURE'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_FD_START });
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_FD_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: FETCH_FD_FAILURE, payload: err.response })
        })
}