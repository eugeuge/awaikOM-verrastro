export const SET_USERID = 'SET_USERID';
export const SET_USERPHOTO = 'SET_USERPHOTO';
export const ADD_FAVORITEMEDITATION = 'ADD_FAVORITEMEDITATION';
export const DELETE_FAVORITEMEDITATION = 'DELETE_FAVORITEMEDITATION';

export const setUserID = (id) => ({
    type: SET_USERID,
    userID: id,
})

export const setUserPhoto = (uri) => ({
    type: SET_USERPHOTO,
    userPhoto: uri,
})

export const addFavoriteMeditation = (meditation) => ({
    type: ADD_FAVORITEMEDITATION,
    favoriteMeditation: meditation,
})

export const deleteFavoriteMeditation = (meditation) => ({
    type: DELETE_FAVORITEMEDITATION,
    favoriteMeditationToDelete: meditation,
})



