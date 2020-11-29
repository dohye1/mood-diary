import {ME_REQUEST, EDIT_ME_REQUEST, NEW_ME_REQUEST, AVATAR_REQUEST} from './types';

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

export const editAvatar = (avatarInfo) => ({
    type: AVATAR_REQUEST,
    payload: avatarInfo
})