export const ADD_FRIEND = "ADD_FRIEND"
export const CLICK_FRIEND = "CLICK_FRIEND"
export const DELETE_FRIEND = "DELETE_FRIEND"

export const addFriend = friend => {
    return {
        type: ADD_FRIEND,
        id: Date.now(),
        payload: friend
    }
}

export const clickFriend = id => {
    return {
        type: CLICK_FRIEND,
        payload: id
    }
}

export const deleteFriend = friend => {
    return {
        type: DELETE_FRIEND,
        payload: friend
    }
}