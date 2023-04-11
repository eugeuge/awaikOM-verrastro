export const SET_USERID = 'SET_USERID';
export const SET_USERPHOTO = 'SET_USERPHOTO';

export const setUserID = (id) => ({
    type: SET_USERID,
    userID: id,
})

export const setUserPhoto = (uri) => ({
    type: SET_USERPHOTO,
    userPhoto: uri,
})