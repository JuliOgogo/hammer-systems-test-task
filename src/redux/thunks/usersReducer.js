import {usersAPI} from "./api";

const initialState = {
    users: [],
    isFetching: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleIsFetching = (value) => ({type: TOGGLE_IS_FETCHING, value})

export const getUsers = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))

    const data = await usersAPI.getUsers()

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data))
}

const SET_USERS = 'users/SET_USERS'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'