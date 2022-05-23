export const getUserStart = () => ({
    type: 'GET_USERS_START',
});

export const getUserSuccess = (users) => ({
    type: 'GET_USERS_SUCCESS',
    payload: users,
});

export const getUserFailure = () => ({
    type: 'GET_USERS_FAILURE',
});

// export const createMovieStart = () => ({
//     type: 'CREATE_MOVIE_START',
// });

// export const createMovieSuccess = (movie) => ({
//     type: 'CREATE_MOVIE_SUCCESS',
//     payload: movie,
// });

// export const createMovieFailure = () => ({
//     type: 'CREATE_MOVIE_FAILURE',
// });

export const updateUserStart = () => ({
    type: 'UPDATE_USER_START',
});

export const updateUserSuccess = (user) => ({
    type: 'UPDATE_USER_SUCCESS',
    payload: user,
});

export const updateUserFailure = () => ({
    type: 'UPDATE_USER_FAILURE',
});

export const deleteUserStart = () => ({
    type: 'DELETE_USER_START',
});

export const deleteUserSuccess = (id) => ({
    type: 'DELETE_USER_SUCCESS',
    payload: id,
});

export const deleteUserFailure = () => ({
    type: 'DELETE_USER_FAILURE',
});