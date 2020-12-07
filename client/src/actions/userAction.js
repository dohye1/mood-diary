import {ME_REQUEST, EDIT_ME_REQUEST, NEW_ME_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST} from './types';

export const getMe = () => ({
    type: ME_REQUEST
})

export const editMe = (userInfo) => ({
    type: EDIT_ME_REQUEST,
    payload: userInfo
})

export const newUser = (userInfo) => ({
    type: NEW_ME_REQUEST,
    payload: userInfo
})

export const login = (userInfo) => ({
    type: LOGIN_REQUEST,
    payload: userInfo
})

export const logout = () => ({
    type: LOGOUT_REQUEST
})