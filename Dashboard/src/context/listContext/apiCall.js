import {
    deleteListFailure,
    deleteListStart,
    deleteListSuccess,
    updateListFailure,
    updateListSuccess,
    updateListStart,
    createListFailure,
    createListStart,
    createListSuccess,
    getListsFailure,
    getListsStart,
    getListsSuccess,
} from './ListAction';
import { fetchList, uploadList, upgradeList, removeList } from '../../actions/index';

//get list
export const getLists = async(dispatch) => {
    dispatch(getListsStart());
    try {
        fetchList().then((res) => {
            dispatch(getListsSuccess(res.data));
        })
    } catch (err) {
        dispatch(getListsFailure());
    }
};

//create list
export const createList = async(list, dispatch) => {
    dispatch(createListStart());
    try {
        uploadList(list).then((res) => {
            dispatch(createListSuccess(res.data));
        });
    } catch (err) {
        dispatch(createListFailure());
    }
};

//update list
export const updateList = async(id, list, dispatch) => {
    dispatch(updateListStart());
    try {
        upgradeList(id, list).then((res) => {
            dispatch(updateListSuccess(res.data))
        })
    } catch (err) {
        dispatch(updateListFailure());
    }
};

//delete list
export const deleteList = async(id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await removeList(id);
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
};