import {LOGIN_REQUEST, LOGOUT_REQUEST} from './types';

export const login = (userInfo) => ({
    type: LOGIN_REQUEST,
    payload: userInfo
})

export const logout = () => ({
    type: LOGOUT_REQUEST
})