import { loginFailure, loginStart, loginSuccess } from './AuthAction';
import { checkLogin } from '../actions/index'

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