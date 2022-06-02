import {
    updateUserFailure,
    updateUserSuccess,
    updateUserStart,
    loginFailure,
    loginStart,
    loginSuccess,
} from './AuthAction';
import { checkLogin, upgradeUser } from '../actions/index'

// user login
export const login = async(user, dispatch) => {
    dispatch(loginStart());
    try {
        checkLogin(user).then(res => {
            dispatch(loginSuccess(res.data));
        })
    } catch (err) {
        dispatch(loginFailure());
    }
};

//update user
export const updateUser = async(id, user, dispatch) => {
    dispatch(updateUserStart());
    try {
        upgradeUser(id, user).then((res) => {
            dispatch(updateUserSuccess(res.data))
        })
    } catch (err) {
        dispatch(updateUserFailure());
    }
};