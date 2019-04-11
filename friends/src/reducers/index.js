import { 
    FETCH_FD_START,
    FETCH_FD_SUCCESS,
    FETCH_FD_FAILURE
} from '../actions/friendData'

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/login'

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}

export const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: null,
                fetchingFriends: false,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggingIn: false
            }
        case FETCH_FD_START:
            return {
                ...state,
                error: null,
                fetchingFriends: true,
                errorStatusCode: null
            }
        case FETCH_FD_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status
            }
        default: 
            return state;
    }
}

 